import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TwilioService } from 'nestjs-twilio';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User.name) private readonly userModel: Model<UserDocument>,
		private readonly twilioService: TwilioService
	) {}

	async listAll(): Promise<User[]> {
		return await this.userModel.find().exec();
	}

	async create(createUserDto: CreateUserDto): Promise<User> {
		return await this.userModel.create(createUserDto);
	}

	async verifyPhone(phone: string) {
		await this.twilioService.client.messages.create({
			body: `This is your cha7 verification code: `,
			from: process.env.TWILIO_PHONE_NUMBER,
			to: phone
		});
	}
}
