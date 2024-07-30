import {getLanguage} from "./language-handler.js"
import { loadTeamChinese, loadTeamEnglish } from "./team-language.js";

//Set Initial Language
if (getLanguage() == 'English') {
    loadTeamEnglish();
} else {
    loadTeamChinese();
}