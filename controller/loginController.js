// get login page
function getLogin(req, res, next) {
    res.render('index', {
        title: 'login - Chat Application',
    });
}

module.exports = {
    getLogin,
};
