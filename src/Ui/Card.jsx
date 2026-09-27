
import { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
const Card = ({player, setCoin, coin, selectedPlayer, setSelectedPlayer}) => {
      const [isSelected , setIsSelected] = useState(false);
       console.log(player.price);
      const handleChoosePlayer = ()=> {
            let newCoin = coin - player.price;
               if(newCoin >= 0){
                 setCoin(coin - player.price);
                }
                else{
                  toast.error("Not enough to purchase this player")
                  return;
                }

                    toast.success(`${player.playerName} is selected`)
        setIsSelected(true);
          setSelectedPlayer([...selectedPlayer, player])
              
      };
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='w-full h-60 object-fill'
      src={player.playerImg}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
       <FaUser />
    {player.playerName}</h2>
    <div className='flex  justify-between items-center'>
      <div className='flex  gap-1.5 items-center'>
         
             <FaFlag />
    
      <p>  {player.playerCountry}</p>
      </div>
       <div>
        <button className="btn">{player.playerType}</button>
       </div>
    </div>
      <div className="divider"></div>
      <h2 className='font-bold'>Rating:({player.rating})</h2>
      <div className='flex justify-between gap-4 font-black'>
        <h3>{player.battingStyle}</h3>
        <h3>{player.bowlingStyle}</h3>
      </div>
   
    <div className="flex justify-between items-center font-semibold">
        <p>${player.price}</p>
      <button className="btn" onClick={handleChoosePlayer }
           disabled={isSelected ? true : false}
     
        >
        {isSelected === true ? "Selected" : " Choose Player"}</button>
    </div>
  </div>
                                       </div>
        </div>
    );
};

export default Card;
