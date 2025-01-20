const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const MongooseConnect = require('./DBconnect.js');
const { User } = require('./models/userModel.js');

// Connect to MongoDB
MongooseConnect();

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/c1', async (req, res) => {
    try {
        const user = new User({ desc: "Shadowveil Studio" });
        await user.save();
        console.log("Done");
        res.send("User saved!");
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send("Error saving user");
    }
});
app.get('/c2', async (req, res) => {
    try {
        const user = new User({ desc: "Whispering Woods" });
        await user.save();
        console.log("Done");
        res.send("User saved!");
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send("Error saving user");
    }
});
app.get('/c3', async (req, res) => {
    try {
        const user = new User({ desc: "Enigma Studio" });
        await user.save();
        console.log("Done");
        res.send("User saved!");
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send("Error saving user");
    }
});

app.listen(port, () => {
    console.log('Running on the Port 3600');
});
