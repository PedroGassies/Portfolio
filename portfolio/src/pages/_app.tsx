import { AppProps } from 'next/app';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  //création state pour définir la couleur 
  return (
    //appeler header ici
    <div className='container'>

    <Component {...pageProps} /> 

    </div> 
    //appeler footer ici 
  );
};

export default MyApp;