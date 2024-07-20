import { useEffect } from "react";

export default function BrowserConfig() {
  useEffect(() => {
    window.location = "/api/browserconfig";
  }, []);

  return null;
}
