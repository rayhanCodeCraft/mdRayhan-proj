// server.js
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mongoose = require("mongoose");

// Set up MongoDB connection
mongoose.connect('mongodb://localhost:27017/fileUploads', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Error connecting to MongoDB: ", err));

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Set up file storage with multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Define file schema for MongoDB
const fileSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  path: String,
  size: Number,
  uploadDate: { type: Date, default: Date.now },
});

const File = mongoose.model("File", fileSchema);

// API route to upload files
app.post("/upload", upload.array("files"), async (req, res) => {
  try {
    const fileDetails = req.files.map(file => ({
      filename: file.filename,
      originalname: file.originalname,
      path: file.path,
      size: file.size,
    }));

    // Save file details to database
    await File.insertMany(fileDetails);

    res.status(200).json({ message: "Files uploaded successfully", files: fileDetails });
  } catch (err) {
    res.status(500).json({ error: "File upload failed" });
  }
});

// API route to get file details and count
app.get("/files", async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json({ files, count: files.length });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch files" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
