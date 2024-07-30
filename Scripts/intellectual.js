import { loadIntellectualChinese, loadIntellectualEnglish } from "./intellectual-language.js";
import {getLanguage} from "./language-handler.js"

//Set Initial Language
if (getLanguage() == 'English') {
    loadIntellectualEnglish();
} else {
    loadIntellectualChinese();
}