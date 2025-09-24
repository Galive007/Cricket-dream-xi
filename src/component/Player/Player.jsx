import React, { useState } from 'react';
import cardIcon from '../../assets/user 1.svg'
import cardIcon2 from '../../assets/report 1.svg'



const Player = ({player,setAvailableBalance,availableBalance}) => {
    const [isSelected, setIsSelected] = useState(false)
    return (
        <div className="card bg-base-100 shadow-sm p-4">
            <figure>
                <img className='w-full h-[500px] object-cover'
                    src={player.player_image}
                    alt="Shoes" />
            </figure>
            <div className="mt-3">
                <div className='flex items-center gap-2'>
                    <img src={cardIcon} alt="" />
                    <h2 className="card-title">{player.player_name}</h2>
                </div>
                <div className='flex justify-between items-center border-b-1 border-gray-200 pb-3 mt-2'>
                    <div className='flex items-center gap-2'>
                        <img className='#131313' src={cardIcon2} alt="" />
                        <span className='text-[#131313b3]'>{player.player_country}</span>
                    </div>
                    <button className='btn rounded-2xl'>{player.player_role}</button>
                </div>
                <div className='space-y-2'>
                    <div className='flex justify-between items-center '>
                        <h4 className='text-[#131313] font-bold'>Rating</h4>
                        <span className='text-[#131313b3]'>{player.rating}</span>
                    </div>
                    <div className='flex justify-between items-center '>
                        <h4 className='text-[#131313] font-bold'>{player.batting_style}</h4>
                        <span className='text-[#131313b3]'>{player.bowling_style}</span>
                    </div>
                    <div className="card-actions justify-between items-center">
                        <span className='text-[#131313] font-bold'>Price:${player.player_price}</span>
                        <button disabled={isSelected} onClick={() => {
                            if(availableBalance<30000){
                                alert('Not Enough Funds')
                                return
                            }
                            if(availableBalance<player.player_price){
                                alert('You Do Not Have Enough Money' )
                                return
                            }
                            setIsSelected(true)
                            setAvailableBalance(availableBalance-player.player_price)
                        }} className="btn ">{isSelected ? 'Selected' : 'Choose Player'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;