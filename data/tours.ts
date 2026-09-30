export interface Tour {
  id: string;
  name: string;
  region: string;
  image: string;
  days: number;
  nights: number;
  /** PKR per person, shared group departure */
  groupPrice: number;
  /** PKR per person, private/custom trip */
  privatePrice: number;
  rating: number;
  reviews: number;
  tag?: string;
  highlights: string[];
  departure: string;
}

export const WHATSAPP_NUMBER = "923001234567";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const TOURS: Tour[] = [
  {
    id: "hunza",
    name: "Hunza Autumn Explorer",
    region: "Hunza Valley",
    image: "/tour-hunza.webp",
    days: 7,
    nights: 6,
    groupPrice: 42500,
    privatePrice: 68500,
    rating: 4.9,
    reviews: 212,
    tag: "Bestseller",
    highlights: [
      "Attabad Lake boating",
      "Khunjerab Pass (Pak–China border)",
      "Baltit & Altit Forts",
      "Eagle's Nest sunrise",
    ],
    departure: "Every Friday",
  },
  {
    id: "skardu",
    name: "Skardu & Deosai Odyssey",
    region: "Skardu",
    image: "/tour-skardu.webp",
    days: 6,
    nights: 5,
    groupPrice: 48000,
    privatePrice: 76000,
    rating: 4.9,
    reviews: 168,
    tag: "New",
    highlights: [
      "Shangrila & Upper Kachura lakes",
      "Deosai Plains jeep safari",
      "Shigar Fort & Cold Desert",
      "Sadpara Lake sunset",
    ],
    departure: "Every Thursday",
  },
  {
    id: "naran",
    name: "Naran Kaghan Escape",
    region: "Naran · Babusar",
    image: "/tour-naran.webp",
    days: 4,
    nights: 3,
    groupPrice: 28500,
    privatePrice: 46000,
    rating: 4.8,
    reviews: 324,
    highlights: [
      "Saif-ul-Malook jeep ride",
      "Babusar Top (13,700 ft)",
      "Lulusar Lake",
      "Kunhar river-side bonfire",
    ],
    departure: "Tue & Fri weekly",
  },
  {
    id: "jeep",
    name: "Hunza Jeep Safari",
    region: "Hunza · Nagar",
    image: "/tour-jeep.webp",
    days: 5,
    nights: 4,
    groupPrice: 55000,
    privatePrice: 88000,
    rating: 5.0,
    reviews: 96,
    tag: "Adventure",
    highlights: [
      "4x4 convoy expedition",
      "Naltar Valley & alpine lakes",
      "Rakaposhi base camp view",
      "Camping under the stars",
    ],
    departure: "1st & 15th monthly",
  },
];

export interface ItineraryDay {
  day: string;
  title: string;
  detail: string;
}

export const FEATURED_ITINERARY: ItineraryDay[] = [
  {
    day: "Day 1",
    title: "Islamabad → Chilas",
    detail:
      "Dawn departure from Islamabad. Drive the legendary Karakoram Highway via Mansehra and Babusar Top, with photo stops at Lulusar Lake. Overnight in Chilas.",
  },
  {
    day: "Day 2",
    title: "Chilas → Karimabad",
    detail:
      "Continue up the KKH past the junction of three mighty mountain ranges. Stop at Rakaposhi viewpoint, then arrive in Karimabad, the heart of Hunza.",
  },
  {
    day: "Day 3",
    title: "Karimabad Heritage Day",
    detail:
      "Explore 700-year-old Baltit Fort and 900-year-old Altit Fort with a local historian. Evening at Eagle's Nest (Duikar) for a golden sunset over the valley.",
  },
  {
    day: "Day 4",
    title: "Attabad & Upper Hunza",
    detail:
      "Boat across turquoise Attabad Lake, walk the Hussaini suspension bridge, and gaze at the Passu Cones. Lunch in Gulmit village.",
  },
  {
    day: "Day 5",
    title: "Khunjerab Pass",
    detail:
      "Full-day excursion to the Pak–China border at 4,693 m — the highest paved border crossing in the world. Snow walls, yaks and thin, electric air.",
  },
  {
    day: "Day 6",
    title: "Naltar Valley Jeep Safari",
    detail:
      "Switch to 4x4 jeeps for Naltar Valley: Satrangi Lake, Blue Lake and pine forests. Bonfire and BBQ night under a sky full of stars.",
  },
  {
    day: "Day 7",
    title: "Return to Islamabad",
    detail:
      "Scenic drive back down the KKH with a farewell lunch in Besham. Tour ends in Islamabad by evening — with a camera roll you'll never delete.",
  },
];

export interface Testimonial {
  name: string;
  city: string;
  tour: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ahmed Raza",
    city: "Lahore",
    tour: "Hunza Autumn Explorer",
    quote:
      "Seven days and not a single dull moment. Our guide Bilal knew every viewpoint, every dhaba, every shortcut. Khunjerab at sunrise genuinely made me emotional.",
  },
  {
    name: "Fatima Khan",
    city: "Karachi",
    tour: "Skardu & Deosai Odyssey",
    quote:
      "As a solo female traveler I was nervous, but the team looked after everything — hotels, jeeps, even my motion sickness. Deosai felt like another planet.",
  },
  {
    name: "Bilal Sheikh",
    city: "Islamabad",
    tour: "Naran Kaghan Escape",
    quote:
      "Booked on WhatsApp at 11pm, confirmed in ten minutes. Transparent pricing, no hidden charges, and the bonfire night at Saif-ul-Malook was pure magic.",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "What is included in the package price?",
    a: "Transport (coaster/hiace or 4x4 jeeps where needed), hotel stays on sharing basis, daily breakfast, tour guide, tolls and fuel. Lunch, dinner and entry tickets are not included unless stated.",
  },
  {
    q: "Group tour ya private trip — what's the difference?",
    a: "Group tours depart on fixed dates with 18–22 fellow travelers and cost less per person. Private trips run on your dates, with your own vehicle and guide — ideal for families, couples and corporate groups.",
  },
  {
    q: "How do I confirm my booking?",
    a: "Pick your tour and date in the booking widget below (or message us on WhatsApp). A 30% advance confirms your seats; the balance is payable before departure via bank transfer or JazzCash/EasyPaisa.",
  },
  {
    q: "What should I pack for the mountains?",
    a: "Warm jacket (even in summer nights get cold), comfortable walking shoes, sunscreen, sunglasses, personal medicines and a power bank. We send a detailed packing list after booking.",
  },
  {
    q: "Is it safe for families and women travelers?",
    a: "Absolutely. Northern areas are among the safest tourist regions in Pakistan. Our groups regularly include families and solo women travelers, with vetted hotels and 24/7 on-tour support.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Full refund up to 7 days before departure, 50% refund up to 72 hours before. If we cancel a departure (weather/road closure), you get a 100% refund or a free date change.",
  },
];

export function formatPKR(n: number): string {
  return "Rs " + Math.round(n).toLocaleString("en-US");
}
