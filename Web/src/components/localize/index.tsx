import LocalizedStrings from 'react-localization';
import enUS from './en-US/labels.json';

var json = { ...enUS };
const Localize = new LocalizedStrings(json);
export default Localize;
