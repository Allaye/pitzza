import mongoose from 'mongoose';
// import {MongoMemoryServer} from 'mongodb-memory-server';
// mongoose.connect('mongodb://127.0.0.1:27017/pitzza-api',{})
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// const mongod = new MongoMemoryServer();

// export const connect = async()=>{
//     await mongoose.connect('mongodb://127.0.0.1:27017/pitzza-api',{})
//     //const uri = mongod.getUri('mongodb://127.0.0.1:27017/pitzza-api');
    
//     await mongoose.connect
// }

export const connect = async() => {
    mongoose.connect('mongodb://127.0.0.1:27017/pitzza-api',{

    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
  return mongoose.connection;
};

export const closeDatabase = async()=>{
    // await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoose.disconnect();
}

export const clearDatabase = async()=>{
    const connection = mongoose.connection.collections;
    for (const key in connection) {
        const collection = connection[key];
        await collection.deleteMany({});
    }

}

// export const connect = async() => {
//     mongoose.connect('mongodb://127.0.0.1:27017/pitzza-api',{

//     })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));
//   return mongoose.connection;
// };
