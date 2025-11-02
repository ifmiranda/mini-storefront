This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

1. git clone <your-repo-url>
cd mini 

2. Install dependencies 
npm install 

3. Run the development server
npm run dev 

4. Open the app in browser 
http://localhost:3000 

5. Project format requirements 
src/
├── app/
│   ├── layout.js         # Root layout file (includes <html> and <body>)
│   ├── page.js           # Home page that renders Catalog
│   └── api/
│       └── products/
│           └── route.js  # API endpoint for products
├── components/
│   ├── Catalog.jsx
│   ├── ProductList.jsx
│   ├── ProductCard.jsx
│   ├── CartSummary.jsx
│   ├── CategoryFilter.jsx
│   ├── PriceFilter.jsx
│   └── StatusMessage.jsx
└── globals.css







