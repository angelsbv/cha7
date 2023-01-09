import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get('listAll')
	async listAll(): Promise<User[]> {
		return await this.usersService.listAll();
	}

	@Post('create')
	async create(@Body() createUserDto: CreateUserDto) {
		return await this.usersService.create(createUserDto);
	}

	@Post('verifyPhone')
	async verifyPhone(@Query('phone') phone: string) {
		await this.usersService.verifyPhone(phone);
	}
}
