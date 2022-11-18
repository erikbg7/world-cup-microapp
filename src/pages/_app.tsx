import React from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NavBar from '../components/NavBar';
import LiveScore from '../components/LiveScore';
import '../globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div className="fixed w-full h-full flex flex-col">
        <NavBar />
        <div className="w-full flex-1 flex flex-col overflow-auto">
          <LiveScore />
          <Component {...pageProps} />
        </div>
      </div>
    </QueryClientProvider>
  );
}
