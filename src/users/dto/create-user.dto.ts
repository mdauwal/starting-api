import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  role: string; // 'farmer', 'consumer', or 'logistics_partner'

  @IsOptional()
  @IsString()
  location?: string;
}
