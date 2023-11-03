import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
export const metadata = {
  title: "Brytzone | Login",
  description: "log into your account",
};
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }, { locale: "fr" }];
}

type LayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default async function LocaleLayout({ children, params: { locale } }: LayoutProps) {
  let messages;
  try {
    messages = (await import(`../../../messages/login/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
