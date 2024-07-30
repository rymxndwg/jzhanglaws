import {getLanguage} from "./language-handler.js"
import { loadLitigationChinese, loadLitigationEnglish } from "./litigation-language.js";

//Set Initial Language
if (getLanguage() == 'English') {
    loadLitigationEnglish();
} else {
    loadLitigationChinese();
}