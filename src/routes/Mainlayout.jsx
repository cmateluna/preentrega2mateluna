import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Outlet} from 'react-router-dom';
import {StyledEngineProvider, ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from "@mui/material/Container";
import NavBar from "../components/NavBar/Navbar";
import imgLogo from '../components/NavBar/images/logo.png';
import Footer from "../components/Footer/Footer";


const siteTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: '#ff7961',
            main: '#0f314e',
            dark: '#ba000d',
            contrastText: '#000000',
            
        },
        secondary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#FFFFFF',
        }
    }
});

const siteInfo = {
    "name": "Los Acantos",
    "logo": [imgLogo]
};

const menuItems = [
    {
        name: 'Inicio',
        path: '/'
    }
    ,
    {
        name: 'Musica Rock',
        path: '/category/1'
    },
    {
        name: 'Vinilos',
        path: '/category/2'
    },
    {
        name: 'Poleras',
        path: '/category/3'
    },
    {
        name: 'Contacto',
        path: '/contactus'
    }
];

const MainLayout = () => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={siteTheme}>
                <CssBaseline />
                <header>
                    <NavBar
                        title={siteInfo.name}
                        logo={siteInfo.logo}
                        menuItems={menuItems}
                    />
                </header>
                <Container maxWidth="xl">
                    <Outlet />
                </Container>
                <Footer />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}
export default MainLayout
