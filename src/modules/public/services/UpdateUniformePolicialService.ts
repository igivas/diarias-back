import { injectable, inject } from 'tsyringe';
import AppError from '../../../errors/AppError';
import PessoaUniforme from '../entities/PessoaUniforme';

import IPessoasUniformesRepository from '../repositories/interfaces/IPessoasUniformesRepository';

interface IRequest {
  peu_codigo: number;
  peu_cabeca: number;
  peu_blusa_interna: string;
  peu_calca: number;
  peu_sapato: number;
  peu_editou: number;
  peu_gandola: number;
  peu_coldre: string;
  peu_combatshirt: string;
  data_alteracao: string;
  usuario_alteracao: string;
  id_usuario: string;
}

@injectable()
class UpdateEnderecoPolicialService {
  constructor(
    @inject('PessoasUniformesRepository')
    private pessoaUniformesRepository: IPessoasUniformesRepository,
  ) {}

  public async execute({
    peu_codigo,
    id_usuario,
    ...rest
  }: IRequest): Promise<PessoaUniforme> {
    const uniforme = await this.pessoaUniformesRepository.findByIdSemRel(
      peu_codigo,
    );

    if (!uniforme) {
      throw new AppError('Endereco não existe!', 404);
    }

    const uniformeUpdated = await this.pessoaUniformesRepository.update(
      uniforme,
      { ...rest, usuario_alteracao: id_usuario, peu_editou: 1 },
    );

    return uniformeUpdated;
  }
}

export default UpdateEnderecoPolicialService;
