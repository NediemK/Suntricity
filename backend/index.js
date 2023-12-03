var express = require('express');
const userRoute = require('./routes/userRoute');
var app = express();
var connection = require('./configuration/connectDB');
const cors = require('cors');

app.get('/', function (req, res) {
  res.send('Hey There!');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(3000, async () => {
  console.log('App Listening on port 3000');
  try {
    await connection.connectDb();
    console.log('Database connected!');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
});
