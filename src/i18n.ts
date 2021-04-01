import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";
import en from "./translations/en.json";
import hu from "./translations/hu.json";

addMessages("en", en);
addMessages("hu", hu);

init({
	fallbackLocale: "en",
	initialLocale: getLocaleFromNavigator(),
});

export const start = () => {};
