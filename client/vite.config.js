import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindess from "@tailwindcss/vite";
export default defineConfig({
plugins: [react(), tailwindess()],
});