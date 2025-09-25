// import React, { useEffect } from 'react';

const AvailableSectionBtn = ({toggle,setToggle,updatedPurchasedPlayer}) => {
    // console.log(newData);
    // useEffect(()=>{
    //   if (updatedPurchasedPlayer > 6) {
    //   alert("No more than 6 players allowed!");
    // }
    // },[updatedPurchasedPlayer])
    return (
        <div className='max-w-[1280px] mx-auto flex justify-between items-center my-4'>
                <h3 className='text-2xl font-bold'>{toggle?'Available Players':`Selected (${updatedPurchasedPlayer}/6)`}</h3>
                <div>
                  <button className={`btn px-8 border-r-0 rounded-l-2xl py-2 ${toggle?'bg-[#E7FE29]':''}`} onClick={()=>setToggle(true)}>Available</button>
                  <button className={`btn px-8 border-l-0 rounded-r-2xl py-2 ${toggle?'':'bg-[#E7FE29]'}`} onClick={()=>setToggle(false)}>Selected<span>({updatedPurchasedPlayer})</span></button>
                </div>
              </div>
    );
};

export default AvailableSectionBtn;