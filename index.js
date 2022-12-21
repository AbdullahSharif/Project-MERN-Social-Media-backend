import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import postsRouter from "./routes/posts.js";

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postsRouter);

const CONNECTION_URI = "mongodb://localhost:27017/SocialMedia";
const PORT = process.env.PORT || 5000;

// now we connect to the database.
mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Connected to mongoDB")).catch(() => console.log("Unable to connect to MongoDB"));
mongoose.set('strictQuery', true);
app.listen(PORT);
console.log(`Listening on port : ${PORT}`);