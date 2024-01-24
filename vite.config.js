import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/sonu-the-sassy-boy",
    plugins: [react()],
});
