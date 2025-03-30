import * as Joi from 'joi'

export enum EnvironmentEnum {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid(...Object.values(EnvironmentEnum))
    .default(EnvironmentEnum.Development),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_LOGGING: Joi.boolean().required(),
  API_VERSION: Joi.string().required(),
})
