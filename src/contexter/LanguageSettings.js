import React from "react";
import language_settings from "../resources/language_settings.json";

function LanguageSettings(language) {
    return language_settings[language];
}

export { LanguageSettings };
