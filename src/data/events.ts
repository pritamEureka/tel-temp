export interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  images: string[];
  features: string[];
  price: string;
}

export const eventCategories = [
  { title: "Music", value: "music" },
  { title: "Party", value: "party" },
  { title: "Student", value: "student" },
  { title: "Conference", value: "conference" },
  { title: "Workshop", value: "workshop" },
  { title: "Sports", value: "sports" },
];

export const allEvents: Event[] = [
  {
    id: "music-1",
    title: "Jazz Night Live",
    description: "An intimate evening with renowned jazz musicians",
    category: "music",
    icon: "🎷",
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop"
    ],
    features: ["🎵 Live jazz performances", "🍷 Premium bar", "🎤 Open mic session", "🎹 Piano lounge", "🥂 VIP seating"],
    price: "$75"
  },
  {
    id: "music-2",
    title: "Rock Concert",
    description: "High-energy rock concert with local and international bands",
    category: "music",
    icon: "🎸",
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop"
    ],
    features: ["🎸 Live rock bands", "🔊 High-quality sound", "🎫 General admission", "🍺 Beer garden", "📸 Photo ops"],
    price: "$65"
  },
  {
    id: "music-3",
    title: "Classical Symphony",
    description: "Elegant classical music performance by the city orchestra",
    category: "music",
    icon: "🎼",
    images: [
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop"
    ],
    features: ["🎻 Orchestra performance", "🎭 Formal attire", "🍾 Champagne reception", "📚 Program notes", "🎟️ Reserved seating"],
    price: "$95"
  },

  {
    id: "party-1",
    title: "New Year Gala",
    description: "Celebrate the new year with style and elegance",
    category: "party",
    icon: "🎉",
    images: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop"
    ],
    features: ["🎊 Midnight countdown", "🥂 Champagne toast", "🎵 DJ entertainment", "🍽️ Gourmet dinner", "🎭 Masquerade theme"],
    price: "$150"
  },
  {
    id: "party-2",
    title: "Summer Beach Party",
    description: "Fun in the sun with beach games and tropical vibes",
    category: "party",
    icon: "🏖️",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop"
    ],
    features: ["🏐 Beach volleyball", "🍹 Tropical cocktails", "🎵 Live DJ", "🔥 Bonfire", "🌅 Sunset views"],
    price: "$45"
  },

  {
    id: "student-1",
    title: "Graduation Ceremony",
    description: "Celebrate academic achievements with family and friends",
    category: "student",
    icon: "🎓",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    ],
    features: ["🎓 Diploma ceremony", "📸 Professional photos", "🎵 Processional music", "👨‍👩‍👧‍👦 Family seating", "🎊 Reception"],
    price: "$25"
  },
  {
    id: "student-2",
    title: "Study Group Meetup",
    description: "Collaborative learning session with snacks and resources",
    category: "student",
    icon: "📚",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop"
    ],
    features: ["📖 Study materials", "☕ Free coffee", "🤝 Peer tutoring", "📝 Practice tests", "🍕 Pizza break"],
    price: "Free"
  },

  {
    id: "conference-1",
    title: "Tech Innovation Summit",
    description: "Leading technology conference with industry experts",
    category: "conference",
    icon: "💻",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop"
    ],
    features: ["🎤 Keynote speakers", "🤝 Networking sessions", "💼 Career fair", "🍽️ Lunch included", "📱 Mobile app"],
    price: "$299"
  },
  {
    id: "conference-2",
    title: "Business Leadership Forum",
    description: "Executive leadership strategies and best practices",
    category: "conference",
    icon: "👔",
    images: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop"
    ],
    features: ["📊 Case studies", "🎯 Strategy sessions", "🤝 Executive networking", "📈 Market insights", "🏆 Awards ceremony"],
    price: "$450"
  },

  {
    id: "workshop-1",
    title: "Photography Masterclass",
    description: "Learn professional photography techniques from experts",
    category: "workshop",
    icon: "📷",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    ],
    features: ["📸 Hands-on practice", "🎨 Editing techniques", "💡 Lighting setup", "📚 Resource materials", "🏅 Certificate"],
    price: "$125"
  },
  {
    id: "workshop-2",
    title: "Cooking Workshop",
    description: "Learn to cook gourmet dishes with professional chefs",
    category: "workshop",
    icon: "👨‍🍳",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556909045-f7c5c2e5c9b8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556909045-f7c5c2e5c9b8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    ],
    features: ["🍳 Hands-on cooking", "👨‍🍳 Expert instruction", "🍽️ Taste your creations", "📖 Recipe book", "🥂 Wine pairing"],
    price: "$85"
  },

  {
    id: "sports-1",
    title: "Marathon Challenge",
    description: "Annual city marathon with multiple distance options",
    category: "sports",
    icon: "🏃‍♂️",
    images: [
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop"
    ],
    features: ["🏃‍♂️ Multiple distances", "🏅 Finisher medals", "💧 Water stations", "📊 Timing chips", "🎉 Finish line celebration"],
    price: "$55"
  },
  {
    id: "sports-2",
    title: "Basketball Tournament",
    description: "Competitive basketball tournament for all skill levels",
    category: "sports",
    icon: "🏀",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop"
    ],
    features: ["🏀 Team registration", "🏆 Championship trophy", "👕 Team jerseys", "📊 Live scoring", "🍕 Team dinner"],
    price: "$35"
  }
];
