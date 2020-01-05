require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
app.use(bodyParser.json());

// const homePageRouter = require('./routes/homePage')
// const loginRouter = require('./routes/routes.js');

//requiring routers
const signupRouter = require('./routes/routes.js');

//staticly serving bundle.js -- connecting frontend to backend
app.use('/build', express.static(path.join(__dirname, '../build')));

//basic get request to main site
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//sign up router - posting
app.use('/signup', signupRouter);

app.get('/myaccount', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../myaccount.html'));
})

app.get('/newchar', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../newchar.html'));
})

app.use('/shirts',express.static(path.join(__dirname, '../client/assets/shirts1.jpg')));
// app.use('/login', loginRouter);

app.listen(3000, () => console.log(`Server started. Listening on PORT: 3000`));