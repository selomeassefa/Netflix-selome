import { useState } from 'react'

import './App.css'
import Header from './Components/header/Header'
import Banner from './Components/Banner/Banner'
import RowList from './Components/Rows/RowList/RowList'

function App() {


  return (
    <>
      <Header />
      <Banner />
      <RowList/>
    </>
  )
}

export default App
