import { LANGUAGES } from "../constants/language";

const getLanguageFlag = (code: string) => {
    const language = LANGUAGES.find(lang => lang.code === code);
    return language ? language.flag_url : null;
}

export { getLanguageFlag };