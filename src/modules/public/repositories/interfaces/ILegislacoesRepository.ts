import ICreateLegislacaoDTO from '../../dtos/ICreateLegislacaoDTO';
import Legislacao from '../../entities/Legislacao';

export default interface ILegislacoesRepository {
  findById(id: number): Promise<Legislacao | undefined>;

  create(data: ICreateLegislacaoDTO): Promise<Legislacao>;

  findByNome(decreto_leg: string): Promise<Legislacao | undefined>;

  listLegislacao(): Promise<Legislacao[] | undefined>;
}
