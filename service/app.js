const express = require("express");
const { UserModel, ExpensesModel } = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/login", cors(), (req, res) => {});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkEmail = await UserModel.findOne({ email: email });

    if (checkEmail) {
      console.log(password);
      console.log(checkEmail.password);
      if (password !== checkEmail.password) {
        res.json("incorrect password");
      } else res.json(checkEmail);
    } else {
      res.json("not exist");
    }
  } catch (e) {
    res.json("error");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  const data = {
    email,
    password,
    name,
  };

  try {
    const checkEmail = await UserModel.findOne({ email: email });

    if (checkEmail) {
      res.json("exist");
    } else {
      res.json("not exist");
      await UserModel.insertMany([data]);
    }
  } catch (e) {
    res.json("error");
  }
});

app.post("/api/submit-expense", async (req, res) => {
    const { email, date, reason, amount } = req.body;
    try {
      const user = await UserModel.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const newExpense = {
        date,
        reason,
        amount,
      };
  
      user.expenses.push(newExpense);
  
      await user.save();
  
      return res.status(201).json({ message: "Expense saved successfully" });
    } catch (error) {
      console.error("Error saving expense:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
  


  

app.listen(8000, () => {
  console.log("Port connected");
});
