// import React, { useState } from 'react';

import SelectedPlayerCard from './SelectedPlayerCard';
import Player from '../Player/Player';
const SelectedPlayers = ({ purchasedPlayer,removePlayer,setToggle }) => {
    // const [clicked,setClicked]=useState(false)
    // console.log(purchasedPlayer);
    const handleClick=()=>{
        setToggle(true);
        // setClicked(true)
    }
    return (
        <>
        {
            purchasedPlayer.map(player=><SelectedPlayerCard
                key={player.id}
                player={player}
                removePlayer={removePlayer}
            ></SelectedPlayerCard>)
        }
        {/* ${clicked?'':''} */}
        <button className={`btn px-8 border-1 rounded-2xl hover:bg-[#E7FE29] py-2 `} onClick={handleClick}>Add More</button>
        </>
        
    )
};

export default SelectedPlayers;