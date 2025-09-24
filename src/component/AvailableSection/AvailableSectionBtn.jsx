import React from 'react';

const AvailableSectionBtn = ({toggle,setToggle}) => {
    return (
        <div className='max-w-[1280px] mx-auto flex justify-between items-center my-4'>
                <h3 className='text-2xl font-bold'>Available Players</h3>
                <div>
                  <button className={`btn px-8 border-r-0 rounded-l-2xl py-2 ${toggle?'bg-[#E7FE29]':''}`} onClick={()=>setToggle(true)}>Available</button>
                  <button className={`btn px-8 border-l-0 rounded-r-2xl py-2 ${toggle?'':'bg-[#E7FE29]'}`} onClick={()=>setToggle(false)}>Selected<span>(0)</span></button>
                </div>
              </div>
    );
};

export default AvailableSectionBtn;