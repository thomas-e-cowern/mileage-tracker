const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mileage-tracker', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('connected to database mileage-tracker')
}).catch((e) => {
  console.log('error:', e)
}) 