const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { append } = require("express/lib/response");
const app = express();
const { sequelize } = require("./models")

app.get("/", (req,res) => {
    return res.status(200).json({
        test:"HELLOWORLD!",
    });
});


sequelize
.sync({ force:true, loggin: false})
.then(() => {
    app.listen(3001, () => {
        console.clear();
        console.debug("Sever running on port http://localhost:3001");
    });
})
.catch(console.log);