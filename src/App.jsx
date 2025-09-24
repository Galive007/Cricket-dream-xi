import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Loader from './component/Loader'
import AvailablePlayers from './component/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './component/SelectedPlayers/SelectedPlayers'
import AvailableSectionBtn from './component/AvailableSection/AvailableSectionBtn'
import NewsLetter from './component/NewsLetterSection/NewsLetter'

import footerImg from './assets/logo-footer.png'

const fetchPlayers = async () => {
  const res = await fetch('/player.json')
  return res.json()
}
const playersPromise = fetchPlayers()
function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(1200000)
  return (
    <>

      <Navbar availableBalance={availableBalance}></Navbar>

      <AvailableSectionBtn toggle={toggle} setToggle={setToggle}></AvailableSectionBtn>

      {/* AvailablePlayers */}

      <div className='mb-[200px]'>
        {
        toggle === true ? <div className='max-w-[1280px] mx-auto'><Suspense fallback={<h4>Loading...</h4>}>
          <AvailablePlayers
            playersPromise={playersPromise}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}></AvailablePlayers>
        </Suspense></div> : <div className='max-w-[1280px] mx-auto'><Suspense fallback={<h4>Loading...</h4>}><SelectedPlayers></SelectedPlayers></Suspense>
        </div>
      }
      </div>




      {/* SelectedPlayers */}
      {/* Subscribe to our Newsletter */}

      {/* footer */}
      <footer className='bg-[#06091A]'>
        <div className='max-w-[1280px] relative mx-auto  space-y-3 '>
          <div className='absolute w-full top-[-150px]'>
            <NewsLetter></NewsLetter>
          </div>
          <div className='pt-[170px]'>
            <div className='flex justify-center items-center'>
              <img src={footerImg} alt="" />
            </div>
            <div className="footer md:footer-horizontal justify-between text-neutral-content p-10">
              <nav>
                <h6 className="text-white font-semibold text-[18px]">About Us</h6>
                <p className='text-[#ffffff99] w-[350px]'>We are a passionate team dedicated to providing the best services to our customers.</p>
              </nav>
              <nav className='space-y-2'>
                <h6 className="text-white font-semibold text-[18px]">Quick Links</h6>
                <ul className='list-disc space-y-2'>
                  <li className='ml-5'><a className="link link-hover">Home</a>
                  </li>
                  <li className='ml-5'><a className="link link-hover">Services</a>
                  </li>
                  <li className='ml-5'><a className="link link-hover">About</a>
                  </li>
                  <li className='ml-5'><a className="link link-hover">Contact</a>
                  </li>

                </ul>
              </nav>
              <nav className='space-y-2'>
                <h6 className="text-white font-semibold text-[18px]">Subscribe</h6>
                <p className='text-[#ffffff99]'>Subscribe to our newsletter for the latest updates.</p>
                <div className='flex'>
                  <input type="text" placeholder="Enter your email" className="px-6 py-2  text-[#131313] bg-white text-xl border-[#13131326] rounded-l-xl border-r-0 sm:w-auto" />
                  <button className=" border-l-0 px-6 py-2 font-bold
                rounded-r-xl border-amber-300
                text-[#131313]
                bg-gradient-to-r from-pink-300  to-yellow-200
                shadow-md"
                  >Subscribe
                  </button>
                </div>
              </nav>
            </div>
          </div>

        </div>
        <div className="footer bg-[#06091A] sm:footer-horizontal footer-center  text-[#ffffff99] p-4">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
          </aside>
        </div>
      </footer>
    </>
  )
}

export default App
