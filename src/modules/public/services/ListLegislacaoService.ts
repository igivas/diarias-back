import { inject, injectable } from 'tsyringe';
import Legislacao from '../entities/Legislacao';

import ILegislacoesRepository from '../repositories/interfaces/ILegislacoesRepository';

@injectable()
class ListLegislacaoService {
  constructor(
    @inject('LegislacoesRepository')
    private legislacaoRepository: ILegislacoesRepository,
  ) {}

  public async execute(): Promise<Legislacao[] | undefined> {
    const listarLegislacoes = await this.legislacaoRepository.listLegislacao();
    return listarLegislacoes;
  }
}

export default ListLegislacaoService;
