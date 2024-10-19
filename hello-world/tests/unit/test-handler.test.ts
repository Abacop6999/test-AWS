import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambdaHandler } from '../../app';
import { expect, describe, it } from '@jest/globals';

describe('Pruebas para el manejador de la Lambda', () => {
    it('debe devolver HTML con nombre por defecto', async () => {
        const event: APIGatewayProxyEvent = {
            httpMethod: 'GET',
            path: '/',
            queryStringParameters: {}, // Sin nombre
            body: '',
            headers: {},
            isBase64Encoded: false,
            resource: '',
            stageVariables: {},
            requestContext: {} as any,
            multiValueHeaders: {},
            multiValueQueryStringParameters: {},
            pathParameters: {},
        };

        const result: APIGatewayProxyResult = await lambdaHandler(event);

        expect(result.statusCode).toEqual(200);
        expect(result.headers?.['Content-Type']).toEqual('text/html');
        expect(result.body).toContain('Hola Dan'); // Verificamos que contiene 'Hola Dan'
    });

    it('debe devolver HTML con nombre personalizado', async () => {
        const event: APIGatewayProxyEvent = {
            httpMethod: 'GET',
            path: '/',
            queryStringParameters: { name: 'Alex' }, // Con nombre
            body: '',
            headers: {},
            isBase64Encoded: false,
            resource: '',
            stageVariables: {},
            requestContext: {} as any,
            multiValueHeaders: {},
            multiValueQueryStringParameters: {},
            pathParameters: {},
        };

        const result: APIGatewayProxyResult = await lambdaHandler(event);

        expect(result.statusCode).toEqual(200);
        expect(result.body).toContain('Hola Alex'); // Verificamos que contiene 'Hola Alex'
    });
});