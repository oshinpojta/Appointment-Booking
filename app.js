const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");

const errorController = require("./controllers/404");
const userRoutes = require("./routes/user");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
// parse application/json
app.use(bodyParser.json())

app.use(userRoutes);
app.use(errorController.get404);

sequelize.sync().then(()=>{
    app.listen(3000);
}).catch((err)=>{
    console.log(err);
});