import { useEffect } from "react";

export function KitSignup() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://intelligent-theft.kit.com/1a3191a7e2/index.js";
    script.async = true;
    script.dataset.uid = "1a3191a7e2";

    const container = document.getElementById("kit-signup-root");
    if (container) {
      container.appendChild(script);
    }

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="max-w-md mx-auto">
      <p className="text-sm uppercase tracking-wider text-primary font-bold mb-4">
        Get Early Access
      </p>
      <div id="kit-signup-root" />
      <p className="text-xs text-muted-foreground mt-4">
        We'll notify you when we launch. No spam, no BS.
      </p>
    </div>
  );
}
