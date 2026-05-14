#  Movie Search App

A responsive movie browsing web application built using **Next.js**, **TypeScript**, and **Tailwind CSS**.  
The application allows users to search, sort, and view detailed information about movies through a clean and intuitive interface.

---

## Features

- 🔍 Real-time search by movie title  
- ⭐ Sort movies by rating (High → Low / Low → High)  
- 🎬 Dynamic movie details page  
- 🔗 Client-side navigation using Next.js routing  
- 🖼️ Local image handling via `public/` folder  
- 📱 Fully responsive UI  

---

##  Tech Stack

| Technology   | Purpose                          |
|-------------|----------------------------------|
| Next.js     | Framework & routing              |
| TypeScript  | Type safety                      |
| Tailwind CSS| Styling & responsive design      |
| React       | Component-based architecture     |

---

##  Project Structure
app/
├── movies/
│ ├── page.tsx # Movies listing page
│ ├── [id]/page.tsx # Movie details page
├── _components/
│ ├── MovieCard.tsx
│ ├── Header.tsx
│ ├── Footer.tsx
├── layout.tsx
├── page.tsx

lib/
├── movies.ts # Static movie data

public/
├── images/ # Movie images


---

--- Getting Started

### 1. Clone the repository

bash
git clone https://github.com/aishwarya-m-260803/movie-search-app.git
cd movie-search-app

### 2. Install dependencies
npm install

### 3. Run the development server
npm run dev

### 4. Open in browser
http://localhost:3000

----

 --Key Concepts Used
Dynamic routing with Next.js 
State management using React Hooks 
Filtering and sorting data using JavaScript methods
Reusable component design
Responsive UI using Tailwind CSS

---

 --Future Enhancements
Add Favorites (❤️) functionality
Integrate external movie API
Add genre/category filtering
Implement dark mode

---

Author
Aishwarya M
