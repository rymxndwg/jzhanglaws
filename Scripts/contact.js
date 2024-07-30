import { loadContactChinese, loadContactEnglish } from "./contact-language.js";
import {getLanguage} from "./language-handler.js"

//Set Initial Language
if (getLanguage() == 'English') {
    loadContactEnglish();
} else {
    loadContactChinese();
}