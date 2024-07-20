import { useEffect } from "react";

export default function Webmanifest() {
  useEffect(() => {
    window.location = "/api/manifest";
  }, []);

  return null;
}
