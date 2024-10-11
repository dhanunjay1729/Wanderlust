const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Historic Townhouse in Charleston",
    description:
      "Step back in time with a stay in this beautifully restored historic townhouse in Charleston.",
    image: {
      filename: "listingimage",
      url: "https://images.deepai.org/art-image/d0881813d6a94c53b2b2d0e64d18274a/hotel-resort-villa-wanderlust-written-on-it.jpg",
    },
    price: 2200,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Secluded Cabin in the Canadian Rockies",
    description:
      "Unwind in a secluded cabin nestled in the breathtaking Canadian Rockies, perfect for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.deepai.org/art-image/d0881813d6a94c53b2b2d0e64d18274a/hotel-resort-villa-wanderlust-written-on-it.jpg",
    },
    price: 1600,
    location: "Canadian Rockies",
    country: "Canada",
  },
  {
    title: "Modern Beach House in Cape Town",
    description:
      "Enjoy contemporary design and stunning ocean views from this modern beach house in Cape Town.",
    image: {
      filename: "listingimage",
      url: "",
    },
    price: 3000,
    location: "Cape Town",
    country: "South Africa",
  },
  {
    title: "Charming Chalet in the Swiss Alps",
    description:
      "Experience the charm of the Swiss Alps in this cozy chalet, perfect for skiing and relaxing.",
    image: {
      filename: "listingimage",
      url: "",
    },
    price: 2500,
    location: "Swiss Alps",
    country: "Switzerland",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Elegant Villa in Santorini",
    description:
      "Relax in luxury with panoramic views of the Aegean Sea from this elegant villa in Santorini.",
    image: {
      filename: "listingimage",
      url: "",
    },
    price: 4000,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Rustic Lodge in the Rockies",
    description:
      "Enjoy rustic charm and mountain views in this lodge located in the heart of the Rockies.",
    image: {
      filename: "listingimage",
      url: "",
    },
    price: 1800,
    location: "Rockies",
    country: "United States",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Luxury Safari Tent in Maasai Mara",
    description:
      "Enjoy the adventure of a safari in luxury with this well-appointed tent offering stunning views of the Maasai Mara.",
    image: {
      filename: "listingimage",
      url: "",
    },
    price: 4500,
    location: "Maasai Mara",
    country: "Kenya",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Traditional Ryokan in Kyoto",
    description:
      "Immerse yourself in Japanese culture with a stay at this traditional ryokan, offering authentic tatami mats and hot springs.",
    image: {
      filename: "listingimage",
      url: "",
    },
    price: 1800,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Charming Farmhouse in the Countryside",
    description:
      "Escape to the countryside and experience the charm of this rustic farmhouse. Perfect for a peaceful retreat.",
    image: {
      filename: "listingimage",
      url: "",
    },
    price: 1400,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Modern Studio in the Heart of the City",
    description:
      "Stay in the heart of the city with all the modern amenities you need. Perfect for a city break.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506365069540-904bcc762636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "London",
    country: "United Kingdom",
  },
  {
    title: "Chic Apartment in Paris",
    description:
      "Live like a local in this chic Parisian apartment. Close to all the major attractions and cafes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1563720225842-c50f07e99146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFyaXNpYW4lMjBidWlsZGluZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Paris",
    country: "France",
  },
  {
    title: "Luxury Chalet in the Swiss Alps",
    description:
      "Enjoy world-class skiing and stunning views from this luxury chalet in the heart of the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570723694079-59c3b3c2b3a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Beachfront Bungalow",
    description:
      "Relax in this beachfront bungalow with direct access to the beach and beautiful ocean views.",
    image: {
      filename: "listingimage",
      url: "",
    },
    price: 2800,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Rustic Barn Conversion",
    description:
      "Stay in this unique rustic barn conversion, offering a blend of historic charm and modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590650047450-e0d97b2e68f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvJTIwY2hpJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Charming Cottage by the Lake",
    description:
      "Escape to this charming cottage by the lake. Perfect for fishing, boating, and enjoying nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Lake District",
    country: "United Kingdom",
  },
  {
    title: "Luxury Villa with Private Pool",
    description:
      "Indulge in luxury with this villa featuring a private pool, modern amenities, and beautiful views.",
    image: {
      filename: "listingimage",
      url: "",
    },
    price: 3500,
    location: "Ibiza",
    country: "Spain",
  },
  {
    title: "Charming Cottage in the Countryside",
    description:
      "Experience the charm of the countryside with a stay in this cozy cottage, perfect for a peaceful retreat.",
    image: {
      filename: "listingimage",
      url: "",
    },
    price: 1500,
    location: "Cotswolds",
    country: "United Kingdom",
  },
];

  
  
module.exports = { data: sampleListings };