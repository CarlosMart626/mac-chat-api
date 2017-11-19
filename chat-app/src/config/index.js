import mongodb from 'mongodb';

export default {
  "port": 3005,
  "mongoUrl": "mongodb://mongo:27017/chat-api",
  // "port": process.env.PORT,
  // "mongoUrl": process.env.MONGODB_URI,
  "bodyLimit": "100kb"
}
