import React, { use, useState } from 'react';
import Available from './Available';
import SelectedPlayers from './SelectedPlayers';

const Players = ({playersPromise, setCoin , coin}) => {
    console.log(playersPromise )
    const players = use(playersPromise);
    console.log(players)
    const[selectedType , setSelectedType] = useState("available")
    console.log(setSelectedType);
    const [selectedPlayer, setSelectedPlayer] = useState([]);
    return (


        <div className='w-11/12 mx-auto my-20'>
            <div className='flex justify-between items-center gap-4 mb-[20px]'>
           {selectedType === "available" ? (<h2 className='font-bold text-3xl'>Available Players</h2>):
           (<h2 className='font-bold text-3xl'>Selected Players ({selectedPlayer.length}/{players.length})</h2>) }

           <div>
            <button
              onClick={()=> setSelectedType("available")}
            className={`btn ${selectedType === "available" ? " bg-[#E7FE29]" : ""
                }  
                 rounded-r-none rounded-l-xl`}>Available</button>
          
            <button 
               onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? " bg-[#E7FE29]" : ""}
                
                 rounded-l-none rounded-r-xl`}>Selected({selectedPlayer.length})</button>
           </div>
            </div>
       {selectedType ==="available" ? (<Available players={players} setCoin={setCoin} coin= {coin}
         setSelectedPlayer ={setSelectedPlayer}  selectedPlayer ={selectedPlayer}
       ></Available>) : <SelectedPlayers selectedPlayer = {selectedPlayer} setSelectedPlayer={setSelectedPlayer}
          setCoin={setCoin} coin= {coin}
       ></SelectedPlayers>}
        </div>
    );
};

export default Players;