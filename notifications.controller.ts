import { Createnotifications } from "./dtos/ceate-notifications.dto";
import { notifications } from "./notifications.entity";
import { notificationsService } from './notifications.servis';
import {Body, Controller, Get, HttpStatus, Post, Res} from '@nestjs/common';
import { Response } from 'express';

@Controller('notifications')
export class notificationsController {
 
    constructor (private readonly notificationsService: notificationsService) {}
    @Post()
   async create(@Body() dto: Createnotifications ): Promise<notifications> {
    const generator = this.notificationsService.createWithGenerator(dto);
    for await (const notifications of generator ){
      
        return notifications;
    }
    }

  @Get('sse')
  async sse(@Res() response: Response) {
    // Set up SSE response headers
    response.setHeader('Content-Type', 'text/event-stream');
    response.setHeader('Cache-Control', 'no-cache');
    response.setHeader('Connection', 'keep-alive');

   
    // Get data using the generator function
    const generator = this.notificationsService.getWithGenerator();

    // Stream data as SSE events
    for await (const notification of generator) {
      
      response.write(`data: ${JSON.stringify(notification)}\n\n`);
      
    }

    response.end();
  }

}






