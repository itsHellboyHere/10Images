import React from 'react';
import ReactDOM from 'react-dom/client';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import App from './App';
import './index.css';

import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { AppProvider } from './context';

const queryClient=new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
 <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false}/>
      
    </QueryClientProvider>
  </AppProvider>
);
