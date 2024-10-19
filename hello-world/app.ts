import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const name = event.queryStringParameters?.name || 'Dan'; // Obtenemos el parámetro 'name' o usamos 'Dan'
        const currentTime = new Date().toLocaleTimeString(); // Obtenemos la hora actual
        // Creamos la respuesta HTML
        const response = ` 
        <html>
            <body>
            <h1>Hola ${name}, la hora actual es ${currentTime}</h1> 
            </body>
        </html>
        `;
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'text/html' }, // Definimos Tipo de contenido HTML
            body: response,
        };
    } catch (error) {
        console.error(error);
        const errorMessage = (error as Error).message || 'Error desconocido';
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' }, // Definimos Tipo de contenido JSON
            body: JSON.stringify({
                message: 'Hubo un error al procesar la solicitud',
                error: errorMessage,
            }),
        };
    }
};
