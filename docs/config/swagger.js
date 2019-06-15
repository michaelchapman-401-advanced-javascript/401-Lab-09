'use strict';

module.exports = {
  swaggerDefinition: {
    info: {
      description: 'API Server',
      title: 'Swagger doc page',
      version: '0.0.1',
    },
    basePath: '/api/v1',
    produces: [
      'application/json',
    ],
    host: 'localhost:3001',
    schemes: ['http'],
    securityDefinitions: {
      basicAuth: {
        type: 'basic',
      },
    },
  },
  basedir: __dirname,
  files: ['../../src/api/v1.js'],
};