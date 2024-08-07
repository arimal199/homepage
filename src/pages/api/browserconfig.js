import { getSettings } from "../../utils/config/config";
import themes from "../../utils/styles/themes";

export default function handler(req, res) {
  const settings = getSettings();

  const color = settings.color || "slate";
  const theme = settings.theme || "dark";

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/mstile-150x150.png?v=2"/>
            <TileColor>${themes[color][theme]}</TileColor>
        </tile>
    </msapplication>
</browserconfig>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(xml);
}
