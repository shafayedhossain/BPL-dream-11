

import Card from '../Ui/Card';

const Available = ({players , setCoin, coin, selectedPlayer, setSelectedPlayer}) => {

  
  console.log(players , "players")
    return (

        <div className='container mx-auto'>

                {/* Grid  */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 space-y-4'>
               {
                 players.map(player =>{
                  
                     return <h2>{
                                <Card player = {player} setCoin={setCoin} coin = {coin} selectedPlayer ={selectedPlayer} setSelectedPlayer = {setSelectedPlayer}></Card>    
                        
                        }</h2>
                 })
             }
          </div>

            

        </div>
    );
};

export default Available;