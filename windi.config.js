import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

export default defineConfig({
  darkMode: "class",
  safelist: "p-3 p-4 p-5",
  extract: {
    include: ["src/**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
  theme: {
    extend: {
      colors: {
        bootstrap_primary: "#0d6efd",
        bootstrap_secondary: "#6c757d",
        bootstrap_success: "#198754",
        bootstrap_danger: "#dc3545",
        bootstrap_info: "#0dcaf0",
      },
    },
  },
  plugins: [formsPlugin],
});
