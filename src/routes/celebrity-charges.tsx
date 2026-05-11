import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import heroPrabhas from "@/assets/celebrities/hero-prabhas.png";
import { CelebrityCarousel } from "@/components/site/CelebrityCarousel";
import { validateJsonLd } from "@/lib/jsonld";

const SITE_URL = "https://tkctalent.com";
const PAGE_URL = `${SITE_URL}/celebrity-charges`;

type Row = { name: string; tier: string; fee: string; brand: string };
type Cat = { title: string; subtitle?: string; rows: Row[] };

// SECTION 2 — Fee Summary
const summary: { cat: string; range: string; best: string }[] = [
  { cat: "A-List Bollywood Actors", range: "₹2 Cr – ₹4 Cr+ per appearance", best: "Brand launches, luxury weddings, endorsements" },
  { cat: "Bollywood Actresses (A-List to Icon)", range: "₹8 L – ₹3.5 Cr per appearance", best: "Weddings, beauty brands, HNI events, sangeet" },
  { cat: "Event Headliners & Mid-Tier Stars", range: "₹50 L – ₹1.5 Cr per show", best: "Weddings, sangeet, corporate galas" },
  { cat: "Top Playback Singers", range: "₹80 L – ₹14 Cr per concert", best: "Sangeet nights, concerts, festivals" },
  { cat: "Mid-Tier & Emerging Singers", range: "₹5 L – ₹85 L per show", best: "Weddings, college fests, brand events" },
  { cat: "Stand-Up Comedians", range: "₹6 L – ₹60 L per show", best: "Corporate events, private parties, annual days" },
  { cat: "Celebrity DJs", range: "₹5 L – ₹80 L per night", best: "Weddings, after-parties, nightlife" },
  { cat: "Digital Influencers", range: "₹5 L – ₹50 L per campaign", best: "Brand campaigns, product launches" },
  { cat: "Pan-India & South Indian Stars", range: "₹1 Cr – ₹5 Cr+ per appearance", best: "Pan-India brands, destination weddings" },
];

// SECTION 3 — Actors
const actors: Row[] = [
  { name: "Shah Rukh Khan", tier: "A-List", fee: "~₹4 Cr", brand: "₹150–250 Cr" },
  { name: "Salman Khan", tier: "A-List", fee: "~₹4 Cr", brand: "₹100–150 Cr" },
  { name: "Aamir Khan", tier: "A-List", fee: "~₹3.5 Cr", brand: "₹100–275 Cr" },
  { name: "Akshay Kumar", tier: "A-List", fee: "~₹3 Cr", brand: "₹60–145 Cr" },
  { name: "Hrithik Roshan", tier: "A-List", fee: "~₹2 Cr", brand: "₹80–100 Cr" },
  { name: "Ranveer Singh", tier: "A-List", fee: "~₹2 Cr", brand: "₹40–60 Cr" },
  { name: "Ranbir Kapoor", tier: "A-List", fee: "~₹2 Cr", brand: "₹60–75 Cr" },
  { name: "Ajay Devgn", tier: "A-List", fee: "₹2–3 Cr", brand: "₹40–60 Cr" },
  { name: "Shahid Kapoor", tier: "A-List", fee: "₹1–1.5 Cr", brand: "₹25–40 Cr" },
  { name: "Saif Ali Khan", tier: "A-List", fee: "₹75 L–1 Cr", brand: "₹15–25 Cr" },
  { name: "Tiger Shroff", tier: "Mid-Tier", fee: "₹75 L–1.5 Cr", brand: "₹20–35 Cr" },
  { name: "Varun Dhawan", tier: "Mid-Tier", fee: "₹75 L–1 Cr", brand: "₹15–25 Cr" },
  { name: "Kartik Aaryan", tier: "Mid-Tier", fee: "₹75 L–1.5 Cr", brand: "₹15–30 Cr" },
  { name: "Vicky Kaushal", tier: "Mid-Tier", fee: "₹60 L–1 Cr", brand: "₹20–35 Cr" },
  { name: "Rajkummar Rao", tier: "Mid-Tier", fee: "₹50–75 L", brand: "₹10–20 Cr" },
  { name: "Sidharth Malhotra", tier: "Mid-Tier", fee: "₹50–80 L", brand: "₹10–20 Cr" },
  { name: "Aayushmann Khurrana", tier: "Mid-Tier", fee: "₹50–75 L", brand: "₹10–20 Cr" },
  { name: "Pankaj Tripathi", tier: "Character", fee: "₹25–50 L", brand: "₹5–12 Cr" },
  { name: "Nawazuddin Siddiqui", tier: "Character", fee: "₹20–40 L", brand: "₹5–10 Cr" },
  { name: "Sunny Deol", tier: "Retro A", fee: "₹75 L–1 Cr", brand: "₹20–35 Cr" },
];

// SECTION 4 — Actresses
const actressTiers: Cat[] = [
  {
    title: "A-List Actresses — ₹75 L to ₹3.5 Cr per Appearance",
    rows: [
      { name: "Deepika Padukone", tier: "A-List", fee: "₹2–3 Cr", brand: "₹15–30 Cr / ₹10–15 Cr endorse" },
      { name: "Alia Bhatt", tier: "A-List", fee: "₹2–2.5 Cr", brand: "₹20–25 Cr / ₹9 Cr endorse" },
      { name: "Priyanka Chopra", tier: "A-List", fee: "₹2–3 Cr", brand: "₹14–23 Cr / ₹7 Cr endorse" },
      { name: "Kareena Kapoor Khan", tier: "A-List", fee: "₹2.5–3.5 Cr", brand: "₹12–20 Cr" },
      { name: "Katrina Kaif", tier: "A-List", fee: "₹1.5–2.5 Cr", brand: "₹10–18 Cr" },
      { name: "Anushka Sharma", tier: "A-List", fee: "₹2–3 Cr", brand: "₹12–20 Cr" },
      { name: "Kajol", tier: "A-List", fee: "₹1.5–2.5 Cr", brand: "₹10–18 Cr" },
      { name: "Rani Mukerji", tier: "A-List", fee: "₹1–2 Cr", brand: "₹8–15 Cr" },
      { name: "Vidya Balan", tier: "A-List", fee: "₹75 L–1.5 Cr", brand: "₹8–15 Cr" },
    ],
  },
  {
    title: "Mid-Tier Actresses — ₹15 L to ₹2 Cr per Appearance",
    rows: [
      { name: "Kriti Sanon", tier: "Mid-Tier", fee: "₹1.5–2 Cr", brand: "₹8–15 Cr" },
      { name: "Kiara Advani", tier: "Mid-Tier", fee: "₹1–1.5 Cr", brand: "₹4–8 Cr" },
      { name: "Shraddha Kapoor", tier: "Mid-Tier", fee: "₹1–1.5 Cr", brand: "₹8–15 Cr" },
      { name: "Kangana Ranaut", tier: "Mid-Tier", fee: "₹1–1.5 Cr", brand: "₹8–12 Cr" },
      { name: "Taapsee Pannu", tier: "Mid-Tier", fee: "₹30–60 L", brand: "₹4–8 Cr" },
      { name: "Ananya Panday", tier: "Mid-Tier", fee: "₹60–90 L", brand: "₹3–6 Cr" },
      { name: "Vaani Kapoor", tier: "Mid-Tier", fee: "₹40–70 L", brand: "₹3–6 Cr" },
      { name: "Sonakshi Sinha", tier: "Mid-Tier", fee: "₹40–70 L", brand: "₹3–6 Cr" },
      { name: "Yami Gautam", tier: "Mid-Tier", fee: "₹30–60 L", brand: "₹2–5 Cr" },
      { name: "Nora Fatehi", tier: "Mid-Tier", fee: "₹75 L–1.2 Cr", brand: "₹3–6 Cr" },
      { name: "Tamannaah Bhatia", tier: "Mid-Tier", fee: "₹1.5–2 Cr", brand: "₹5–10 Cr" },
      { name: "Esha Gupta", tier: "Mid-Tier", fee: "₹30–60 L", brand: "₹2–5 Cr" },
      { name: "Jacqueline Fernandez", tier: "Mid-Tier", fee: "₹40–75 L", brand: "₹3–6 Cr" },
      { name: "Urvashi Rautela", tier: "Mid-Tier", fee: "₹30–60 L", brand: "₹2–4 Cr" },
      { name: "Sunny Leone", tier: "Mid-Tier", fee: "₹30–50 L", brand: "₹1.5–3 Cr" },
      { name: "Huma Qureshi", tier: "Mid-Tier", fee: "₹20–40 L", brand: "₹1.5–3 Cr" },
      { name: "Sanya Malhotra", tier: "Mid-Tier", fee: "₹25–50 L", brand: "₹2–4 Cr" },
      { name: "Fatima Sana Shaikh", tier: "Mid-Tier", fee: "₹20–40 L", brand: "₹1.5–3 Cr" },
      { name: "Shruti Haasan", tier: "Mid-Tier", fee: "₹40–70 L", brand: "₹3–6 Cr" },
      { name: "Tara Sutaria", tier: "Mid-Tier", fee: "₹20–40 L", brand: "₹1–2.5 Cr" },
      { name: "Nushrratt Bharuccha", tier: "Mid-Tier", fee: "₹20–40 L", brand: "₹1.5–3 Cr" },
      { name: "Chitrangada Singh", tier: "Mid-Tier", fee: "₹15–30 L", brand: "₹1–2 Cr" },
    ],
  },
  {
    title: "Rising Stars — ₹10 L to ₹1.5 Cr per Appearance",
    rows: [
      { name: "Janhvi Kapoor", tier: "Rising", fee: "₹60–80 L", brand: "₹3–6 Cr" },
      { name: "Sara Ali Khan", tier: "Rising", fee: "₹60–80 L", brand: "₹3–6 Cr" },
      { name: "Disha Patani", tier: "Rising", fee: "₹50–75 L", brand: "₹3–5 Cr" },
      { name: "Sharvari Wagh", tier: "Rising", fee: "₹40–60 L", brand: "₹1.5–3 Cr" },
      { name: "Rashmika Mandanna", tier: "Rising", fee: "₹75 L–1.5 Cr", brand: "₹5–10 Cr" },
      { name: "Pooja Hegde", tier: "Rising", fee: "₹60–90 L", brand: "₹3–6 Cr" },
      { name: "Triptii Dimri", tier: "Rising", fee: "₹30–50 L", brand: "₹1–2.5 Cr" },
      { name: "Mrunal Thakur", tier: "Rising", fee: "₹25–45 L", brand: "₹1–2 Cr" },
      { name: "Wamiqa Gabbi", tier: "Rising", fee: "₹15–30 L", brand: "₹80 L–1.5 Cr" },
      { name: "Adah Sharma", tier: "Rising", fee: "₹15–25 L", brand: "₹50 L–1 Cr" },
      { name: "Nikita Dutta", tier: "Rising", fee: "₹10–20 L", brand: "₹30–60 L" },
      { name: "Rhea Chakraborty", tier: "Rising", fee: "₹10–20 L", brand: "₹30–60 L" },
      { name: "Karishma Tanna", tier: "Rising", fee: "₹10–20 L", brand: "₹25–50 L" },
      { name: "Gauahar Khan", tier: "Rising", fee: "₹8–15 L", brand: "₹20–40 L" },
      { name: "Kainaat Arora", tier: "Rising", fee: "₹6–12 L", brand: "₹15–30 L" },
    ],
  },
  {
    title: "Versatile & Character Actresses — ₹10 L to ₹40 L per Appearance",
    rows: [
      { name: "Konkona Sen Sharma", tier: "Versatile", fee: "₹20–40 L", brand: "₹1.5–3 Cr" },
      { name: "Tisca Chopra", tier: "Versatile", fee: "₹10–20 L", brand: "₹50 L–1 Cr" },
      { name: "Nimrat Kaur", tier: "Versatile", fee: "₹15–30 L", brand: "₹80 L–1.5 Cr" },
      { name: "Aditi Rao Hydari", tier: "Versatile", fee: "₹20–40 L", brand: "₹1–2 Cr" },
      { name: "Dia Mirza", tier: "Versatile", fee: "₹10–20 L", brand: "₹40–80 L" },
      { name: "Nargis Fakhri", tier: "Versatile", fee: "₹15–25 L", brand: "₹50 L–1 Cr" },
      { name: "Minissha Lamba", tier: "Versatile", fee: "₹8–15 L", brand: "₹30–60 L" },
    ],
  },
  {
    title: "Icon & Legacy Names — ₹8 L to ₹60 L per Appearance",
    subtitle:
      "Iconic names bringing a powerful nostalgia premium and established brand equity for retro-themed events, legacy brand campaigns and HNI occasions.",
    rows: [
      { name: "Lara Dutta", tier: "Icon", fee: "₹15–30 L", brand: "₹50 L–1 Cr" },
      { name: "Ameesha Patel", tier: "Icon", fee: "₹10–20 L", brand: "₹30–60 L" },
      { name: "Shamita Shetty", tier: "Icon", fee: "₹8–15 L", brand: "₹25–50 L" },
      { name: "Shilpa Shetty", tier: "Icon", fee: "₹30–60 L", brand: "₹1–2 Cr" },
      { name: "Mandira Bedi", tier: "Icon", fee: "₹8–15 L", brand: "₹25–50 L" },
      { name: "Mallika Sherawat", tier: "Icon", fee: "₹10–20 L", brand: "₹30–60 L" },
    ],
  },
];

// SECTION 5 — Comedians
const comedians: Row[] = [
  { name: "Kapil Sharma", tier: "Top Tier", fee: "₹40–60 L", brand: "₹2–4 Cr (acting)" },
  { name: "Sunil Grover", tier: "Top Tier", fee: "₹30–35 L", brand: "₹3–5 Cr (acting)" },
  { name: "Bharti Singh", tier: "Top Tier", fee: "₹20–30 L", brand: "—" },
  { name: "Munawar Faruqui", tier: "Top Tier", fee: "₹25–40 L", brand: "—" },
  { name: "Krushna Abhishek", tier: "Top Tier", fee: "₹15–25 L", brand: "—" },
  { name: "Zakir Khan", tier: "Mid-Tier", fee: "₹20–30 L", brand: "—" },
  { name: "Anubhav Singh Bassi", tier: "Mid-Tier", fee: "₹15–25 L", brand: "—" },
  { name: "Aakash Gupta", tier: "Mid-Tier", fee: "₹15–25 L", brand: "—" },
  { name: "Kenny Sebastian", tier: "Mid-Tier", fee: "₹15–22 L", brand: "—" },
  { name: "Biswa Kalyan Rath", tier: "Mid-Tier", fee: "₹15–25 L", brand: "—" },
  { name: "Kanan Gill", tier: "Mid-Tier", fee: "₹12–20 L", brand: "—" },
  { name: "Abish Mathew", tier: "Mid-Tier", fee: "₹10–18 L", brand: "—" },
  { name: "Rahul Subramanian", tier: "Mid-Tier", fee: "₹10–15 L", brand: "—" },
  { name: "Samay Raina", tier: "Rising", fee: "₹10–20 L", brand: "—" },
  { name: "Gaurav Kapoor", tier: "Rising", fee: "₹8–15 L", brand: "—" },
  { name: "Nishant Tanwar", tier: "Rising", fee: "₹6–12 L", brand: "—" },
];

// SECTION 6 — Singers
const singerTiers: Cat[] = [
  {
    title: "Top-Tier Singers — ₹55 L to ₹14 Cr+",
    rows: [
      { name: "Arijit Singh", tier: "Top Tier", fee: "₹1.2–5 Cr (wedding)", brand: "₹8–14 Cr (concert)" },
      { name: "A. R. Rahman", tier: "Top Tier", fee: "₹2–3 Cr (select)", brand: "₹5–10 Cr" },
      { name: "Diljit Dosanjh", tier: "Top Tier", fee: "₹1–2 Cr", brand: "₹3–6 Cr" },
      { name: "Sonu Nigam", tier: "Top Tier", fee: "₹55–80 L", brand: "₹1.5–3 Cr" },
      { name: "Badshah", tier: "Top Tier", fee: "₹1–1.5 Cr", brand: "₹2–4 Cr" },
      { name: "Neha Kakkar", tier: "Top Tier", fee: "₹80 L–1.2 Cr", brand: "₹2–3 Cr" },
      { name: "Tony Kakkar", tier: "Top Tier", fee: "₹60 L–1 Cr", brand: "₹1–2 Cr" },
      { name: "Sunidhi Chauhan", tier: "Top Tier", fee: "₹40–70 L", brand: "₹1–2 Cr" },
      { name: "Shankar Mahadevan", tier: "Top Tier", fee: "₹50–80 L", brand: "₹1.5–3 Cr" },
      { name: "Udit Narayan", tier: "Legend", fee: "₹40–60 L", brand: "₹1–2 Cr" },
      { name: "Kumar Sanu", tier: "Legend", fee: "₹30–50 L", brand: "₹80 L–1.5 Cr" },
      { name: "Alka Yagnik", tier: "Legend", fee: "₹30–50 L", brand: "₹80 L–1.5 Cr" },
    ],
  },
  {
    title: "Mid-Tier Singers — ₹15 L to ₹90 L",
    rows: [
      { name: "Guru Randhawa", tier: "Mid-Tier", fee: "₹60–90 L", brand: "₹1–2 Cr" },
      { name: "Jubin Nautiyal", tier: "Mid-Tier", fee: "₹60–85 L", brand: "₹1–1.5 Cr" },
      { name: "Shreya Ghoshal", tier: "Mid-Tier", fee: "₹50–80 L", brand: "₹1–2 Cr" },
      { name: "B Praak", tier: "Mid-Tier", fee: "₹15 L–1 Cr", brand: "₹80 L–1.5 Cr" },
      { name: "Darshan Raval", tier: "Mid-Tier", fee: "₹30–60 L", brand: "₹60 L–1 Cr" },
      { name: "Armaan Malik", tier: "Mid-Tier", fee: "₹30–55 L", brand: "₹60 L–1.2 Cr" },
      { name: "Sachet-Parampara", tier: "Mid-Tier", fee: "₹25–50 L", brand: "₹50 L–1 Cr" },
      { name: "Mohit Chauhan", tier: "Mid-Tier", fee: "₹25–45 L", brand: "₹50 L–1 Cr" },
      { name: "Javed Ali", tier: "Mid-Tier", fee: "₹20–40 L", brand: "₹40–80 L" },
      { name: "Lucky Ali", tier: "Mid-Tier", fee: "₹20–40 L", brand: "₹40–80 L" },
      { name: "Amit Trivedi", tier: "Mid-Tier", fee: "₹20–35 L", brand: "₹40–80 L" },
      { name: "Vishal Mishra", tier: "Mid-Tier", fee: "₹20–40 L", brand: "₹40–80 L" },
      { name: "Shalmali Kholgade", tier: "Mid-Tier", fee: "₹15–30 L", brand: "₹30–60 L" },
      { name: "Benny Dayal", tier: "Mid-Tier", fee: "₹15–25 L", brand: "₹25–50 L" },
    ],
  },
  {
    title: "Emerging & Regional Singers — ₹2 L to ₹30 L",
    rows: [
      { name: "Asees Kaur", tier: "Emerging", fee: "₹8–15 L", brand: "₹15–30 L" },
      { name: "Palak Muchhal", tier: "Emerging", fee: "₹10–15 L", brand: "₹20–35 L" },
      { name: "Stebin Ben", tier: "Emerging", fee: "₹8–12 L", brand: "₹15–25 L" },
      { name: "Harshdeep Kaur", tier: "Emerging", fee: "₹10–20 L", brand: "₹20–40 L" },
      { name: "Jonita Gandhi", tier: "Emerging", fee: "₹8–15 L", brand: "₹15–30 L" },
      { name: "Rahul Vaidya", tier: "Emerging", fee: "₹10–18 L", brand: "₹18–30 L" },
      { name: "Pawandeep Rajan", tier: "Emerging", fee: "₹8–15 L", brand: "₹15–25 L" },
      { name: "Shamsher Lehri", tier: "Regional", fee: "₹5–12 L", brand: "₹10–20 L" },
      { name: "Pranjal Dahiya", tier: "Regional", fee: "₹8–15 L", brand: "₹15–25 L" },
      { name: "KD Desirock", tier: "Regional", fee: "₹5–10 L", brand: "₹8–18 L" },
      { name: "Aman Jaji", tier: "Regional", fee: "₹4–8 L", brand: "₹6–12 L" },
      { name: "Gulam Jugni", tier: "Regional", fee: "₹3–6 L", brand: "₹5–10 L" },
    ],
  },
];

// SECTION 7 — Pan-India
const panIndia: Row[] = [
  { name: "Prabhas", tier: "Pan-India", fee: "₹3–5 Cr", brand: "₹100–200 Cr" },
  { name: "Allu Arjun", tier: "Pan-India", fee: "₹2–4 Cr", brand: "₹80–150 Cr" },
  { name: "Rajinikanth", tier: "Legend", fee: "₹5–8 Cr", brand: "₹150–250 Cr" },
  { name: "Kamal Haasan", tier: "Legend", fee: "₹3–5 Cr", brand: "₹80–150 Cr" },
  { name: "Vijay (Thalapathy)", tier: "Pan-India", fee: "₹3–5 Cr", brand: "₹100–200 Cr" },
  { name: "Yash (KGF)", tier: "Pan-India", fee: "₹3–5 Cr", brand: "₹80–150 Cr" },
  { name: "Mahesh Babu", tier: "Pan-India", fee: "₹2–4 Cr", brand: "₹60–120 Cr" },
  { name: "Ram Charan", tier: "Pan-India", fee: "₹2–4 Cr", brand: "₹60–100 Cr" },
  { name: "Jr. NTR", tier: "Pan-India", fee: "₹2–4 Cr", brand: "₹60–100 Cr" },
  { name: "Dhanush", tier: "Pan-India", fee: "₹1.5–3 Cr", brand: "₹40–80 Cr" },
  { name: "Vijay Sethupathi", tier: "Pan-India", fee: "₹1–2 Cr", brand: "₹20–50 Cr" },
  { name: "Nayanthara", tier: "Pan-India", fee: "₹2–3.5 Cr", brand: "₹30–60 Cr" },
  { name: "Samantha Ruth Prabhu", tier: "Pan-India", fee: "₹1.5–2.5 Cr", brand: "₹20–40 Cr" },
  { name: "Fahadh Faasil", tier: "Regional", fee: "₹75 L–1.5 Cr", brand: "₹10–25 Cr" },
  { name: "Dulquer Salmaan", tier: "Regional", fee: "₹75 L–1.5 Cr", brand: "₹10–20 Cr" },
  { name: "Tovino Thomas", tier: "Regional", fee: "₹30–60 L", brand: "₹5–12 Cr" },
];

// SECTION 8 — DJs
const djs: Row[] = [
  { name: "DJ Aqeel", tier: "Top Tier", fee: "₹20–40 L", brand: "—" },
  { name: "DJ Chetas", tier: "Top Tier", fee: "₹20–35 L", brand: "—" },
  { name: "DJ NYK", tier: "Top Tier", fee: "₹15–30 L", brand: "—" },
  { name: "DJ Khushi", tier: "Top Tier", fee: "₹15–25 L", brand: "—" },
  { name: "DJ Suketu", tier: "Top Tier", fee: "₹15–25 L", brand: "—" },
  { name: "DJ Kiran Kamath", tier: "Mid-Tier", fee: "₹10–20 L", brand: "—" },
  { name: "DJ Notorious", tier: "Mid-Tier", fee: "₹10–18 L", brand: "—" },
  { name: "DJ Shadow Delhi", tier: "Mid-Tier", fee: "₹8–15 L", brand: "—" },
  { name: "DJ Sheizwood", tier: "Mid-Tier", fee: "₹8–15 L", brand: "—" },
  { name: "DJ Skip", tier: "Emerging", fee: "₹5–10 L", brand: "—" },
  { name: "DJ Hardik", tier: "Emerging", fee: "₹4–8 L", brand: "—" },
];

// SECTION 9 — Influencers
const influencers: Row[] = [
  { name: "Bhuvan Bam (BB Ki Vines)", tier: "Mega", fee: "₹30–50 L", brand: "₹50 L–1.5 Cr (brand)" },
  { name: "Ashish Chanchlani", tier: "Mega", fee: "₹25–40 L", brand: "₹40 L–1 Cr" },
  { name: "CarryMinati (Ajey Nagar)", tier: "Mega", fee: "₹25–45 L", brand: "₹40 L–1.2 Cr" },
  { name: "Ranveer Allahbadia (BeerBiceps)", tier: "Mega", fee: "₹20–35 L", brand: "₹30–80 L" },
  { name: "Prajakta Koli (MostlySane)", tier: "Macro", fee: "₹10–20 L", brand: "₹15–35 L" },
  { name: "Niharika NM", tier: "Macro", fee: "₹8–18 L", brand: "₹12–30 L" },
  { name: "Triggered Insaan", tier: "Macro", fee: "₹10–20 L", brand: "₹15–30 L" },
  { name: "Sejal Kumar", tier: "Macro", fee: "₹5–12 L", brand: "₹8–20 L" },
  { name: "Dolly Singh", tier: "Macro", fee: "₹5–10 L", brand: "₹8–18 L" },
  { name: "Komal Pandey", tier: "Macro", fee: "₹5–10 L", brand: "₹8–18 L" },
  { name: "Aashna Shroff", tier: "Macro", fee: "₹4–8 L", brand: "₹6–15 L" },
];

// SECTION 10 — Cost stack
const costStack: { c: string; addOn: string; n: string }[] = [
  { c: "Artist Fee", addOn: "Base cost", n: "Non-negotiable minimum; varies by artist, event type & duration" },
  { c: "GST (18%)", addOn: "+18% on fee", n: "Statutory — applies to all artist payments in India" },
  { c: "Travel & Logistics", addOn: "+5–15%", n: "Business class flights, first-class train, local convoy" },
  { c: "Hospitality", addOn: "+5–10%", n: "5-star hotel, F&B, entourage rooms for manager, stylist, security" },
  { c: "Technical Rider", addOn: "+10–20%", n: "Stage design, sound system, lighting rig, backline per artist spec" },
  { c: "Security", addOn: "+2–5%", n: "Personal security and crowd management coordination" },
  { c: "Exclusivity Clause", addOn: "Negotiable", n: "Prevents artist appearing at rival events; adds 10–25%" },
  { c: "Content Rights", addOn: "Negotiable", n: "Photography/video usage rights beyond the event day" },
];

// SECTION 11 — FAQs
const faqs: { q: string; a: string }[] = [
  { q: "How much does it cost to book Shah Rukh Khan in 2026?", a: "Shah Rukh Khan's event appearance fee is approximately ₹3.5–4 Crore, exclusive of GST, travel and hospitality. Film fees are significantly higher. Contact TKC Talent for current availability and an itemised proposal within 30 minutes." },
  { q: "What is Arijit Singh's wedding booking fee in 2026?", a: "Arijit Singh's fee for weddings and sangeet nights ranges from ₹1.2 Crore to ₹5 Crore depending on set duration, location, band requirements and event scale. TKC Talent has successfully managed Arijit Singh performances for luxury weddings across Delhi NCR and destination venues." },
  { q: "How much does it cost to book Sunil Grover for a corporate event?", a: "Sunil Grover's booking fee for corporate events and private parties is approximately ₹30–35 Lakhs per show. He is India's most versatile comedy entertainer — equally effective at corporate galas, wedding functions and premium private events." },
  { q: "What is Kareena Kapoor Khan's appearance fee for a wedding?", a: "Kareena Kapoor Khan's appearance fee for weddings and HNI private events is approximately ₹2.5–3.5 Crore. All bookings are managed under a signed confidentiality agreement with full logistics handled by TKC Talent." },
  { q: "Can I book a South Indian celebrity like Prabhas or Allu Arjun for an event in Delhi?", a: "Yes. TKC Talent manages Pan-India bookings including Prabhas, Allu Arjun, Vijay, Yash (KGF), Nayanthara and more for events across Delhi NCR, Mumbai, Jaipur and other cities. Our network in Chennai, Hyderabad and Bengaluru enables national coverage." },
  { q: "How early should I book a Bollywood celebrity?", a: "Book A-list celebrities 90–120 days in advance, especially during peak wedding season (October to February). Mid-tier artists can usually be confirmed within 30–45 days. Last-minute bookings within 7–15 days are possible but carry premium fees and limited availability." },
  { q: "What additional costs are involved beyond the artist fee?", a: "Budget for GST (18%), business class travel, 5-star hospitality, technical riders (sound, stage, lighting), personal security and content rights. Total add-ons typically run 20–30% above the base artist fee. TKC Talent provides a fully itemised breakdown — no surprises." },
  { q: "Do you book comedy performers for corporate events?", a: "Yes. TKC Talent manages India's top comedians for corporate events — from Bollywood crossover names like Sunil Grover and Kapil Sharma to Netflix-era stand-ups including Zakir Khan, Kanan Gill and Anubhav Singh Bassi. All sets can be customised for corporate and professional audiences." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}/#article`,
      headline: "Bollywood Celebrity Booking Fees 2026 — Actors, Actresses, Singers, Comedians & More",
      description: "Verified 2026 booking fees for 100+ Bollywood actors, actresses, singers, comedians, DJs, influencers and Pan-India stars. TKC Talent.",
      author: { "@type": "Organization", name: "TKC Talent" },
      publisher: { "@type": "Organization", name: "TKC Talent" },
      mainEntityOfPage: PAGE_URL,
      inLanguage: "en-IN",
      dateModified: "2026-05-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Celebrity Booking India", item: `${SITE_URL}/celebrity-booking-india` },
        { "@type": "ListItem", position: 3, name: "Bollywood Celebrity Charges 2026", item: PAGE_URL },
      ],
    },
  ],
};

export const Route = createFileRoute("/celebrity-charges")({
  head: () => ({
    meta: [
      { title: "Bollywood Celebrity Booking Fees 2026 — Actors, Singers & Comedians | TKC Talent" },
      { name: "description", content: "Book Bollywood celebrities, singers & comedians for events across India. Verified 2026 fee ranges for 100+ artists — ₹5L to ₹4Cr+. Transparent quotes in 30 minutes. TKC Talent by The Kabir Company." },
      { name: "keywords", content: "bollywood celebrity booking fees 2026, celebrity booking cost India, book Shah Rukh Khan, Arijit Singh wedding fee, actress booking fee India, celebrity charges for wedding, book comedian for corporate event" },
      { property: "og:title", content: "Bollywood Celebrity Booking Fees 2026 — Actors, Singers & Comedians | TKC Talent" },
      { property: "og:description", content: "Verified 2026 fee ranges for 100+ artists across actors, actresses, singers, comedians, DJs, influencers and Pan-India stars." },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(validateJsonLd("/celebrity-charges", jsonLd)) }],
  }),
  component: CelebrityChargesPage,
});

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
      <span className="font-display text-foreground/30">{n}</span>
      <span className="h-px flex-1 bg-foreground/15" />
      <span>{children}</span>
    </p>
  );
}

function ArtistTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-foreground/15 text-xs uppercase tracking-[0.18em] text-foreground/60">
            <th className="py-3 pr-4 font-medium">Artist</th>
            <th className="py-3 pr-4 font-medium">Tier</th>
            <th className="py-3 pr-4 font-medium">Appearance / Event Fee</th>
            <th className="py-3 font-medium">Film / Brand / Endorsement</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-b border-foreground/10 transition-colors hover:bg-foreground/[0.03]">
              <td className="py-4 pr-4 font-display text-base font-bold text-foreground">{r.name}</td>
              <td className="py-4 pr-4 text-foreground/60">{r.tier}</td>
              <td className="py-4 pr-4 font-medium text-foreground/90">{r.fee}</td>
              <td className="py-4 text-foreground/70">{r.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CategoryBlock({ cat }: { cat: Cat }) {
  return (
    <div className="mb-12">
      <h3 className="mb-2 font-display text-2xl font-bold sm:text-3xl">{cat.title}</h3>
      {cat.subtitle && <p className="mb-4 max-w-3xl text-sm text-foreground/60">{cat.subtitle}</p>}
      <ArtistTable rows={cat.rows} />
    </div>
  );
}

function CelebrityChargesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-foreground/10">
        <div className="absolute inset-x-0 top-0 z-10">
          <Nav variant="dark" />
        </div>
        <div className="px-6 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-40">
          <nav className="mb-10 text-xs uppercase tracking-[0.25em] text-foreground/50" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <Link to="/celebrity-booking-india" className="hover:text-foreground">Celebrity Booking India</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <span className="text-foreground/80">Bollywood Celebrity Charges 2026</span>
          </nav>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-9">
              <p className="mb-6 text-xs uppercase tracking-[0.25em] text-foreground/50">
                The Definitive Guide · Last updated May 2026
              </p>
              <h1 className="font-display text-[clamp(2.25rem,6vw,5.25rem)] font-bold leading-[0.95]">
                Bollywood Celebrity Booking Fees 2026 —{" "}
                <span className="bg-brand/30 px-2">Actors, Actresses, Singers, Comedians</span>{" "}
                <span className="italic text-foreground/60">& More.</span>
              </h1>
              <p className="mt-8 max-w-3xl text-base leading-relaxed text-foreground/70 sm:text-lg">
                Planning a luxury wedding, corporate launch or large-scale event in India? TKC Talent
                publishes India's most transparent celebrity booking fee guide — updated for 2026,
                covering 100+ artists across Bollywood actors, actresses, playback singers, comedians,
                DJs, digital influencers and Pan-India stars.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/60 sm:text-base">
                All fee ranges are indicative starting points based on 2026 market conditions. Final
                commercials depend on the artist, event type, duration, location and deliverables.
                Share your brief and our team responds with a tailored, itemised quote within 30
                minutes — 9 AM to 11 PM IST, every day.
              </p>
              <ul className="mt-6 grid max-w-3xl grid-cols-1 gap-2 text-sm text-foreground/80 sm:grid-cols-2">
                <li>✔ Fees verified against 2026 market rates</li>
                <li>✔ Direct relationships — no aggregator markups</li>
                <li>✔ GST-compliant contracts, end-to-end logistics</li>
                <li>✔ 100+ artists across 7 talent categories</li>
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="https://wa.me/919599599699" target="_blank" rel="noopener" className="inline-flex h-12 items-center rounded-full bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-90">
                  Get a Quote on WhatsApp →
                </a>
                <a href="#book" className="inline-flex h-12 items-center rounded-full border border-foreground/20 px-7 text-sm font-medium transition-colors hover:bg-foreground/5">
                  Submit Booking Form →
                </a>
                <a href="mailto:hello@tkctalent.com" className="inline-flex h-12 items-center rounded-full border border-foreground/20 px-7 text-sm font-medium transition-colors hover:bg-foreground/5">
                  Email the Team
                </a>
              </div>
              <p className="mt-4 text-xs text-foreground/50">Response within 30 minutes · 9 AM – 11 PM IST</p>
            </div>
          </div>

          {/* hero image (Prabhas) */}
          <div className="mt-14 overflow-hidden rounded-2xl border border-foreground/10">
            <img src={heroPrabhas} alt="Prabhas — Pan-India superstar, illustrative hero" loading="eager" className="h-[280px] w-full object-cover sm:h-[520px]" />
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <CelebrityCarousel />

      {/* SECTION 2 — Fee Summary */}
      <section className="border-y border-foreground/10 bg-foreground/[0.02] px-6 py-24 sm:px-10 sm:py-32">
        <div className="mb-10 max-w-3xl">
          <SectionLabel n="02">Fee Summary</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
            2026 Celebrity Booking Fee Summary — Key Numbers at a Glance
          </h2>
          <p className="mt-6 text-foreground/70">
            All figures below are exclusive of GST (18%), travel, hospitality and technical riders.
            Budget 20–30% above artist fee for the full cost stack.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-foreground/10 bg-background">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-foreground/15 bg-foreground/[0.04] text-xs uppercase tracking-[0.18em] text-foreground/60">
                <th className="px-5 py-4 font-medium">Talent Category</th>
                <th className="px-5 py-4 font-medium">2026 Fee Range</th>
                <th className="px-5 py-4 font-medium">Best For</th>
              </tr>
            </thead>
            <tbody>
              {summary.map((s) => (
                <tr key={s.cat} className="border-b border-foreground/10">
                  <td className="px-5 py-4 font-display font-bold">{s.cat}</td>
                  <td className="px-5 py-4 font-medium text-foreground/90">{s.range}</td>
                  <td className="px-5 py-4 text-foreground/70">{s.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3 — Actors */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mb-10 max-w-3xl">
          <SectionLabel n="03">A-List Actors</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
            A-List Bollywood Actor Booking Fees 2026
          </h2>
          <p className="mt-6 text-foreground/70">
            India's biggest male stars command premium commercials across films, brand campaigns and
            high-profile events. Ideal for global brand launches, corporate functions, luxury wedding
            receptions and government flagship events. TKC Talent holds direct management
            relationships with all artists listed below.
          </p>
        </div>
        <ArtistTable rows={actors} />
      </section>

      {/* SECTION 4 — Actresses */}
      <section className="border-y border-foreground/10 bg-foreground/[0.02] px-6 py-24 sm:px-10 sm:py-32">
        <div className="mb-10 max-w-3xl">
          <SectionLabel n="04">Actresses · 57 Artists</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
            Bollywood Actress Booking Fees 2026 — Complete Roster
          </h2>
          <p className="mt-6 text-foreground/70">
            India's leading actresses deliver unmatched brand equity, aspirational appeal and social
            media amplification across luxury weddings, beauty and fashion brand campaigns, HNI
            private events and corporate functions. TKC Talent manages all actress bookings under
            signed NDA arrangements.
          </p>
          <p className="mt-4 text-foreground/60">
            The full roster spans five tiers — A-List, Mid-Tier, Rising Stars, Versatile/Character and
            Icon/Legacy. All fees are per-appearance, exclusive of GST, travel and hospitality.
          </p>
        </div>
        {actressTiers.map((c) => (
          <CategoryBlock key={c.title} cat={c} />
        ))}
        <p className="mt-2 max-w-3xl text-sm text-foreground/60">
          Note: All actress bookings require signed confidentiality agreements. TKC Talent manages
          full appearance coordination — from arrival logistics and green room requirements to
          on-day event management and post-event media rights.
        </p>
      </section>

      {/* SECTION 5 — Comedians */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mb-10 max-w-3xl">
          <SectionLabel n="05">Comedians</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
            Stand-Up Comedian Booking Fees India 2026 — Corporate Events & Private Parties
          </h2>
          <p className="mt-6 text-foreground/70">
            Comedy is India's fastest-growing corporate entertainment category. TKC Talent works with
            everyone from Bollywood crossover names like Sunil Grover and Kapil Sharma to the new
            generation of Netflix-era stand-ups — all with brand-safe, customisable sets for
            corporate, wedding and private audiences.
          </p>
        </div>
        <ArtistTable rows={comedians} />
      </section>

      {/* SECTION 6 — Singers */}
      <section className="border-y border-foreground/10 bg-foreground/[0.02] px-6 py-24 sm:px-10 sm:py-32">
        <div className="mb-10 max-w-3xl">
          <SectionLabel n="06">Singers</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
            Singer Booking Fees India 2026 — Playback Artists, Live Performers & Emerging Talent
          </h2>
          <p className="mt-6 text-foreground/70">
            From arena-filling concert headliners to intimate sangeet night performers, TKC Talent
            manages India's most comprehensive singer booking roster. All bookings include confirmed
            availability, signed contract, technical rider review, travel and hospitality management,
            and a dedicated TKC on-ground coordinator for the event day.
          </p>
        </div>
        {singerTiers.map((c) => (
          <CategoryBlock key={c.title} cat={c} />
        ))}
      </section>

      {/* SECTION 7 — Pan-India */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mb-10 max-w-3xl">
          <SectionLabel n="07">Pan-India & South</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
            Pan-India & South Indian Celebrity Booking Fees 2026
          </h2>
          <p className="mt-6 text-foreground/70">
            The pan-India entertainment market has exploded post-RRR, KGF and Pushpa. TKC Talent's
            network spans talent agencies in Chennai, Hyderabad, Bengaluru and Kochi — enabling us to
            confirm availability and execute logistics for South Indian superstars across any city in
            India.
          </p>
        </div>
        <ArtistTable rows={panIndia} />
      </section>

      {/* SECTION 8 — DJs */}
      <section className="border-y border-foreground/10 bg-foreground/[0.02] px-6 py-24 sm:px-10 sm:py-32">
        <div className="mb-10 max-w-3xl">
          <SectionLabel n="08">Celebrity DJs</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
            Celebrity DJ Booking Fees India 2026 — Weddings, After-Parties & Corporate Events
          </h2>
          <p className="mt-6 text-foreground/70">
            TKC Talent books India's most sought-after DJs with full sound, lighting and production
            management through our in-house technical team. Available for Delhi NCR, destination
            weddings and pan-India events.
          </p>
        </div>
        <ArtistTable rows={djs} />
      </section>

      {/* SECTION 9 — Influencers */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mb-10 max-w-3xl">
          <SectionLabel n="09">Digital Creators</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
            Digital Influencer & Content Creator Booking Fees India 2026
          </h2>
          <p className="mt-6 text-foreground/70">
            TKC Talent connects brands with India's most-followed digital creators for product
            launches, brand campaigns and experiential activations. All bookings include contract and
            compliance handling, deliverable management and performance reporting.
          </p>
        </div>
        <ArtistTable rows={influencers} />
      </section>

      {/* SECTION 10 — Cost stack */}
      <section className="border-y border-foreground/10 bg-foreground/[0.02] px-6 py-24 sm:px-10 sm:py-32">
        <div className="mb-10 max-w-3xl">
          <SectionLabel n="10">Full Cost Stack</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
            What Does Celebrity Booking Actually Cost? — Full Fee Breakdown 2026
          </h2>
          <p className="mt-6 text-foreground/70">
            Celebrity commercials are multi-layered. The artist fee is only the starting point. Here
            is the complete cost stack TKC Talent factors into every booking proposal — so your
            budget is accurate from day one.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-foreground/10 bg-background">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-foreground/15 bg-foreground/[0.04] text-xs uppercase tracking-[0.18em] text-foreground/60">
                <th className="px-5 py-4 font-medium">Cost Component</th>
                <th className="px-5 py-4 font-medium">Add-On</th>
                <th className="px-5 py-4 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {costStack.map((s) => (
                <tr key={s.c} className="border-b border-foreground/10">
                  <td className="px-5 py-4 font-display font-bold">{s.c}</td>
                  <td className="px-5 py-4 font-medium text-foreground/90">{s.addOn}</td>
                  <td className="px-5 py-4 text-foreground/70">{s.n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-3xl text-foreground/70">
          <strong>Rule of thumb:</strong> budget 20–30% above the base artist fee to cover the full
          cost stack. TKC Talent provides a fully itemised quote — no surprises, no hidden markups.
        </p>
      </section>

      {/* SECTION 11 — FAQ */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mb-12 max-w-3xl">
          <SectionLabel n="11">FAQ</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
            Celebrity Booking FAQ — Fees, Process & Availability in India 2026
          </h2>
        </div>
        <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
          {faqs.map((f) => (
            <li key={f.q} className="py-6">
              <h3 className="font-display text-lg font-medium sm:text-xl">{f.q}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/70 sm:text-base">{f.a}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 12 — Long-form */}
      <section className="border-y border-foreground/10 bg-foreground/[0.02] px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <SectionLabel n="12">About TKC Talent</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[0.95]">
            TKC Talent — India's Verified Source for Celebrity Booking Fees
          </h2>
          <div className="mt-8 space-y-6 text-foreground/75 leading-relaxed">
            <p>
              When brands, wedding families and event agencies across India want to know what it
              genuinely costs to book a Bollywood celebrity in 2026, they come to TKC Talent. As a
              division of The Kabir Company — India's premier event and artist management agency
              since 2005 — we publish verified commercial rates informed by real booking
              negotiations, active artist relationships and two decades of execution experience.
            </p>
            <p>
              Our actress booking roster is now India's most comprehensive — spanning 57 artists
              across five tiers, from Bollywood's biggest A-list names including Deepika Padukone,
              Alia Bhatt, Kareena Kapoor Khan and Kajol, to celebrated mid-tier performers like
              Sonakshi Sinha, Vaani Kapoor, Jacqueline Fernandez, Esha Gupta, Yami Gautam and Huma
              Qureshi, rising stars like Rashmika Mandanna, Sharvari Wagh and Tara Sutaria,
              versatile screen legends like Vidya Balan, Tisca Chopra, Konkona Sen Sharma, Nimrat
              Kaur and Dia Mirza, and iconic legacy names like Shilpa Shetty, Lara Dutta, Rani
              Mukerji, Mandira Bedi, Shamita Shetty and Mallika Sherawat who bring a powerful
              nostalgia premium to any event.
            </p>
            <p>
              For live music, we have delivered Arijit Singh, Badshah, Guru Randhawa, Neha Kakkar,
              Diljit Dosanjh and Sonu Nigam to weddings and concerts across India. For corporate
              entertainment, Sunil Grover, Kapil Sharma, Zakir Khan and India's new generation of
              Netflix-era stand-ups consistently deliver standing-ovation performances. And for
              Pan-India bookings — Prabhas, Allu Arjun, Rajinikanth, Nayanthara, Vijay and the South
              Indian superstars whose national market value has surged post-RRR and KGF — TKC
              Talent's network in Chennai, Hyderabad and Bengaluru enables confirmed bookings and
              seamless execution anywhere in India.
            </p>
            <p>
              Ready to move from research to a confirmed booking? Contact TKC Talent — our team
              responds within 30 minutes with verified availability and a fully itemised commercial
              proposal. 9 AM to 11 PM IST, 7 days a week.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="bg-foreground px-6 py-20 text-background sm:px-10 sm:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-background/50">Ready when you are</p>
        <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.95]">
          Planning something big?
          <br />
          Let's bring it to <span className="italic">life.</span>
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="https://wa.me/919599599699" target="_blank" rel="noopener" className="inline-flex h-12 items-center rounded-full bg-brand px-7 text-sm font-medium text-brand-foreground hover:opacity-90">
            WhatsApp us →
          </a>
          <a href="tel:+919599599699" className="inline-flex h-12 items-center rounded-full border border-background/30 px-7 text-sm font-medium hover:bg-background/10">
            Call +91 95995 99699
          </a>
          <a href="mailto:hello@tkctalent.com" className="inline-flex h-12 items-center rounded-full border border-background/30 px-7 text-sm font-medium hover:bg-background/10">
            hello@tkctalent.com
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
