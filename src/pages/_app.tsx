import '../globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import LiveScore from '../components/LiveScore';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="fixed w-full h-full flex flex-col">
      <NavBar />
      <LiveScore />
      <Component {...pageProps} />
    </div>
  );
}
