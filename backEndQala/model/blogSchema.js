const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
    featuredImg : {type: String, required: true},
    title : {type: String, required: true},
    excerpt : {type: String, required: true},
    content:{type: String, required: true},
    relatedImg1 : {type: String},
    relatedImg2 : {type: String},
    refrence:{type: String}
})

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;