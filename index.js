const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { append } = require("express/lib/response");
const app = express();
const { sequelize } = require("./models");
const db = require("./models");

app.use(express.urlencoded());
app.use(express.json());
app.use(cors("*"));
app.use(morgan("tiny"));

app.get("/", async(req,res) => {
    const users = await db.User.findAll();

    return res.status(200).json({
        data: users,
    });
});
// app.get("/Atest", async(req,res) => {
//     const users = await db.User.findOne();

//     return res.status(200).json({
//         data: users,
//     });
// });


app.listen(3001, () => {
    console.clear();
    console.debug("Server running on port http://localhost:3001");
  });