require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

//! Express instance
const app = express();
//! Middleware instance
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
};
app.use(express.json());
app.use(cors(corsOptions));

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

//! Generate content route
app.post("/generate", async (req, res) => {
  const { prompt } = req.body;
  try {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.send(text);
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to generate content");
  }
});

//! Start the server
app.listen(8080, console.log("server is running"));
