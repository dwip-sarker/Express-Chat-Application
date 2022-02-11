// Exteranal imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieparser = require('cookie-parser');

// internal imports
const { notFoundHandler, errorHandler } = require('./middleware/common/errorhandleer');
const logingRouter = require('./router/loginRouter');
const userRouter = require('./router/userRouter');
const inboxRouter = require('./router/inboxRouter');

// initialization
const app = express();
dotenv.config();

// database connection
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true, // forn lagay version problem
    })
    .then(() => console.log('Database connetion successfull!'))
    .catch((err) => console.log(err));

// request perser
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // form er data encode korar jonno

// set view engine
app.set('view engine', 'ejs');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// parse cookies
app.use(cookieparser(process.env.COOKIE_SECRET));

// routing setup
app.use('/', logingRouter);
app.use('/users', userRouter);
app.use('/inbox', inboxRouter);

// 404 not found handle
app.use(notFoundHandler);

// common error handeing
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`App listing on port ${process.env.PORT}`);
});
