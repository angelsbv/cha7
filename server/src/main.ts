// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsOptions } from './constants';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const port = process.env.PORT || 3000;
	app.enableCors(corsOptions);
	app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: false }));
	await app.listen(port);
	console.log(`Running on::${port}`);
}

bootstrap();
