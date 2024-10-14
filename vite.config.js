import { defineConfig } from 'vite';
import path from "path";
import react from '@vitejs/plugin-react-swc';
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "./src/components/index.tsx"),
            name: "SimpleUI",
            fileName: "simple-ui",
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
    plugins: [react(), dts({ rollupTypes: true })],
});
