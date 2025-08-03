import Blog from "../components/Blog"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MyProjects from "../components/MyProjects"
import Skills from "../components/Skills"
import WhoiAM from "../components/WhoiAM"


function Home() {
  return (
    <div>
      <Header/>
      <WhoiAM/>
      <Education/>
      <Skills/>
      <Experience/>
      <MyProjects/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Home
