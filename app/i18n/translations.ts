import { en } from "./locales/en";
import { ar } from "./locales/ar";

export type Locale = "en" | "ar";

export const translations = {
  en,
  ar,
};

export type TranslationType = typeof en;
export { en, ar };
