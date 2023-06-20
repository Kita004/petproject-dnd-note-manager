export const errorHandler = (error, request, response, next) => {
    // Error handling middleware functionality
    console.info(`ERROR: ${error.message}`); // log the error
    const status = error.status || 400;
    // send back an easily understandable error message to the caller
    response.status(status).send(error.message);
};
