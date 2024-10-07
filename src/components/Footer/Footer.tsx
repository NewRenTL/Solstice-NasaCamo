import React from 'react';
import { Box, Typography, Link, CardContent } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                {/* LinkedIn Icon */}
                <LinkedInIcon style={{ color: '#00FFFF' }} />
                <GlowingText variant="h5" align='left'>
                  LinkedIn
                </GlowingText>  
              </div>
              <Typography align="center" variant="body2" color="textSecondary" paddingBottom="16px">
                Puedes contactarnos a través de nuestros perfiles de LinkedIn
              </Typography>
              {/* List of LinkedIn Links */}
              <Box display="flex" flexDirection="column" gap="8px" alignItems="center">
                <Link href="https://www.linkedin.com/in/dbp0229" target="_blank" color="primary" style={{ fontSize: '15px' }}>
                  Diego Bustamante Palomino
                </Link>
                <Link href="https://www.linkedin.com/in/lucia-giulliana-tello-le%C3%B3n-b8288120b/" target="_blank" color="primary" style={{ fontSize: '15px' }}>
                  Lucía Tello
                </Link>
                <Link href="https://www.linkedin.com/in/jose-tello-leon" target="_blank" color="primary" style={{ fontSize: '15px' }}>
                  José Tello
                </Link>
                <Link href="https://www.linkedin.com/in/valeriaaliagaflores" target="_blank" color="primary" style={{ fontSize: '15px' }}>
                  Valeria Aliaga Flores
                </Link>
                <Link href="https://www.linkedin.com/in/fabiana-castro-426438252" target="_blank" color="primary" style={{ fontSize: '15px' }}>
                  Fabiana Castro
                </Link>
                <Link href="http://linkedin.com/in/josue-hallasi-349a9a248" target="_blank" color="primary" style={{ fontSize: '15px' }}>
                  Josué Hallasi
                </Link>
              </Box>
            </CardContent>
          </HologramCard>

          {/* Additional Information */}
          <HologramCard sx={{ flex: '1 1 400px', maxWidth: '600px' }}>
            <CardContent>
              <GlowingText variant="h6" align="center" gutterBottom>
                Acerca del Proyecto
              </GlowingText>
              <Typography align="center" variant="body2" color="textSecondary" paddingBottom="16px">
                Este proyecto fue diseñado para el NASA International Space Apps Challenge 2024
              </Typography>
              <AnimatedButton 
                variant="contained" 
                fullWidth 
                onClick={() => window.open("https://www.spaceappschallenge.org/", "_blank")}
              >
                Learn More
              </AnimatedButton>
            </CardContent>
          </HologramCard>
        </Box>
        <Typography align="center" variant="body2" color="textSecondary">
           {new Date().getFullYear()}  NASA International Space Apps Challenge 
        </Typography>
      </FuturisticContainer>
    </ThemeProvider>
  );
};
// Exporting only Footer Component
export default Footer;
