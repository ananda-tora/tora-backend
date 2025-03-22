const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("TORA AI Backend is running! 🚀");
});

app.post("/chat", (req, res) => {

    console.log("Incoming Request Body:", req.body); // Debugging!
    const userMessage = req.body.message; // Ambil input dari user

    // Sementara, kita kasih respons dummy dulu
    const botResponse = `TORA AI: Aku menerima pesanmu -> "${userMessage}"`;

    res.json({ response: botResponse });
});

// Pastikan ini ada di paling bawah
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
