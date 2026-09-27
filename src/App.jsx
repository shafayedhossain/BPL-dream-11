
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Componant/Banner/Banner'
import Navbar from './Componant/Navbar'
import Players from './Componant/Players'
import { ToastContainer } from 'react-toastify'
 const fetchPlayer = async() =>{
  const res = await fetch("/public/data.json")
  return res.json() ;
 }
function App() {
const playersPromise = fetchPlayer();
const [coin, setCoin] = useState(50000)

  return (
    <>

<Navbar coin={coin}></Navbar>
<Banner></Banner>
<Suspense fallback={
<span className="loading loading-spinner text-error"></span>}>

<Players playersPromise ={playersPromise} setCoin = {setCoin} coin ={coin}></Players>
</Suspense>
 <ToastContainer />
    </>
  )
}

export default App
