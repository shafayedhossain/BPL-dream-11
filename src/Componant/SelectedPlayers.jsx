import Players from "./Players";

import SelectedCard from "../Ui/SelectedCard";

const SelectedPlayers = ({selectedPlayer, setSelectedPlayer,setCoin, coin}) => {
    console.log(selectedPlayer, "selectedPlayer");

    const handleDeletePlayers =(player) =>{
          console.log(player, "players");
          const filterPlayer = selectedPlayer.filter(
            (selectedPlayer) =>selectedPlayer.playerName !== player.playerName,
          );
          console.log(filterPlayer, "filterPlayer");
          setSelectedPlayer(filterPlayer)
          setCoin(coin + player.price)
    };
    return (
        <div className="space-y-4">
           {selectedPlayer.length === 0 ? 
           <div className="h-[400px] flex items-center justify-center gap-4 flex-col">
                    <h2 className="font-semibold text-2xl">No player selected yet </h2>
                    <p>Go to the available tag to select player</p>
           </div>
           : selectedPlayer.map((players, ind) => {  
              return(
               <SelectedCard key={ind} players = {players} handleDeletePlayers ={handleDeletePlayers}/>

              );
           })
        }
        </div>
    );
};

export default SelectedPlayers;