import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
    build: {
        outDir: "build",
    },
    server: {
        port:3000
      },
    plugins: [
        reactRefresh(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
                
                //...svgr options(http://react-svgr.com/docs/options/)
            },
        }),
    ],
})
