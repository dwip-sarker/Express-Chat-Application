// get login page
function getUser(req, res, next) {
    res.render('users', {
        title: 'User -Chat Application',
    });
}

module.exports = getUser;
