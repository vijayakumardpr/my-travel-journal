import React from "react"
import data from "./data"
import Navbar from "./components/Navbar"
import Travels from "./components/Travels"
import "./styles.css"

export default function App() {
  const cards = data.map((item) => {
    return <Travels key={item.title} {...item} />
  })

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  )
}
