import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../../styles/main.scss";

import "../../utils/fonts";
import SubLayout from "./sublayout";
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
  title: "Brytzone",
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
          <SubLayout>
            <section id="brytzone_children_layout">{children}</section>
          </SubLayout>

          {/* </SubLayout> */}
          {/* <main id="layout">
        
          </main> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
