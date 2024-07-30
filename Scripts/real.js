import {getLanguage} from "./language-handler.js"
import { loadRealChinese, loadRealEnglish } from "./real-language.js";

//Set Initial Language
if (getLanguage() == 'English') {
    loadRealEnglish();
} else {
    loadRealChinese();
}