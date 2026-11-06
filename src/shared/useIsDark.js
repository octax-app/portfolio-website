import { useEffect, useState } from "react";

// Tracks the `dark` class on <html> so components can swap themed assets.
export default function useIsDark() {
  const get = () => document.documentElement.classList.contains("dark");
  const [isDark, setIsDark] = useState(get);

  useEffect(() => {
    const obs = new MutationObserver(() => setIsDark(get()));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  return isDark;
}
