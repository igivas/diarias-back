import { injectable, inject } from 'tsyringe';
import IPessoasFisicasPmsRepository from '../repositories/interfaces/IPessoasFisicasPmsRepository';

import AppError from '../../../errors/AppError';
import PessoaFisicaPm from '../entities/PessoaFisicaPm';

@injectable()
class ShowPolicialService {
  constructor(
    @inject('PessoasFisicasPmsPublicRepository')
    private pessoaRepository: IPessoasFisicasPmsRepository,
  ) {}

  public async execute(pes_codigo: string): Promise<PessoaFisicaPm> {
    const policial = await this.pessoaRepository.findByPesCodigo(pes_codigo);

    if (!policial) {
      throw new AppError('O policial não existe', 404);
    }

    return policial;
  }
}

export default ShowPolicialService;
