import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../../styles/main.scss";
import Image from "next/image";
import logo from "../icon.png";
type LayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }, { locale: "fr" }];
}

export const metadata = {
  title: "Brtyzone",
  description: "our proposed solutions to common digital problems",
};

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
          <main id="layout">
            <nav>
              hello
              <Image src={logo} alt="" />
            </nav>
            <section id="layoutwwww">{children}</section>
            <footer>hell-o</footer>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
