import Navigation from '@/components/Navigation'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from '@/context/AuthContext';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Navigation />

      <Component {...pageProps} />
    </AuthProvider>
    )
}
