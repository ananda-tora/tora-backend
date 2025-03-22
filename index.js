const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000; //  Gunakan Railway Port

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("TORA AI Backend is running! 🚀");
});

app.post("/chat", (req, res) => {
    console.log("Incoming Request Body:", req.body);
    const userMessage = req.body.message;

    const botResponse = `TORA AI: Aku menerima pesanmu -> "${userMessage}"`;
    res.json({ response: botResponse });
});

//  Pastikan server listen di Railway PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
