import TemplateCreation from "../components/HomeComponents/CreationMicroCreature/TemplateCreation"
import WelcomeVideo from "../components/HomeComponents/WelcomeVideo/WelcomeVideo"
import Footer from "../components/Footer/Footer.tsx"
import VRPreview from "../components/HomeComponents/Preview/VRPreview.tsx"


const Home  = () => {
  return (
    <div className="flex flex-col w-full bg-red-100">
        <WelcomeVideo></WelcomeVideo>
        <TemplateCreation></TemplateCreation>
        <VRPreview></VRPreview>
        <Footer></Footer>
    </div>
  )
}

export default Home