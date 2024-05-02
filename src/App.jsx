import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

export default function App() {
    const [cardsData, setCardsData] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?limit=5`)
                const data = await res.json()
                 setCardsData(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])
    console.log(cardsData)

    return (
      <>
      <Navbar/>
      <div>
        <h2 className=" text-center text-lg font-semibold  m-4  md:text-xl  lg:text-xl">All the Card</h2>
        <div className="flex flex-wrap mx-4 mb-6 gap-6 justify-center items-center">
           {cardsData.map(cardData=> (
               <Card cardData={cardData}/>
           ))}
        </div>
      </div>
      </>
    )
  }