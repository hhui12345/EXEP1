require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDB = require("./configs/database");
const router = require("./routes");

const PORT = process.env.PORT || 5000;


//setup
app.use(cors());            
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connect database
connectToDB();

//route
router(app);




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
