# Lambda Function Project

Este proyecto contiene una función Lambda simple que responde con un saludo personalizado y la hora actual.

## Requisitos previos

- Node.js (versión 14.x o superior)
- npm (normalmente viene con Node.js)
- AWS CLI configurado con tus credenciales
- AWS SAM CLI
- Docker para local

## Configuración

1. Clona este repositorio:

```bash
git clone https://github.com/Abacop6999/test-AWS.git
```

2. Navega al directorio del proyecto:

```bash
cd .\hello-world\
```

3. Instala las dependencias:

```bash
npm install
```

4. Construcción y despliegue

```bash
sam build
```

5. Despliega la función Lambda:

```bash
sam deploy --guided
```
Sigue las instrucciones en pantalla para completar el despliegue.


## Pruebas locales

Para probar la función localmente:

1. Inicia el API Gateway local:

```bash
sam local start-api
```
2. Abre un navegador y visita:

```bash
http://localhost:3000
```
o

```bash
http://localhost:3000?name=TuNombre
```

## Ejecución de pruebas

Para ejecutar las pruebas unitarias en .\hello-world\:

```bash
npm test 
```
