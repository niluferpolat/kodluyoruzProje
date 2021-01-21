const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');


app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/auth', authRoutes)
connectDB();


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port:${port}`));