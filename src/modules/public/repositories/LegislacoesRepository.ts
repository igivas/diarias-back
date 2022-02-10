import {
  Brackets,
  getRepository,
  QueryRunner,
  Raw,
  Repository,
  SelectQueryBuilder,
} from 'typeorm';
import ICreateLegislacaoDTO from '../dtos/ICreateLegislacaoDTO';
import Legislacao from '../entities/Legislacao';
import ILegislacoesRepository from './interfaces/ILegislacoesRepository';

class LegislacoesRepository implements ILegislacoesRepository {
  private legislacaoRepository: Repository<Legislacao>;

  constructor() {
    this.legislacaoRepository = getRepository(Legislacao);
  }

  public async findById(id: number): Promise<Legislacao | undefined> {
    const legislacao = await this.legislacaoRepository.findOne(id);

    return legislacao;
  }

  public async findByNome(nome: string): Promise<Legislacao | undefined> {
    return this.legislacaoRepository.findOne({
      where: {
        decreto_leg: Raw(
          nomeDB => `LOWER(TRIM(${nomeDB})) ilike lower(TRIM('${nome}'))`,
        ),
      },
    });
  }

  public async listLegislacao(): Promise<Legislacao[] | undefined> {
    const legislacoes = await this.legislacaoRepository.find({
      select: ['decreto_leg', 'data_cadastro'],
    });

    return legislacoes;
  }

  public async create({
    decreto_leg,
    usuario_cadastro,
  }: ICreateLegislacaoDTO): Promise<Legislacao> {
    const legislacao = this.legislacaoRepository.create({
      decreto_leg,
      usuario_cadastro,
      data_cadastro: new Date(),
    });

    const novaLegislacao = await this.legislacaoRepository.save(legislacao);

    return novaLegislacao;
  }

  public async update(
    legislacao: Legislacao,
    newData: Partial<Legislacao>,
  ): Promise<Legislacao | undefined> {
    const legislacaoUpdate = this.legislacaoRepository.merge(
      legislacao,
      newData,
    );

    return this.legislacaoRepository.save(legislacaoUpdate);
  }
}

export default LegislacoesRepository;
