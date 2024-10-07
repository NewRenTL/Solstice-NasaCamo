import React, { useState, useEffect } from 'react';
import { 
  Select, MenuItem, TextField, Button, 
  Card, CardContent, CardActions, Typography, SelectChangeEvent,
  ThemeProvider, createTheme, CssBaseline
} from '@mui/material';
import { styled } from '@mui/system';

// Definición de tipos e interfaces
interface MicroCreatureType {
  value: string;
  label: string;
  description: string;
}

const microCreatureTypes: MicroCreatureType[] = [
  { value: 'extremophile', label: 'Extremophile', description: 'Organisms that thrive in extreme conditions' },
  { value: 'archaeon', label: 'Archaeon', description: 'Unicellular microorganisms similar to bacteria' },
  { value: 'tardigrade', label: 'Tardigrade', description: 'Extremely resilient micro-animals' },
  { value: 'alien', label: 'Alien life form', description: 'Hypothetical extraterrestrial life' },
];

const colors: string[] = ['Bioluminescent', 'Cryogenic', 'Plasmatic', 'Radioactive', 'Metallic'];
const sizes: string[] = ['Nano', 'Micro', 'Mili'];

const colorMap: { [key: string]: string } = {
  'Bioluminescent': '#00FFFF',
  'Cryogenic': '#A5F2F3',
  'Plasmatic': '#FF00FF',
  'Radioactive': '#7FFF00',
  'Metallic': '#C0C0C0',
};

import micro1 from '../../../assets/images/micro1.svg';
import micro2 from '../../../assets/images/micro2.svg'; 
import micro3 from '../../../assets/images/micro3.svg'; 
import micro4 from '../../../assets/images/micro4.svg'; 
import micro5 from '../../../assets/images/micro5.svg'; 
import micro6 from '../../../assets/images/micro6.svg'; 
import micro7 from '../../../assets/images/micro7.svg'; 
import micro8 from '../../../assets/images/micro8.svg'; 
import micro9 from '../../../assets/images/micro9.svg'; 
import micro10 from '../../../assets/images/micro10.svg';
import micro11 from '../../../assets/images/micro11.svg'; 
import micro12 from '../../../assets/images/micro12.svg'; 

const imageMap: { [key: string]: string } = {
  'extremophile-Bioluminescent': micro5,
  'extremophile-Cryogenic': micro1,
  'extremophile-Plasmatic': micro2,
  'extremophile-Radioactive': micro4,
  'extremophile-Metallic': micro3,
  'archaeon-Bioluminescent': micro2,
  'archaeon-Cryogenic': micro2,
  'archaeon-Plasmatic': micro2,
  'archaeon-Radioactive': micro6,
  'archaeon-Metallic': micro7,
  'tardigrade-Bioluminescent': micro8,
  'tardigrade-Cryogenic': micro9,
  'tardigrade-Plasmatic': micro10,
  'tardigrade-Radioactive': micro11,
  'tardigrade-Metallic': micro12,
  'alien-Bioluminescent': micro12,
  'alien-Cryogenic': micro2,
  'alien-Plasmatic': micro8,
  'alien-Radioactive': micro7,
  'alien-Metallic': micro10,
};

interface MicroCreatureImageProps {
  type: string;
  color: string;
  size: string;
}

const MicroCreatureImage: React.FC<MicroCreatureImageProps> = ({ type, color, size }) => {
  const sizeMap: { [key: string]: number } = {
    'Nano': 100,
    'Micro': 200,
    'Mili': 300,
  };

  const imageSrc = imageMap[`${type}-${color}`] || '/placeholder.svg?height=300&width=300';
  const imageSize = sizeMap[size] || 200; // tamaño por defecto

  return (
    <img 
      src={imageSrc} 
      alt={`${type} ${color} MicroCreature`} 
      style={{ 
        width: `${imageSize}px`, 
        height: `${imageSize}px`, 
        objectFit: 'contain',
        filter: `drop-shadow(0 0 10px ${colorMap[color]})`,
      }} 
    />
  );
};

interface Star {
  x: number;
  y: number;
  opacity: number;
}

// Creación de un tema futurista
const futuristicTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00FFFF',
    },
    background: {
      default: '#000000',
      paper: '#0A0A0A',
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'none',
          fontWeight: 'bold',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
        },
      },
    },
  },
});

// Estilos personalizados
const FuturisticContainer = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(to bottom, #000000, #0A0A0A)',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
}));

const GlowingText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
}));

const HologramCard = styled(Card)(({ theme }) => ({
  background: 'rgba(10, 10, 10, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(0, 255, 255, 0.3)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 0 30px rgba(0, 255, 255, 0.4)',
  },
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00FFFF 30%, #00CCFF 90%)',
  padding: '8px 16px', 
  fontSize: '0.875rem', 
  borderRadius: '16px', 
  transition: 'all 0.3s ease-in-out',
  minWidth: '50px', // Reducir el ancho mínimo del botón
  '&:hover': {
    transform: 'scale(1.05)', 
    boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)',
  },
}));

import { useMainContext } from '../../../MainContext';
import PopUpComponent from '../PopUpPlanet/PopUpComponent';

const MicroCreatureComponent: React.FC = () => { // Cambié el nombre aquí
  const [type, setType] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [additionalItem, setAdditionalItem] = useState<string>('');
  const [stars, setStars] = useState<Star[]>([]);

  const {isPopUpVisible, showPopUp, hidePopUp } = useMainContext();

  useEffect(() => {
    const newStars: Star[] = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random(),
    }));
    setStars(newStars);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showPopUp();
    console.log({ type, color, size, additionalItem });
    // Aquí puedes agregar la lógica para manejar la personalización
  };

  return (
    <ThemeProvider theme={futuristicTheme}>
      <CssBaseline />
      <FuturisticContainer>
        {stars.map((star, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: '2px',
              height: '2px',
              borderRadius: '50%',
              backgroundColor: 'white',
              opacity: star.opacity,
            }}
          />
        ))}
        <GlowingText variant="h2" align="center" gutterBottom>
          Micro Creatures Lab
        </GlowingText>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <HologramCard sx={{ flex: '1 1 400px', maxWidth: '600px' }}>
            <CardContent>
              <GlowingText variant="h5" gutterBottom>
                Design by MicroCreature
              </GlowingText>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Create your own micro-alien creature
              </Typography>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Select
                  value={type}
                  onChange={(e: SelectChangeEvent) => setType(e.target.value)}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="" disabled>Select a type</MenuItem>
                  {microCreatureTypes.map((mType) => (
                    <MenuItem key={mType.value} value={mType.value}>{mType.label}</MenuItem>
                  ))}
                </Select>
                {type && (
                  <Typography variant="body2" color="text.secondary">
                    {microCreatureTypes.find(t => t.value === type)?.description}
                  </Typography>
                )}
                <Select
                  value={color}
                  onChange={(e: SelectChangeEvent) => setColor(e.target.value)}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="" disabled>Select a composition</MenuItem>
                  {colors.map((c) => (
                    <MenuItem key={c} value={c}>{c}</MenuItem>
                  ))}
                </Select>
                <Select
                  value={size}
                  onChange={(e: SelectChangeEvent) => setSize(e.target.value)}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="" disabled>Select a scale</MenuItem>
                  {sizes.map((s) => (
                    <MenuItem key={s} value={s}>{s}</MenuItem>
                  ))}
                </Select>
                <TextField
                  value={additionalItem}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAdditionalItem(e.target.value)}
                  placeholder="Ingresa una característica especial"
                  fullWidth
                />
              </form>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <AnimatedButton 
                onClick={handleSubmit} 
                variant="contained"
                style={{ minWidth: '555px' }}
              >
                Synthesize MicroCreature
              </AnimatedButton>
            </CardActions>
          </HologramCard>

          <HologramCard sx={{ flex: '1 1 400px', maxWidth: '600px' }}>
            <CardContent>
              <GlowingText variant="h5" gutterBottom>
                Holographic Visualization
              </GlowingText>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Projection of your MicroCreature
              </Typography>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '300px', 
                backgroundColor: 'rgba(0, 255, 255, 0.05)', 
                borderRadius: '8px', 
                padding: '16px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {type && color && size ? (
                  <div style={{ position: 'relative' }}>
                    <MicroCreatureImage type={type} color={color} size={size} />
                    <div style={{
                      position: 'absolute',
                      inset: '-20%',
                      background: 'radial-gradient(circle, rgba(0,255,255,0.2) 0%, rgba(0,255,255,0) 70%)',
                      animation: 'pulse 4s infinite',
                    }}></div>
                  </div>
                ) : (
                  <Typography style={{ color: '#00FFFF', textAlign: 'center' }}>
                    Select the features to view your MicroCreature
                  </Typography>
                )}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(to right, transparent, #00FFFF, transparent)',
                  animation: 'scan 2s linear infinite',
                }}></div>
              </div>
            </CardContent>
          </HologramCard>
        </div>
      </FuturisticContainer>
      {isPopUpVisible && <PopUpComponent></PopUpComponent>}
    </ThemeProvider>
  );
};

export default MicroCreatureComponent;