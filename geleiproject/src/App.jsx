import HomePage from "./Components/HomePage"
import NavBar from "./Components/NavBar"
import PageEight from "./Components/PageEight"
import PageEleven from "./Components/PageEleven"
import PageFive from "./Components/PageFive"
import PageFour from "./Components/PageFour"
import PageNine from "./Components/PageNine"
import PageSeven from "./Components/PageSeven"
import PageSix from "./Components/PageSix"
import PageTen from "./Components/PageTen"
import PageThree from "./Components/PageThree"
import PageTwelve from "./Components/PageTwelve"
import PageTwo from "./Components/PageTwo"

function App() {
  return (
    <>
     <NavBar />
    <HomePage/>
    <PageTwo/>
    <PageThree/>
    <PageFour/>
    <PageFive/>
    <PageSix/>
   <PageSeven/>
   <PageEight/>
     <PageNine/>
    <PageTen/>
    <div className="snap-y snap-mandatory overflow-scroll h-[100vh] no-scrollbar">
    <PageEleven /> 
    <PageTwelve/>
    </div>
    </>
  )
}

export default App
