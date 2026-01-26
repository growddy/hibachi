// Serviceable states configuration - easy to update
export const SERVICEABLE_STATES = [
  "California",
  "Texas",
  "Florida",
  "New York",
  "Georgia",
  "North Carolina",
  "Arizona",
  "Nevada",
  "Colorado",
  "Tennessee",
  "Virginia",
  "New Jersey",
  "Illinois",
  "Pennsylvania",
  "Ohio",
] as const

export const STATE_ABBREVIATIONS: Record<string, string> = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY",
}

// Pricing configuration
export const PRICING_CONFIG = {
  basePrice: 50, // Base booking fee
  perGuestPrice: 45, // Price per guest
  minimumGuests: 10,
  travelFeeBase: 25, // Base travel fee
  depositPercentage: 0.25, // 25% deposit
}

// Contact information
export const CONTACT_INFO = {
  phone: "(917) 794-8288",
  email: "dynamitehibachi@gmail.com",
  social: {
    instagram: "https://instagram.com/dynamitehibachi",
    tiktok: "https://tiktok.com/@dynamitehibachi",
    facebook: "https://facebook.com/dynamitehibachi",
  },
}

// Reviews data
export const REVIEWS = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "Amazing experience! Chef Marco was incredible with our guests. The food was restaurant quality and the entertainment was top-notch.",
    eventType: "Birthday Party",
  },
  {
    id: 2,
    name: "Michael T.",
    rating: 5,
    text: "We hired Dynamite Hibachi for our corporate event and everyone was blown away. Professional, delicious, and so much fun!",
    eventType: "Corporate Event",
  },
  {
    id: 3,
    name: "Jennifer L.",
    rating: 5,
    text: "My kids had the best birthday ever! The chef made it interactive and kept everyone entertained. Highly recommend!",
    eventType: "Kids Birthday",
  },
  {
    id: 4,
    name: "David R.",
    rating: 5,
    text: "Perfect for our graduation party. The setup was quick, food was incredible, and cleanup was a breeze.",
    eventType: "Graduation",
  },
  {
    id: 5,
    name: "Amanda K.",
    rating: 5,
    text: "We've used Dynamite Hibachi three times now. Consistently excellent food and service every single time.",
    eventType: "Family Gathering",
  },
  {
    id: 6,
    name: "Robert H.",
    rating: 5,
    text: "The fried rice volcano trick had everyone cheering! Great food, great show, great memories.",
    eventType: "Anniversary",
  },
]
