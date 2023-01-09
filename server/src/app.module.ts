import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TwilioModule } from 'nestjs-twilio';
import { dbUri } from './constants';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		MongooseModule.forRoot(dbUri[process.env.NODE_ENV], {
			connectTimeoutMS: 1000
		}),
		TwilioModule.forRoot({
			accountSid: process.env.TWILIO_ACCOUNT_SID,
			authToken: process.env.TWILIO_AUTH_TOKEN
		}),
		EventsModule,
		UsersModule
	]
})
export class AppModule {}
