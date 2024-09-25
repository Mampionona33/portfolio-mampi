import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Définissez vos locales autorisées ici
const allowedLocales = ["en", "fr"];

export default getRequestConfig(async ({ locale }) => {
  // Vérifiez si la locale actuelle est dans la liste des locales autorisées
  if (!allowedLocales.includes(locale as string)) {
    notFound();
  }
  try {
    const response = await import(`./messages/${locale}.json`);
    return response.default;
  } catch (error) {
    return notFound();
  }
});
