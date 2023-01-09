type EnvironmentType = 'production' | 'development' | 'test';

const dbUriByEnv: { [key in EnvironmentType]: string } = {
	production: process.env.DB_URI_PROD,
	development: process.env.DB_URI_DEV,
	test: process.env.DB_URI_TEST
};

export const env = process.env.NODE_ENV as EnvironmentType;

export const dbUri = dbUriByEnv[env];

export const corsOptions = {
	origin: process.env.CORS_ALLOWED_HOSTS.split(','),
	credentials: true
};
