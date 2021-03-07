const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  console.log(req.get('host'));
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const path = require('path');
app.use(express.static(path.join(__dirname, 'gameAssets')));
app.use(express.json());

const http = require('http');
const server = http.Server(app);

const dotEenv = require('dotenv');
dotEenv.config({ path: './config/config.env' });

//connecting db
const connectDB = require('./connectDB/connectDB');
connectDB();

//importing routes
const routes = require('./routes/routes');
app.use('/api', routes);

server.listen(process.env.PORT, () => {
    console.log(`app running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});


process.on('unhandledRejection', function (err, promise) {
    console.log('error:-' + err.message);
    server.close(() => process.exit(1));
});
