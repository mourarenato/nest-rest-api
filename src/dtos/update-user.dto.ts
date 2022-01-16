import { UserRole } from '../admin/user-roles.enum';
import { IsString, IsEmail, IsOptional } from 'class-validator';
export class UpdateUserDto {
  @IsOptional()
  @IsString({
    message: 'Enter a valid user name',
  })
  name: string;

  @IsOptional()
  @IsEmail(
    {},
    {
      message: 'Enter a valid email address',
    },
  )
  email: string;

  @IsOptional()
  role: UserRole;

  @IsOptional()
  status: boolean;
}
