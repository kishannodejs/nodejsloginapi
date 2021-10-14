const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI||'mongodb+srv://mlm:mlm@cluster0.tpqd6.mongodb.net/mlm?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('our db is connected');
  })
  .catch(err => console.log(err.message));
