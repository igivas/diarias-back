import { injectable, inject } from 'tsyringe';
import IPessoasUniformesRepository from '../repositories/interfaces/IPessoasUniformesRepository';

import AppError from '../../../errors/AppError';
import PessoaUniforme from '../entities/PessoaUniforme';

@injectable()
class ShowPolicialUniformeService {
  constructor(
    @inject('PessoasUniformesRepository')
    private pessoaUniformeRepository: IPessoasUniformesRepository,
  ) {}

  public async execute(peu_codigo: number): Promise<PessoaUniforme> {
    const uniforme = await this.pessoaUniformeRepository.findById(peu_codigo);

    if (!uniforme) {
      throw new AppError('O endereço não existe', 404);
    }

    return uniforme;
  }
}

export default ShowPolicialUniformeService;
