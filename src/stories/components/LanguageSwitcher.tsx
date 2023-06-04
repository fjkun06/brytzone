import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";
const LanguageSwitcher = ({ locale }: { locale: string }) => {
  const path = useSelectedLayoutSegment();
  // console.log(path);
  
  // change just the locale and maintain all other route information including href's query

  const handleSwitches = (route: string) => {
    // router.push({ pathname, query }, asPath, { locale: route });
  };
  return (
    <span className="" onClick={() => handleSwitches(locale)}>
      {locale}
    </span>
  );
};

export default LanguageSwitcher;
