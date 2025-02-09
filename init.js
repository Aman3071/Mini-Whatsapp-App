const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then( () => {
    console.log("connection succesfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}



let allchats = [
    
    {
    from:"Aman",
    to:"Rahul",
    msg:"HI hello",
    created_at: new Date()
    },

    {
    from:"rahul",
    to:"suyash",
    msg:"HI hello by",
    created_at: new Date()
    },

    {
    from:"onkar",
    to:"yash",
    msg:"bye",
    created_at: new Date()
    },

    {
    from:"navin",
    to:"suresh",
    msg:"i going",
    created_at: new Date()
    },

    {
    from:"naina",
    to:"kavya",
    msg:"sleeping right now",
    created_at: new Date()
    },

];

Chat.insertMany(allchats);