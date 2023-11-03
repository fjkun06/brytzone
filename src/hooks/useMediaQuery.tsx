/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
// interface MediaProps {
/**
 * @param {string} query - Your media query.
 *
 *@example
 * //returns true if the width is greater than 480px
 * const min480 = useMediaQuery("(width > 480px)")
 * */

// query: string;
// }
const useMediaQuery = (query: string) => {
  const [state, setState] = React.useState<boolean>(false);

  //detecting clientOS theme
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia(query).matches) {
        setState(true);
      } else {
        setState(false);
      }

      window.matchMedia(query).addEventListener("change", (e) => {
        if (e.matches) {
          setState(true);
        } else {
          setState(false);
        }
      });
    }
  }, []);

  return state;
};

export default useMediaQuery;
