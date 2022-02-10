import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { Repository } from 'typeorm';
import Legislacao from '../entities/Legislacao';
import CreateLegislacaoService from '../services/CreateLegislacaoService';
import ListLegislacaoService from '../services/ListLegislacaoService';

export default class LegislacoesController {
  // private legislacaoRepository: Repository<Legislacao>;

  public async index(request: Request, response: Response): Promise<Response> {
    const showListLegislacao = container.resolve(ListLegislacaoService);

    const listLegislacao = await showListLegislacao.execute();

    return response.status(200).json(listLegislacao);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { id_usuario } = request.user;
    const { decreto_leg } = request.body;
    const createLegislacaoService = container.resolve(CreateLegislacaoService);

    const legislacaoCreated = await createLegislacaoService.execute({
      decreto_leg,
      id_usuario,
    });

    return response.json(legislacaoCreated);
  }
}
