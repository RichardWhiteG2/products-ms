import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    // If it were apirest the following code would not be necessary
    @IsNumber()
    @IsPositive()
    id: number;
}
