import React, { useEffect, useState } from 'react'
import Home from './Components.jsx/Home'
import Navbar from './Components.jsx/Navbar'
import Footer from './Components.jsx/Footer'
import axios from 'axios'

const App = () => {
  const [news,setNews] = useState([])
  const API_KEY = import.meta.env.VITE_NEWS_APP_APIKEY;

  const filterNews = async (category) => {
    let link = "";
    if(category && category !== "everything"){
      link = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`

    }else{
      link = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}`
    }
    
    const  {data } = await axios.get(link)
    console.log(data);
    setNews(data.articles)
    
  }
  useEffect(() => {
    filterNews()
  },[])
  return (
    <>
    <Navbar filterNews={filterNews}/>
    <Home news={news}/>
    <Footer/>

    </>
  )
}

export default App