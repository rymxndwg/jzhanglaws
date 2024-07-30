import { loadImmigrationChinese, loadImmigrationEnglish } from "./immigration-language.js";
import {getLanguage} from "./language-handler.js"

//Set Initial Language
if (getLanguage() == 'English') {
    loadImmigrationEnglish();
} else {
    loadImmigrationChinese();
}