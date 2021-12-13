import mongoose from 'mongoose';

// mongoose.connect('mongodb://127.0.0.1:27017/pitzza-api',{})
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

  export const connect = async() => {
    mongoose.connect('mongodb://127.0.0.1:27017/pitzza-api',{

    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
  return mongoose.connection;
};
