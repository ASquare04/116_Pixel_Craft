const imageData = [
  {
    imageURL: 'https://dheerajhere.com/wp-content/uploads/2024/03/Designer-1-1.png',
    heading: 'Abstract Creation',
    description: "A mesmerizing abstract piece created by the talented Indian artist, Aarav Sharma.",
    artistName: 'Aarav Sharma',
    tokenPrice : '4 ETH'
  },
  {
    imageURL: 'https://dheerajhere.com/wp-content/uploads/2024/03/Designer-2-1.png',
    heading: 'Spirit of Serenity',
    description: "An ethereal sculpture symbolizing tranquility, crafted by the visionary Indian artist, Maya Patel.",
    artistName: 'Maya Patel',
    tokenPrice : '4 ETH'
  },
  {
    imageURL: 'https://dheerajhere.com/wp-content/uploads/2024/03/Designer-3-1.png',
    heading: 'Vibrant Memories',
    description: "A vibrant photograph capturing nostalgic moments, taken by the renowned Indian photographer, Rahul Kapoor.",
    artistName: 'Rahul Kapoor',
    tokenPrice : '4 ETH'
  },
  {
    imageURL: 'https://dheerajhere.com/wp-content/uploads/2024/03/Designer-4-1.png',
    heading: 'Eternal Enigma',
    description: "An enigmatic portrait exuding timeless allure, painted by the enigmatic Indian artist, Ananya Singh.",
    artistName: 'Ananya Singh',
    tokenPrice : '4 ETH'
  },
  {
    imageURL: 'https://dheerajhere.com/wp-content/uploads/2024/03/Designer-7-1.png',
    heading: 'Saffron Symmetry',
    description: 'An iconic architectural marvel reflecting cultural harmony, designed by the ingenious Indian architect, Dev Patel.',
    artistName: 'Dev Patel',
    tokenPrice : '4 ETH'
  },
  {
    imageURL: 'https://dheerajhere.com/wp-content/uploads/2024/03/Designer-6-1.png',
    heading: 'Dreamscape Chronicles',
    description: "A surrealistic masterpiece unveiling the depths of imagination, envisioned by the celebrated Indian artist, Kavya Gupta.",
    artistName: 'Kavya Gupta',
    tokenPrice : '4 ETH'
  },
  {
    imageURL: 'https://dheerajhere.com/wp-content/uploads/2024/03/Designer-1-1.png',
    heading: 'Celestial Symphony',
    description: "An awe-inspiring depiction of cosmic harmony, crafted by the visionary Indian artist, Arjun Singh.",
    artistName: 'Arjun Singh',
    tokenPrice : '4 ETH'
  },
  {
    imageURL: 'https://dheerajhere.com/wp-content/uploads/2024/03/Designer-2-1.png',
    heading: 'Ethereal Essence',
    description: "A transcendent artwork capturing the essence of ethereal beauty, painted by the talented Indian artist, Priya Mehta.",
    artistName: 'Priya Mehta',
    tokenPrice : '4 ETH'
  }
];


  const mongoose = require('mongoose');
  const Image = require('./model/imgSchema');
  
  mongoose.connect('mongodb://localhost:27017/qalaData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(async () => {
    console.log('MongoDB connected successfully');
  
    try {
 
      await Image.deleteMany({});
      console.log('Pre-existing data deleted successfully');
      
      await Image.insertMany(imageData);
      console.log('Images inserted successfully');
      
    } catch (error) {
      console.error('Error deleting or inserting images:', error);
    }
  }).catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
  