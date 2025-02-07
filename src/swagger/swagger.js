import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task manager',
            version: '1.0.0',
            description: 'Api for task manager',
            contact: {
                name: 'Jorge Osorno'
            },
        },
        servers: [
            {
                url: 'http://localhost:4000/api', // Aqui se añade la ruta y el prefijo 
                description: 'Local server with API'
            },
        ],
    },
    apis: ['./src/routers/*.js', './src/schemas/*.js'], // pongo las carpetas de donde entran swagger por la info
};

const specs = swaggerJSDoc(options);
export default specs;
