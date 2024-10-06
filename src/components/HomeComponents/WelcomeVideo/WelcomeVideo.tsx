import { 
  Select, MenuItem, TextField, Button, 
  Card, CardContent, CardActions, Typography, SelectChangeEvent,
  ThemeProvider, createTheme, CssBaseline
} from '@mui/material';
import { styled } from '@mui/system';

const AnimatedButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00FFFF 30%, #00CCFF 90%)',
  color:'#000000',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)',
  },
}));

const WelcomeVideo = () => {
  return (
    <section className="flex flex-col items-center pt-14 px-10 justify-center min-h-lvh bg-[url('/img/BackgrounTest.jpg')]">
      {/* Title */}
      <h1 className="text-8xl md:text-8xl font-light text-white mb-4 text-center">
        Oceanis
      </h1>
      {/* Description */}
      <p className="text-lg md:text-xl text-gray-400 mb-6 text-center max-w-2xl">
        Texto de descripción
      </p>
      {/* Video */}
      <div className="w-full md:w-3/4 lg:w-1/2 mb-8 bg-transparent h-64 md:h-80 lg:h-96 p-0 rounded-md">
        <div className="w-full h-full flex items-center justify-center p-0 m-0">
          <iframe
            className="w-full h-full rounded-md"
            src="https://www.youtube.com/embed/lHyytCK6ODg?si=FV4sYwJo0AGX-LWS" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Button */}
      <AnimatedButton>
        Comencemos!
      </AnimatedButton>
    </section>
  );
}

export default WelcomeVideo