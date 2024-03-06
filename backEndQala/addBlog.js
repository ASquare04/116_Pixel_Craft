const blogData = [
    // {
    // featuredImg:'https://dheerajhere.com/wp-content/uploads/2024/03/1-1536x864.png',
    // title:'Captivating Madhubani Art: A Cultural Journey from Tradition to Modernity',
    // excerpt:'Delve into the rich heritage of Madhubani art, an ancient form of painting originating from the Mithila region of India. Explore its origin, symbolism, styles, and contributions to art and culture.',
    // content:'Madhubani art, also referred to as Mithila art, originates from the Mithila region of India and Nepal, particularly named after the Madhubani district in Bihar, India. Artists, predominantly women from various communities, have been practicing this art form for centuries, utilizing mediums such as fingers, twigs, brushes, and matchsticks. The distinctive geometric patterns and vibrant colors are created using natural dyes and pigments, symbolizing cultural and ritualistic significance for occasions like weddings and festivals.\nTraditionally, Madhubani paintings adorned freshly plastered mud walls and floors of huts. However, contemporary artists have expanded the canvas to include cloth, handmade paper, and canvas. The paintings are crafted from rice paste and natural pigments, maintaining the authenticity of the art form. Two-dimensional imagery and motifs derived from nature, religious symbols, and scenes from ancient epics characterize Madhubani paintings. Traditional techniques involve using vermilion powder, cow dung, rice paste, and other natural materials as pigments and binders.',
    // relatedImg1:'https://dheerajhere.com/wp-content/uploads/2024/03/The-Art-Of-Making-Madhubani-Paintings.jpg',
    // relatedImg2:'https://dheerajhere.com/wp-content/uploads/2024/03/download-1.jpeg',
    // refrence:'@Wikipedia'
    // },
    // {
    //   featuredImg:'https://dheerajhere.com/wp-content/uploads/2024/03/2-1536x864.png',
    //   title:'Discovering the Rich Heritage of Warli Painting',
    //   excerpt:'Warli painting, an ancient tribal art form predominantly practised by the tribal communities of the North Sahyadri Range in Maharashtra, India, holds deep cultural significance. Originating in Maharashtra, particularly in areas like Dahanu, Talasari, Jawhar, Palghar',
    //   content:'The paintings employ basic geometric shapes such as circles, triangles, and squares, each representing different facets of nature. Circles signify the sun and the moon, triangles depict mountains and trees, while squares symbolise human settlements or sacred spaces. Central to each painting is the square motif, known as "chauk" or "chaukat," often featuring depictions of the mother goddess, Palghat. The imagery also includes scenes of hunting, fishing, farming, festivals, and dances, symbolising the harmony between humans and nature One of the central themes in Warli paintings is the tarpa dance, a traditional dance form accompanied by a trumpet-like instrument called tarpa. The dancers, moving in circular formations, embody the interconnectedness of life, reflecting the circle of life concept. The simplicity of Warli painting techniques mirrors the tribal lifestyle, using white pigment made from rice flour and water, applied with bamboo sticks.',
    //   relatedImg1:'https://dheerajhere.com/wp-content/uploads/2024/03/download-2-1.jpeg',
    //   relatedImg2:'https://dheerajhere.com/wp-content/uploads/2024/03/download-1-1.jpeg',
    //   refrence:'@Wikipedia'
    // },
    // {
    //   featuredImg:'https://dheerajhere.com/wp-content/uploads/2024/03/4-1536x864.png',
    //   title:'Celebrating Gond Art: A Tribute to Tribal Heritage',
    //   excerpt:'Gond Art Painting is a captivating expression of the Gond tribes cultural legacy and reverence for nature. Passed down through generations within the indigenous Gond community in India, this traditional art form reflects deep-rooted artistic traditions and celebrates the wonders of the natural world.',
    //   content:'The Gond tribe, one of Indias largest and oldest tribes, boasts a rich history and distinctive culture. Renowned for their intricate artistic techniques, they have preserved their traditions over centuries, including the vibrant and colorful Gond Art. Gond artists employ natural resources like plant sap, charcoal, and cow dung to create their vivid artworks. Through intricate patterns and symbolic designs, they depict scenes of nature, inspired by the local flora and fauna. A central motif in Gond art is the "Tree of Life," symbolizing the interdependence of all living things.',
    //   relatedImg1:'https://dheerajhere.com/wp-content/uploads/2024/03/images.jpeg',
    //   relatedImg2:'https://dheerajhere.com/wp-content/uploads/2024/03/download-2.jpeg',
    //   refrence:'@Wikipedia'
    // },
    // {
    //   featuredImg:'https://dheerajhere.com/wp-content/uploads/2024/03/3-1536x864.png',
    //   title:'Exploring the Rich Heritage of Kalamkari Art',
    //   excerpt:'Kalamkari, a revered hand-painted cotton textile tradition, originates from the Indian state of Andhra Pradesh. This intricate art form employs solely natural dyes and encompasses a meticulous process comprising twenty-three steps.',
    //   content:'Pedana Kalamkari, or the Machilipatnam style, involves the vegetable-dyed block-painting of fabric. Produced in Pedana, a town near Machilipatnam in the Krishna district of Andhra Pradesh, this style has earned geographical indication recognition for its handicraft excellence. The Srikalahasti style of Kalamkari is characterized by freehand drawing using a pen (kalam) to outline and fill in colors. This method, entirely handcrafted, flourished in temples, depicting religious narratives from Hindu epics like the Ramayana and Mahabharata. Kamaladevi Chattopadhyay, the first chairperson of the All India Handicrafts Board, played a pivotal role in popularizing this style.',
    //   relatedImg1:'https://dheerajhere.com/wp-content/uploads/2024/03/images-2.jpeg',
    //   relatedImg2:'https://dheerajhere.com/wp-content/uploads/2024/03/images-4.jpeg',
    //   refrence:'@Wikipedia'
    // },

  ]
const mongoose = require('mongoose')
const Blog = require('./model/blogSchema')


mongoose.connect('mongodb://localhost:27017/qalaData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(async () => {
    console.log('MongoDB connected successfully');
  
    try {
      await Blog.deleteMany({});
      console.log('Pre-existing data deleted successfully');

      await Blog.insertMany(blogData);
      console.log('Blog inserted successfully');
    } catch (error) {
      console.error('Error deleting in Blogs', error);
    }
  }).catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
  