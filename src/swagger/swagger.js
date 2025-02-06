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
            servers:{
                url: 'http://localhost:4000',
                description: 'Local server'
            },
        },

    },
    apis: ['./src/routes/*.js'], // files containing annotations as above
};

const specs = swaggerJSDoc(options);
export default specs;