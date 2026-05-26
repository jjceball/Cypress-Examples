import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const settingsPath = path.join(repoRoot, ".vscode", "settings.json");

const mode = process.argv[2];

if (mode !== "on" && mode !== "off") {
  console.error("Usage: node scripts/toggle-practice-intellisense.mjs <on|off>");
  process.exit(1);
}

const offSettings = {
  "// Practice mode": "IntelliSense is OFF. Run: npm run practice:hints-on",
  "editor.quickSuggestions": {
    other: "off",
    comments: "off",
    strings: "off",
  },
  "editor.suggestOnTriggerCharacters": false,
  "editor.wordBasedSuggestions": "off",
  "editor.parameterHints.enabled": false,
  "editor.suggest.showWords": false,
  "editor.suggest.showSnippets": false,
  "editor.snippetSuggestions": "none",
  "editor.acceptSuggestionOnEnter": "off",
  "editor.inlineSuggest.enabled": false,
  "typescript.suggest.enabled": false,
  "typescript.suggest.autoImports": false,
  "javascript.suggest.enabled": false,
};

const onSettings = {
  "// Practice mode": "IntelliSense is ON. Run: npm run practice:hints-off",
};

fs.mkdirSync(path.dirname(settingsPath), { recursive: true });
fs.writeFileSync(
  settingsPath,
  `${JSON.stringify(mode === "off" ? offSettings : onSettings, null, 2)}\n`
);

console.log(
  mode === "off"
    ? "Practice IntelliSense disabled. Reload the Cursor window if suggestions still appear."
    : "Practice IntelliSense enabled. Reload the Cursor window if needed."
);
