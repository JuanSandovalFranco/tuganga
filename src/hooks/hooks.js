import { useEffect, useRef, useState } from "react";

export default function Lazyload() {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const Change = (entries, observer) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserverEntry(Change, {
      rootMargin: "100px",
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  });

  return <div ref={elementRef}>{show ? <div>Holiii</div> : null}</div>;
}
