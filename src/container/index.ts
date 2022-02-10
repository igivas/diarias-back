import { container } from 'tsyringe';

import IGruposUsuarioRepository from '@modules/seg/repositories/interfaces/IGruposUsuarioRespository';
import GruposUsuarioRepository from '@modules/seg/repositories/GruposUsuarioRepository';

import UsuariosUnidadesRepository from '@modules/public/repositories/UsuariosUnidadesRepository';
import IUsuariosUnidadesRepository from '@modules/public/repositories/interfaces/IUsuariosUnidadesRepository';
import ILegislacoesRepository from '@modules/public/repositories/interfaces/ILegislacoesRepository';
import LegislacoesRepository from '@modules/public/repositories/LegislacoesRepository';
import IHashProvider from '../modules/seg/providers/HashProvider/IHashProvider';
import HashProvider from '../modules/seg/providers/HashProvider/ScriptCaseHashProvider';

import IUsuariosRepository from '../modules/seg/repositories/interfaces/IUsuariosRepository';
import UsuariosRepository from '../modules/seg/repositories/UsuariosRepository';

import IGraduacoesRepository from '../modules/public/repositories/interfaces/IGraduacoesRepository';
import GraduacoesRepository from '../modules/public/repositories/GraduacoesRepository';

import IUsuariosSegRepository from '../modules/public/repositories/interfaces/IUsuariosRepository';
import UsuariosSegRepository from '../modules/public/repositories/UsuariosRepository';

import IUnidadesRepository from '../modules/public/repositories/interfaces/IUnidadesRepository';
import UnidadesRepository from '../modules/public/repositories/UnidadesRepository';

import IPessoasEmailsRepository from '../modules/public/repositories/interfaces/IPessoasEmailsRepository';
import PessoasEmailsRepository from '../modules/public/repositories/PessoasEmailsRepository';

import IPessoasEnderecosRepository from '../modules/public/repositories/interfaces/IPessoasEnderecosRepository';
import PessoasEnderecosRepository from '../modules/public/repositories/PessoasEnderecosRepository';

import IPessoasTelefonesRepository from '../modules/public/repositories/interfaces/IPessoasTelefonesRepository';
import PessoasTelefonesRepository from '../modules/public/repositories/PessoasTelefonesRepository';

import IPessoasFisicasPmsPublicRepository from '../modules/public/repositories/interfaces/IPessoasFisicasPmsRepository';
import PessoasFisicasPmsPublicRepository from '../modules/public/repositories/PessoasFisicasPmsRepository';

import ISistemasRepository from '../modules/seg/repositories/interfaces/ISistemasRespository';
import SistemasRepository from '../modules/seg/repositories/SistemasRepository';

import IPessoasUniformesRepository from '../modules/public/repositories/interfaces/IPessoasUniformesRepository';
import PessoasUniformesRepository from '../modules/public/repositories/PessoasUniformesRepository';

import IPoliciaisECivisRepository from '../modules/sga/repositories/interfaces/IPoliciaisECivisRepository';
import PoliciaisECivisRepository from '../modules/sga/repositories/PoliciaisECivisRepository';

container.registerSingleton<IGruposUsuarioRepository>(
  'GruposUsuarioRepository',
  GruposUsuarioRepository,
);

container.registerSingleton<IPessoasUniformesRepository>(
  'PessoasUniformesRepository',
  PessoasUniformesRepository,
);

container.registerSingleton<IUsuariosRepository>(
  'UsuariosRepository',
  UsuariosRepository,
);

container.registerSingleton<IHashProvider>('HashProvider', HashProvider);

container.registerSingleton<IGraduacoesRepository>(
  'GraduacoesRepository',
  GraduacoesRepository,
);

container.registerSingleton<IUsuariosSegRepository>(
  'UsuariosSegRepository',
  UsuariosSegRepository,
);

container.registerSingleton<IUsuariosUnidadesRepository>(
  'UsuariosUnidadesRepository',
  UsuariosUnidadesRepository,
);

container.registerSingleton<IUnidadesRepository>(
  'UnidadesRepository',
  UnidadesRepository,
);

container.registerSingleton<IPessoasFisicasPmsPublicRepository>(
  'PessoasFisicasPmsPublicRepository',
  PessoasFisicasPmsPublicRepository,
);

container.registerSingleton<IPessoasEmailsRepository>(
  'PessoasEmailsRepository',
  PessoasEmailsRepository,
);

container.registerSingleton<IPessoasEnderecosRepository>(
  'PessoasEnderecosRepository',
  PessoasEnderecosRepository,
);

container.registerSingleton<IPessoasTelefonesRepository>(
  'PessoasTelefonesRepository',
  PessoasTelefonesRepository,
);

container.registerSingleton<ISistemasRepository>(
  'SistemasRepository',
  SistemasRepository,
);

container.registerSingleton<IPoliciaisECivisRepository>(
  'PoliciaisECivisRepository',
  PoliciaisECivisRepository,
);
container.registerSingleton<ILegislacoesRepository>(
  'LegislacoesRepository',
  LegislacoesRepository,
);
