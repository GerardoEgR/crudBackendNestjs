import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreditsService } from './credits.service';
import { CreateCreditDto } from './dto/create-credit.dto';
import { CreateResponseDto } from './dto/credit-response.dto';

@Controller('credits')
export class CreditsController {

  constructor(private creditsService: CreditsService) {}

  @Post()
  async createCreditSimulation(@Body() simulation: CreateCreditDto,): Promise<CreateResponseDto> {
    try {
      const createSimulation = await this.creditsService.createCreditSimulation(simulation)

      const jsonString = createSimulation.json_TRX
      const jsonObject =  JSON.parse(jsonString)

      const responseJson: CreateResponseDto = {
        status: HttpStatus.CREATED,
        installmentsValue: jsonObject.installmentsValue
      }

      return responseJson
    }catch (error) {
      throw new HttpException('Error al realizar la consulta', HttpStatus.INTERNAL_SERVER_ERROR)
    }
    
  }
}
