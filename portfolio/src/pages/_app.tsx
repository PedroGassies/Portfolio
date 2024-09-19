import { AppProps } from 'next/app';
import '../styles/globals.scss';

export const metadata = {
  title:"Pedro Gassies",
  description: "Portfolio de Pedro Gassies",
}
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