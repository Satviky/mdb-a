const mongoose = require("mongoose");
require("dotenv").config();
const con_link = process.env['MONGO_URI']
mongoose.set("debug", true);
async function MongooseConnect() {
    mongoose.set("strictQuery", true);
    await mongoose
        .connect(con_link)
        .then((data) => {
            console.warn(
                `Connected to ${data.connection.host}:${data.connection.port} database: ${data.connection.name}`,
            );
        })
        .catch((error) => {
            console.error(`Unable to connect to database: ${error.message}`);
        });
}

module.exports = MongooseConnect;
