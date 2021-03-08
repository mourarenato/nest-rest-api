/* A DTO is an object that defines how the data will be sent over the network. 
We could determine the DTO schema by using TypeScript interfaces, or by simple classes */

import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'Please, inform your mail address',
  })
  @IsEmail(
    {},
    {
      message: 'Please, inform a valid mail address',
    },
  )
  @MaxLength(200, {
    message: 'Email address must be less than 200 characters',
  })
  email: string;

  @IsNotEmpty({
    message: 'Enter user name',
  })
  @MaxLength(200, {
    message: 'User name must be less than 200 characters',
  })
  name: string;

  @IsNotEmpty({
    message: 'Enter password',
  })
  @MinLength(6, {
    message: 'Password must be at least 6 characters',
  })
  password: string;

  @IsNotEmpty({
    message: 'Enter password confirmation',
  })
  @MinLength(6, {
    message: 'Password confirmation must be at least 6 characters',
  })
  passwordConfirmation: string;
}