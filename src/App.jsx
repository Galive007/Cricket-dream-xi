import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Loader from './component/Loader'
import AvailablePlayers from './component/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './component/SelectedPlayers/SelectedPlayers'
import AvailableSectionBtn from './component/AvailableSection/AvailableSectionBtn'
import Footer from './component/Footer/Footer'
import { ToastContainer } from 'react-toastify';

const fetchPlayers = async () => {
  const res = await fetch('/player.json')
  return res.json()
}
const playersPromise = fetchPlayers()
function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(1200000)
  const [purchasedPlayer, setPurchasedPlayer] = useState([])

  const removePlayer=(p)=>{
    // console.log(p);
    const filterPlayers=purchasedPlayer.filter(play=>play.id!==p.id)
    // console.log(filterPlayers);
    setPurchasedPlayer(filterPlayers)
    setAvailableBalance(availableBalance+p.player_price)
  }
  
  const updatedPurchasedPlayer=(purchasedPlayer.length);
  // console.log(updatedPurchasedPlayer);
  return (
    <>

      <Navbar availableBalance={availableBalance}></Navbar>

      <AvailableSectionBtn toggle={toggle} setToggle={setToggle} updatedPurchasedPlayer={updatedPurchasedPlayer}></AvailableSectionBtn>

      {/* AvailablePlayers */}

      <div className='mb-[200px]'>
        {
          toggle === true ? <div className='max-w-[1280px] mx-auto'><Suspense fallback={<h4>Loading...</h4>}>
            <AvailablePlayers
              purchasedPlayer={purchasedPlayer}
              setPurchasedPlayer={setPurchasedPlayer}
              playersPromise={playersPromise}
              setAvailableBalance={setAvailableBalance}
              availableBalance={availableBalance}></AvailablePlayers>
          </Suspense></div> : <div className='max-w-[1280px] mx-auto'><Suspense fallback={<h4>Loading...</h4>}><SelectedPlayers
            purchasedPlayer={purchasedPlayer}
            removePlayer={removePlayer}
            setToggle={setToggle}
            toggle={toggle}></SelectedPlayers></Suspense>
          </div>
        }
      </div>




      {/* SelectedPlayers */}

      {/* <NewsLetter></NewsLetter> */}
      {/* footer */}
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
