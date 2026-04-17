# Indian Travel - Complete Fullstack Project 🌟

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html5.org)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://css3.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://javascript.com)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)

Complete **fullstack Indian Travel website** with dynamic frontend + Node.js/Express backend. Features API-driven content, contact form persistence, newsletter signup, responsive design.

## 🚀 Quick Start (Windows)

1. **Install dependencies**:
   ```
   cd backend
   npm install
   ```

2. **Start server**:
   ```
   npm start
   ```
   (Or `npm run dev` for nodemon)

3. **Open browser** → http://localhost:3000/

Backend automatically serves frontend + APIs!

## 🌐 Features

### Frontend (Dynamic)
- Responsive Bootstrap 5 design
- Hero carousel, dynamic destinations/packages cards (from API)
- Contact form → saves to `backend/data/contacts.json`
- Newsletter signup → `/api/newsletter`
- Smooth scroll, hover effects, back-to-top
- Links to detail pages (delhi.html, etc.)

### Backend (Complete APIs)
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/destinations` | GET | All 6 destinations (Delhi, Kerala, Rajasthan, Ladakh, Karnataka, Meghalaya) |
| `/api/destinations/:id` | GET | Single destination |
| `/api/packages` | GET | 3 tour packages w/ prices |
| `/api/contact` | POST | Contact form (persists to JSON) |
| `/api/newsletter` | POST | Newsletter signup (logs) |
| `/api/health` | GET | Server status |

- Serves `frontend/` static files
- CORS for dev ports (3000, 5500)
- JSON data in `backend/data/`
- Error handling, logging

## 📁 Structure

```
indiantravel - Copy/
├── frontend/              # Frontend (served by backend)
│   ├── index.html
│   ├── script.js         # Dynamic API calls
│   └── styles.css
├── backend/               # Fullstack backend
│   ├── server.js         # Express app
│   ├── package.json      # deps: express, cors, dotenv
│   └── data/
│       ├── destinations.json
│       ├── packages.json
│       └── contacts.json # Form submissions
├── delhi.html            # Static detail pages
├── TODO.md               # Progress tracker
└── README.md             # This file
```

## 🧪 Test It

1. Start server → localhost:3000 loads dynamic site
2. Destinations/Packages populate from API
3. Submit contact → check `backend/data/contacts.json`
4. Newsletter → console log + API response
5. Health: `http://localhost:3000/api/health`

## 🔧 Development

```
cd backend
npm run dev  # Hot reload
```

**Edit data JSON** → refresh browser (dynamic!)

## 🚀 Production

1. `npm install --production` (backend)
2. Set `PORT` env var
3. Deploy backend (Vercel, Render, Railway)
4. Static frontend auto-served

## 📊 Data Samples

**Destinations** (6):
- Delhi: Red Fort, Qutub Minar
- Kerala: Backwaters, Munnar
- Rajasthan: Amber Fort, Udaipur
- Ladakh: Pangong Lake
- Karnataka: Mysore Palace
- Meghalaya: Living Root Bridges

**Packages**:
- Golden Triangle: ₹45,000 (7 days)
- Kerala Backwaters: ₹35,000 (5 days)
- Ladakh Adventure: ₹55,000 (8 days)

## 🙌 Next Steps (Optional)

- MongoDB/PostgreSQL for persistence
- Nodemailer for emails
- Auth/JWT for bookings
- Image upload/CDN
- Deploy: Vercel (backend+frontend)

**Fully functional fullstack travel site ready!** Questions? Check TODO.md or server logs.

---
*Built by BLACKBOXAI - Complete & Production-ready*

