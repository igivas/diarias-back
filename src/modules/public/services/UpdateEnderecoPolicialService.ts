import { injectable, inject } from 'tsyringe';
import AppError from '../../../errors/AppError';
import PessoaEndereco from '../entities/PessoaEndereco';

import IPessoasEnderecosRepository from '../repositories/interfaces/IPessoasEnderecosRepository';

interface IRequest {
  id_usuario: string;
  pes_codigo_endereco: number;
  pes_codigo: string;
  pes_tipo_endereco: string;
  pes_situacao_endereco: string;
  pes_cep: string;
  pes_endereco: string;
  pes_endereco_num: string;
  pes_endereco_complemento: string;
  pes_bairro: string;
  pes_cidade: string;
  pes_estado: string;
  pes_pais: string;
}

@injectable()
class UpdateEnderecoPolicialService {
  constructor(
    @inject('PessoasEnderecosRepository')
    private pessoaEnderecosRepository: IPessoasEnderecosRepository,
  ) {}

  public async execute({
    pes_codigo_endereco,
    id_usuario,
    ...rest
  }: IRequest): Promise<PessoaEndereco> {
    const endereco = await this.pessoaEnderecosRepository.findById(
      pes_codigo_endereco,
    );

    if (!endereco) {
      throw new AppError('Endereco não existe!', 404);
    }

    const enderecoUpdated = await this.pessoaEnderecosRepository.update(
      endereco,
      { ...rest, usuario_alteracao: id_usuario },
    );

    return enderecoUpdated;
  }
}

export default UpdateEnderecoPolicialService;
