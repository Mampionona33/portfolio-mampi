import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Définissez vos locales autorisées ici
const allowedLocales = ["en", "fr"];

export default getRequestConfig(async ({ locale }) => {
  if (!allowedLocales.includes(locale as string)) {
    notFound();
  }

  try {
    return {
      messages: (await import(`./messages/${locale}.json`)).default,
    };
  } catch (error) {
    return notFound();
  }
});
