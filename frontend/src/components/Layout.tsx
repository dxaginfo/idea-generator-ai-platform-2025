import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useAppSelector } from '../hooks/reduxHooks';

const Layout: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  
  // Full width for home and auth pages, constrained width with sidebar for dashboard
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Navbar />
      
      {isAuthenticated && !isHomePage && !isAuthPage && <Sidebar />}
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: '64px', // Height of the navbar
          marginLeft: isAuthenticated && !isHomePage && !isAuthPage ? '240px' : 0,
          transition: 'margin 0.2s ease-in-out',
        }}
      >
        {isHomePage || isAuthPage ? (
          <Outlet />
        ) : (
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <Outlet />
          </Container>
        )}
      </Box>
    </Box>
  );
};

export default Layout;