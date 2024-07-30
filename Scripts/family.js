import { loadFamilyChinese, loadFamilyEnglish } from "./family-language.js";
import {getLanguage} from "./language-handler.js"

//Set Initial Language
if (getLanguage() == 'English') {
    loadFamilyEnglish();
} else {
    loadFamilyChinese();
}