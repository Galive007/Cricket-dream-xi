import React from 'react';

const NewsLetter = () => {
    return (
        <div>
            <div className=" max-w-[1280px] mx-auto border-2 border-white bg-[#ffffff26] rounded-2xl p-4 ">
                <div className="bg-white bg-[url('./assets/bg-shadow.png'))] bg-cover bg-center py-16 px-10 rounded-2xl text-center space-y-3">
                    <h1 className='text-3xl font-bold text-[#131313]'>Subscribe to our Newsletter</h1>
                    <p className='text-[#131313b3] font-medium text-xl'>Get the latest updates and news right in your inbox!</p>
                    <div className=''>
                        <input type="text" placeholder="Enter your email" className="input text-[#131313] bg-white text-xl border-[#13131326] rounded-xl mr-3" />
                        <button className="btn border-none px-6 py-2 font-bold
                rounded-xl border-amber-300
                text-[#131313]
                bg-gradient-to-r from-pink-300  to-yellow-200
                shadow-md"
                        >Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;