import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import App from './App.tsx'
import { QueryClientProvider } from 'react-query';
import { queryClient } from './api/queryClient';
import theme from './theme';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient} contextSharing>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <App />
          </ThemeProvider>
      </QueryClientProvider>
  </React.StrictMode>,
)
