import { Module } from '@nestjs/common';
import { CalculatorModule } from './calculator/calculator.module';

@Module({
  imports: [CalculatorModule],
})
export class AppModule {}
