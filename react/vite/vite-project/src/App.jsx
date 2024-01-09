import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header"
import Card from "./components/Card"
import './App.css'
import avatar from "./assets/Ellipse 1.png"
import photo from "./assets/Rectangle 1.png"

function App() {
  const arrayPost = [
    {
      id: 1,
      username: "Thiago",
      avatar: avatar,
      photo: photo,
      totalLikes: 12
    },
    {
      id: 2,
      username: "Li",
      avatar: avatar,
      photo: photo,
      totalLikes: 52
    },
    {
      id: 3,
      username: "Gege",
      avatar: avatar,
      photo: photo,
      totalLikes: 43
    },
    {
      id: 4,
      username: "Pedro",
      avatar: avatar,
      photo: photo,
      totalLikes: 13
    },
  ]

  return (
    <>
      <Header/>
      {arrayPost.map(post => (
        <Card post={post}/>
      ))}
    </>
  )
}

export default App
