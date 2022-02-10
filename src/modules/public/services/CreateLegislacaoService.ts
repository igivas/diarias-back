import IUsuariosRepository from '@modules/seg/repositories/interfaces/IUsuariosRepository';
import AppError from 'errors/AppError';
import { inject, injectable } from 'tsyringe';
import Legislacao from '../entities/Legislacao';
import ILegislacoesRepository from '../repositories/interfaces/ILegislacoesRepository';

interface IRequestLegislacao {
  decreto_leg: string;
  id_usuario: string;
}

@injectable()
class CreateLegislacaoService {
  constructor(
    /* @inject('UsuariosRepository')
    private usuariosRepository: IUsuariosRepository, */

    @inject('LegislacoesRepository')
    private legislacaoRepository: ILegislacoesRepository,
  ) {}

  public async execute(data: IRequestLegislacao): Promise<Legislacao> {
    const legislacaoExists = await this.legislacaoRepository.findByNome(
      data.decreto_leg,
    );
    if (legislacaoExists) {
      throw new AppError('Este tipo de legislação já existe!');
    }

    const legislacao = await this.legislacaoRepository.create({
      ...data,
      usuario_cadastro: data.id_usuario,
    });
    return legislacao;
  }
}

export default CreateLegislacaoService;
