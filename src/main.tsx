import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import App from './App.tsx'
import { QueryClientProvider } from 'react-query';
import { queryClient } from './api/queryClient';
import theme from './theme';
import './index.css'
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

persistQueryClient({
  queryClient,
  persister: createSyncStoragePersister({ storage: window.localStorage })
})

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
