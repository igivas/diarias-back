import { injectable, inject } from 'tsyringe';
import IUnidadesRepository from '../repositories/interfaces/IUnidadesRepository';

import AppError from '../../../errors/AppError';
import Unidade from '../entities/Unidade';

@injectable()
class ShowUnidadeService {
  constructor(
    @inject('UnidadesRepository')
    private unidadesRepository: IUnidadesRepository,
  ) {}

  public async execute(uni_codigo: number): Promise<Unidade> {
    const unidade = await this.unidadesRepository.findById(uni_codigo);

    if (!unidade) {
      throw new AppError('A unidade não existe', 404);
    }

    return unidade;
  }
}

export default ShowUnidadeService;
