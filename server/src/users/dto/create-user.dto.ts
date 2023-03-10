import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
	@IsNotEmpty()
	name: string;

	@IsNotEmpty()
	phoneNumber: string;

	photo?: string;
}
