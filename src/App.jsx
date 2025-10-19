
import './App.css'
import AddOnes from './components/AddOnes/AddOnes'
import AppScreenshot from './components/AppScreenshoot/AppScreenshot'
import Benefit from './components/Benefit/Benefit'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Video from './components/Video/Video'

function App() {

  return (
    <>
      <Home></Home>
      <Benefit></Benefit>
      <AppScreenshot></AppScreenshot>
      <HowItWorks></HowItWorks>
      <AddOnes></AddOnes>
      {/* <Video></Video> */}
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
