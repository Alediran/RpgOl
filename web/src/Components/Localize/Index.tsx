import LocalizedStrings from 'react-localization';
import enUS from './en-US/Labels.json';
import esAR from './es-AR/Labels.json'

var json = { ...enUS, ...esAR };
const Localize = new LocalizedStrings(json);
export default Localize;