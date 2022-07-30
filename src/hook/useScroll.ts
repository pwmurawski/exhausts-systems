import { useEffect, useRef } from "react";
import useStateStorage from "./useStateStorage";

const useScroll = (): [
  bodyRef: typeof bodyRef,
  scrollHandler: typeof scrollHandler
] => {
  const bodyRef = useRef<HTMLTableSectionElement>(null);
  const [scroll, setScroll] = useStateStorage(
    "scrollOfferTable",
    "sessionStorage",
    0
  );

  const scrollHandler = (
    e: React.UIEvent<HTMLTableSectionElement, UIEvent>
  ) => {
    setScroll(e.currentTarget.scrollTop);
  };

  useEffect(() => {
    bodyRef.current?.scroll({ top: scroll });
  }, []);

  return [bodyRef, scrollHandler];
};

export default useScroll;
