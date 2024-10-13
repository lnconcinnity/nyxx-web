const express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    helmet = require('helmet');

const app = express();

app.use(morgan('dev'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.use(require('./routes/users'))

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});