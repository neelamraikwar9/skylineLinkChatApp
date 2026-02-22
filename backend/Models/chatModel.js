//Mongoose is used connect with our MongoDB Database and make queries to our database. We use mongoose to create our schemas.

const mongoose = require("mongoose");  

const chatModel = mongoose.Schema({
  chatName: { type: String, trim: true },
  isGroupChat: { type: Boolean, defalut: false },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId, // this will contain the id to that particular user so our single user will be stored in our database.
      ref: "User",
    },
  ],

  latestMessage: {
    type: mongoose.Schema.Types.ObjectId, // referencing with the objectId.
    ref: "Message", //refering to particular part of database.
  },

  groupAdmin: {
    type: mongoose.Schema.Types.ObjectId,  // it will containe id of thet particular group admin.
    ref: "User",
  },
},

{
// creating a field so mongoose creates time stamp every time we create and add a new data so it add times; 
timeStamp: true,
}

);


const Chat = mongoose.model("Chat", chatModel); 

module.exports = Chat; 


