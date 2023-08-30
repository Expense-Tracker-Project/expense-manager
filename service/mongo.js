const mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/expense-tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to the database");
})
.catch((error) => {
    console.error("Error connecting to the database:", error);
});

const newSchemaUser = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    expenses: {
        type: [{
            date: {
                type: String,
                required: true
            },
            reason: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            }
        }],
        default: []
    }
})

const newSchemaExpenses = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
})

const UserModel = mongoose.model("Users", newSchemaUser);
const ExpensesModel = mongoose.model("Expenses", newSchemaExpenses);

module.exports = { UserModel, ExpensesModel };