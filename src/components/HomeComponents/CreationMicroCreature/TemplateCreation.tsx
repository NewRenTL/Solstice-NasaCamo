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
const sizes: string[] = ['Nano', 'Micro', 'Milli'];

const colorMap: { [key: string]: string } = {
  'Bioluminiscente': '#00FFFF',
  'Criogénico': '#A5F2F3',
  'Plasmático': '#FF00FF',
  'Radiactivo': '#7FFF00',
  'Metálico': '#C0C0C0',
};

// Mapa de imágenes para cada combinación de tipo y color
const imageMap: { [key: string]: string } = {
  'extremophile-Bioluminiscente': '/placeholder.svg?height=300&width=300',
  'extremophile-Criogénico': '/placeholder.svg?height=300&width=300',
  'extremophile-Plasmático': '/placeholder.svg?height=300&width=300',
  'extremophile-Radiactivo': '/placeholder.svg?height=300&width=300',
  'extremophile-Metálico': '/placeholder.svg?height=300&width=300',
  'archaeon-Bioluminiscente': '/placeholder.svg?height=300&width=300',
  'archaeon-Criogénico': '/placeholder.svg?height=300&width=300',
  'archaeon-Plasmático': '/placeholder.svg?height=300&width=300',
  'archaeon-Radiactivo': '/placeholder.svg?height=300&width=300',
  'archaeon-Metálico': '/placeholder.svg?height=300&width=300',
  'tardigrade-Bioluminiscente': '/placeholder.svg?height=300&width=300',
  'tardigrade-Criogénico': '/placeholder.svg?height=300&width=300',
  'tardigrade-Plasmático': '/placeholder.svg?height=300&width=300',
  'tardigrade-Radiactivo': '/placeholder.svg?height=300&width=300',
  'tardigrade-Metálico': '/placeholder.svg?height=300&width=300',
  'alien-Bioluminiscente': '/placeholder.svg?height=300&width=300',
  'alien-Criogénico': '/placeholder.svg?height=300&width=300',
  'alien-Plasmático': '/placeholder.svg?height=300&width=300',
  'alien-Radiactivo': '/placeholder.svg?height=300&width=300',
  'alien-Metálico': '/placeholder.svg?height=300&width=300',
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
  const imageSize = sizeMap[size] || 200;

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
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)',
  },
}));

const MicroCreature: React.FC = () => {
  const [type, setType] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [additionalItem, setAdditionalItem] = useState<string>('');
  const [stars, setStars] = useState<Star[]>([]);

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
            <CardActions>
              <AnimatedButton 
                onClick={handleSubmit} 
                fullWidth 
                variant="contained"
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
    </ThemeProvider>
  );
};

export default MicroCreature;