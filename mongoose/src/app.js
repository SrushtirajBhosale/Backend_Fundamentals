const mongoose = require("mongoose");

// 1.create connection & db
mongoose.connect("mongodb://127.0.0.1:27017/programming")
.then(() => console.log("connection successsful....."))
.catch((err) => console.log(err));

// 2.schema structure & validation
const LanguageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: String,            //can directly write also
    day: Number,
    learner: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

// 3.collection creation using model (Class)
const Language = new mongoose.model("Language", LanguageSchema);


// 4.create/insert document
const createDocument = async () => {
    try {

        // const react = new Language({
        //     name: "REACT JS",
        //     type: "FRONT END",            
        //     day: 30,
        //     learner: "SRUSHTIRAJ",
        //     active: true
        // })
        
        // const langData = await react.save();


        const mongodb = new Language({
            name: "MONGO DB",
            type: "FRONT END",            //To update it later   
            day: 1,
            learner: "SRUSHTIRAJ",
            active: true
        })
        const mongoose = new Language({
            name: "MONGOOSE",
            type: "DATABASE",            
            day: 3,
            learner: "SRUSHTIRAJ",
            active: true
        })
        const nodejs = new Language({
            name: "NODE JS",
            type: "BACK END",            
            day: 15,
            learner: "SRUSHTIRAJ",
            active: true
        })
        const js = new Language({
            name: "JavaScript",
            type: "FULLSTACK",            
            day: 30,
            learner: "SRUSHTIRAJ",
            active: true
        })
        
        const langData = await Language.insertMany([mongodb, mongoose, nodejs, js]);
        console.log(langData);
    } catch (err) {
        console.log(err);
    }
}
// createDocument();


// read document
const getDocument = async () => {
    const langData = await Language.find({type: "FRONT END"});
    // const langData = await Language.find({type: "FRONT END"}, {name: 1, _id: 0}).limit(1);
    // const langData = await Language.find({day: {$gte: 15}}, {name: 1, _id: 0});
    // const langData = await Language.find({type: {$in: ["FRONT END", "DATABASE"]}}, {name: 1, _id: 0});
    // const langData = await Language.find().countDocuments();
    // const langData = await Language.find({learner: "SRUSHTIRAJ"}, {name: 1, _id: 0}).sort({name: 1});
    console.log(langData);
}
// getDocument();


// update document
const updateDocument = async () => {
    const langData = await Language.updateOne({name: "MONGO DB"}, {$set: {name: "EXPRESS",  
    type: "BACK END", day: 15, learner: "SRUSHTIRAJ", active: true}}, {upsert: true});
    // const langData = await Language.find();
    console.log(langData);
}
// updateDocument();


// deletDocument();
const deletDocument = async () => {
    const langData = await Language.deleteOne({name: "REACT JS"});
    console.log(langData);
}
// deletDocument();

// 1.create moongoose folder
// 2.initiate node/backend with 'npm init', it will add 'package.json' file to store our dependancies.
// 3.install packages we want to work with, in our case express, mongoose, nodemon, cors, validator etc.
// 4.perform CRUD operation using mongoose