const express =require('express')
const mongoose= require('mongoose');
const Port =process.env.Port|| 5000;
const app=express();

mongoose.connect("mongodb+srv://sonish12:143Muller@cluster0.eemdj.mongodb.net/myapp?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true});
    

const connection =mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connected");
});

app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user",userRoute);






app.route("/").get((req,res)=>res.json('Mongo db check nodemon'));

app.listen(5000, ()=>console.log(`Your Server is running on port ${Port}`));