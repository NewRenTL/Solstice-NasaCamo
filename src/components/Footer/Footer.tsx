import React from 'react';
import { Box, Typography, Link, CardContent } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, Button } from '@mui/material';

// MUI theme config
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
  minHeight: '50vh',
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

// Footer Component
const Footer = () => {
  return (
    <ThemeProvider theme={futuristicTheme}>
      <FuturisticContainer>
        
        <Box style={{ display: 'flex', flexDirection: 'row', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', paddingBottom: '16px'}}>
          {/* Contact Info */}
          <HologramCard sx={{ flex: '1 1 400px', maxWidth: '600px' }}>
            <CardContent>
              <GlowingText variant="h6" gutterBottom>
                Card 1
              </GlowingText>
              <Typography align="center" variant="body2" color="textSecondary" paddingBottom="16px">
                Texto 1
              </Typography>
              <AnimatedButton variant="contained" fullWidth>
                Subscribe
              </AnimatedButton>
            </CardContent>
          </HologramCard>

          {/* Social Links */}
          <HologramCard sx={{ flex: '1 1 400px', maxWidth: '600px' }}>
            <CardContent>
              <GlowingText variant="h6" gutterBottom>
                Card 2
              </GlowingText>
              <Typography align="center" variant="body2" color="textSecondary" paddingBottom="16px">
                Texto 2
              </Typography>
              <AnimatedButton variant="contained" fullWidth>
                Subscribe
              </AnimatedButton>
            </CardContent>
          </HologramCard>

          {/* Newsletter Section */}
          <HologramCard sx={{ flex: '1 1 400px', maxWidth: '600px' }}>
            <CardContent>
              <GlowingText variant="h6" gutterBottom>
                Card 3
              </GlowingText>
              <Typography align="center" variant="body2" color="textSecondary" paddingBottom="16px">
                Texto 3
              </Typography>
              <AnimatedButton variant="contained" fullWidth>
                Subscribe
              </AnimatedButton>
            </CardContent>
          </HologramCard>
        </Box>
        <Typography align="center" variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </Typography>
      </FuturisticContainer>
    </ThemeProvider>
  );
};

// Exporting only Footer Component
export default Footer;
