import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.jsx'
import Work from './pages/Work.jsx'
import About from './pages/About.jsx'
import Experience from './pages/Experience.jsx'
import Blog from './pages/Blog.jsx'

import './sass/main.sass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
