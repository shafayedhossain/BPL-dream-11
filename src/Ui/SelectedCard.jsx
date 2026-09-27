import { FaUser } from "react-icons/fa";

import { MdDelete } from "react-icons/md";

const SelectedCard = ({players, handleDeletePlayers}) => {
    return (
        <div>
             <div className="space-y-4">
             <div className="flex items-center justify-between gap-6 rounded-2xl p-5 border">
                  <div className="flex items-center gap-6">
                    <img src={players.playerImg} alt={players.playerName} className="h-[100px] w-auto rounded" />
                    <div>
                      <h2 className="flex items-center font-semibold gap-2 text-2xl"><FaUser></FaUser>  {players.playerName}</h2>
                      <p>{players.playerType}</p>
                    </div>
                  </div>
                  <button className="btn text-red-500" onClick={()=>handleDeletePlayers(players)}
                  ><MdDelete /></button>
                </div>
                </div>

        </div>
    );
};

export default SelectedCard;