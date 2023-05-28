import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
export const metadata = {
  title: "Home",
  description: "Welcome to NextJS",
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
    messages = (await import(`../../../messages/dashboard/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
  );
}

