"use client"

import React, { useState, useEffect } from 'react';
import { 
  Select, MenuItem, TextField, Button, 
  Card, CardContent, CardActions, Typography, SelectChangeEvent,
  ThemeProvider, createTheme, CssBaseline
} from '@mui/material';
import { styled } from '@mui/system';

const AnimatedButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00FFFF 30%, #00CCFF 90%)',
  color: '#000000',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)',
  },
}));

const FuturisticContainer = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(to bottom, #000000, #0A0A0A)',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
}));

const StarryBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
}));

const ContentContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '100vh',
  padding: theme.spacing(4, 2),
}));

const VideoContainer = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  marginBottom: theme.spacing(4),
}));

const Star = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '2px',
  height: '2px',
  borderRadius: '50%',
  backgroundColor: 'white',
}));

const OceanisTitle = styled(Typography)(({ theme }) => ({
  fontSize: '65px',
  fontWeight: 700,
  color: 'transparent',
  background: 'linear-gradient(45deg, #00FFFF, #00CCFF)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
  marginBottom: theme.spacing(10),
  marginTop: theme.spacing(10),
  letterSpacing: '0.1em',
  textAlign: 'center',
  fontFamily: '"Orbitron", sans-serif',
  textTransform: 'uppercase',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #00FFFF, transparent)',
  },
  '@media (max-width: 1200px)': {
    fontSize: '8rem',
  },
  '@media (max-width: 900px)': {
    fontSize: '6rem',
  },
  '@media (max-width: 600px)': {
    fontSize: '4rem',
  },
}));

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
});

const WelcomeVideo: React.FC = () => {
  const [stars, setStars] = useState<Array<{ x: number; y: number; opacity: number }>>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random(),
    }));
    setStars(newStars);
  }, []);

  return (
    <ThemeProvider theme={futuristicTheme}>
      <CssBaseline />
      <FuturisticContainer>
        <StarryBackground>
          {stars.map((star, index) => (
            <Star
              key={index}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                opacity: star.opacity,
              }}
            />
          ))}
        </StarryBackground>
        <ContentContainer>
          <div>
            <OceanisTitle variant="h1">
              Zaphir-o
            </OceanisTitle>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Texto de descripción
            </Typography>
          </div>
          <VideoContainer>
            <Card>
              <CardContent style={{ padding: 0 }}>
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/lHyytCK6ODg?si=FV4sYwJo0AGX-LWS"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </CardContent>
            </Card>
          </VideoContainer>
          <AnimatedButton variant="contained" size="large">
            Comencemos!
          </AnimatedButton>
        </ContentContainer>
      </FuturisticContainer>
    </ThemeProvider>
  );
}

export default WelcomeVideo;