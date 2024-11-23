import './App.css'
import ClubLogo from './components/ClubLogo'
import SocialMediaLinks from './components/SocialMediaLinks'
import injazLogo from './assets/injaz.png'
import { Outlet } from 'react-router-dom'

// import About from './components/About'

function App() {
  // const clubInfos = [ {Name: '@InjazClub', Bio: 'لن_نبرح_حتى_نبلغ#'} ]
  // const clubName = clubInfos[0].Name
  // const clubBio = clubInfos[0].Bio
  return (
    <main className='flex flex-col justify-center'>
      {/* < ClubLogo />
      <SocialMediaLinks /> */}
      <Outlet />
    </main>
  )
}

export default App
