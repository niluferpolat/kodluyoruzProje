const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const adoptRoutes = require('./routes/adopts');
const bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/auth', authRoutes)
app.use('/api/auth', postRoutes);
app.use('/api/auth', adoptRoutes);//adoption requests' route
connectDB();


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port:${port}`));