import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
type LayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" },{ locale: "fr" }];
}

export default async function LocaleLayout({ children, params: { locale } }: LayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/home/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <nav>hello</nav>
          {children}
          <footer>hell-o</footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
