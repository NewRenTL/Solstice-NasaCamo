"use client"

import React, { useState, useEffect } from 'react';
import { 
  Button, Card, CardContent, Typography, ThemeProvider, createTheme, CssBaseline
} from '@mui/material';
import { styled } from '@mui/system';

const FuturisticContainer = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(to bottom, #000000, #000000)',
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
  justifyContent: 'center',
  minHeight: '100vh',
  padding: theme.spacing(2),
}));

const VideoContainer = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  marginBottom: theme.spacing(4),
}));

const TechText = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#00FFFF',
  textShadow: '0 0 10px rgba(0, 255, 255, 0.7)',
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  fontFamily: '"Orbitron", sans-serif',
  letterSpacing: '0.1em',
}));

const VRAnimation = styled('div')(({ theme }) => ({
  width: '100px',
  height: '100px',
  position: 'relative',
  marginTop: theme.spacing(4),
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #00FFFF',
    borderRadius: '50%',
  },
  '&::before': {
    width: '80px',
    height: '40px',
    borderBottom: 'none',
    animation: 'vrRotate 4s linear infinite',
  },
  '&::after': {
    width: '90px',
    height: '90px',
    border: '2px solid rgba(0, 255, 255, 0.3)',
  },
}));

const Star = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '2px',
  height: '2px',
  borderRadius: '50%',
  backgroundColor: 'white',
}));

const futuristicTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00FFFF',
    },
    background: {
      default: '#000000',
      paper: '#000000',
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const VRPreview: React.FC = () => {
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
          <VideoContainer>
            <Card>
            <CardContent style={{ padding: 0 }}>
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/NgmckFocJX4?si=NrianCmMcXENAqN1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </CardContent>
            </Card>
          </VideoContainer>
          <TechText variant="h2">
            Coming soon to VR...
          </TechText>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            Embark on an immersive experience like no other.
          </Typography>
          <Button 
            variant="outlined" 
            color="primary" 
            size="large"
            style={{ 
              borderColor: '#00FFFF', 
              color: '#00FFFF',
              marginTop: '20px',
            }}
          >
            Learn More
          </Button>
          <VRAnimation />
        </ContentContainer>
      </FuturisticContainer>
      <style >{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(0, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0); }
        }
        @keyframes vrRotate {
          0% { transform: translate(-50%, -50%) rotateX(0deg); }
          100% { transform: translate(-50%, -50%) rotateX(360deg); }
        }
      `}</style>
    </ThemeProvider>
  );
}

export default VRPreview;