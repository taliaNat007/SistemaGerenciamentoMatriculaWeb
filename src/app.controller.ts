import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('inicial')
  getHello(): object {

    return {
      titulo: 'Gerenciamento de Alunos Musicistas',
      horaAgora: new Date().toLocaleString('pt-BR'),
    };
  }

  @Get('sobre')
  @Render('_sobre')
  getSobre(): object {
    return {
      titulo: 'Seção de informações do sistema web.',
    };
  }


}
