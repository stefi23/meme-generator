import React from "react"
import Header from "./components/Header"
import MemeGenerator from "./components/MemeGenerator"
/**
 * Create 2 new components - Header and MemeGenerator
 * Header will only display things
 * MemeGenerator will be calling to an API and holding on to data
 * Each should be in their own file of the same name
 */

function App() {
    return (
      <>
        <Header />
        <MemeGenerator />
       </> 
    )
}

export default App