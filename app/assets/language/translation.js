import language from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';


language.use(initReactI18next).init({
   lng:'en',
   fallbackLng:'en',
   resources:{
     en:en,  
   },
   interpolation:{
       escapeValue:false
   }
});

export default language;