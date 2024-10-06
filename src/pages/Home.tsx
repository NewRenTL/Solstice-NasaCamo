import TemplateCreation from "../components/HomeComponents/CreationMicroCreature/TemplateCreation"
import WelcomeVideo from "../components/HomeComponents/WelcomeVideo/WelcomeVideo"



const Home  = () => {
  return (
    <div className='flex flex-col w-full bg-red-100'>
        <WelcomeVideo></WelcomeVideo>
        <TemplateCreation></TemplateCreation>
    </div>
  )
}

export default Home