const careateError = require('http-errors');
// 404 not found handler
function notFoundHandler(req, res, next) {
    next(careateError(404, 'your request content was not found!'));
}
// default error handler
function errorHandler(err, req, res, next) {
    res.status(err.status || 5000);
    if (res.locals.html) {
        // html response
        res.render('error', {
            title: 'Error Page',
        });
    } else {
        // json response
        res.locals.error = { message: 'There is a server side error' };
        res.json(res.locals.error);
    }
}

module.exports = {
    notFoundHandler,
    errorHandler,
};
