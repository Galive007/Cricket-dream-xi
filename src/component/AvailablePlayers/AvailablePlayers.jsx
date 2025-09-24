import React, { use } from 'react';

import Player from '../Player/Player';

const AvailablePlayers = ({ playersPromise,setAvailableBalance,availableBalance }) => {
    const availablePlayers = use(playersPromise)
    // console.log(availablePlayers);
    
    return (

        <div className=' grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                availablePlayers.map((player)=> <Player key={player.id} player={player} setAvailableBalance={setAvailableBalance}
                availableBalance={availableBalance}></Player>)
            }
            
            
        </div>

    );
};

export default AvailablePlayers;