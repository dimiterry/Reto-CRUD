export const validateSchema = (schema) => (req, res, next) => { //con esto se ejecuta la validacion
    try { // se hace este try para que parse no tumbe la pagina y haga la validacion si no accede laza un error
        schema.parse(req.body); // este lo va a estar comparando con el body
        next();
    } catch (error) {
        return res
        .status(400)
        .json(error.errors.map((error) => error.message)); //solo me pide los campos requeridos
    }
};