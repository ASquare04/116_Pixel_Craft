const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Image = require('./model/imgSchema');
const Blog = require('./model/blogSchema')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

mongoose.connect('mongodb://localhost:27017/qalaData', {
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(error => {
  console.error('Error connecting to MongoDB:', error);
});

app.get('/explore', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
app.get('/blog', async (req, res) => {
  try {
    const blog = await Blog.find();
    res.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
