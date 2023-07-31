import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Credit } from './credit.entity';
import { Repository } from 'typeorm';
import { CreateCreditDto } from "./dto/create-credit.dto";
import { jsonCreditDto } from './dto/json-credit.dto';

@Injectable()
export class CreditsService {

  constructor(@InjectRepository(Credit) private creditRepository: Repository<Credit>) {}

  createCreditSimulation(simulation: CreateCreditDto) {

    if (simulation.installments != null) {

      const credit = new Credit()
      const { amount, installments } = simulation

      const value = (amount / installments)* 3.0

      const jsonCredit: jsonCreditDto = {
        dniClient: !simulation.dni ? 123456789 : simulation.dni,
        creditAmount: simulation.amount,
        installments: simulation.installments,
        status: HttpStatus.CREATED,
        installmentsValue: value
      }

      credit.json_TRX = JSON.stringify(jsonCredit)

      const newCredit = this.creditRepository.create(credit)
      return this.creditRepository.save(newCredit)
    }
    return null
  }
}
