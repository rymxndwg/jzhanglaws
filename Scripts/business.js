import { loadBusinessChinese, loadBusinessEnglish } from "./business-language.js";
import {getLanguage} from "./language-handler.js"

//Set Initial Language
if (getLanguage() == 'English') {
    loadBusinessEnglish();
} else {
    loadBusinessChinese();
}