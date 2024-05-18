import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "./",
    resolve: {
        extensions: [".js", ".jsx", ".json", ".png"],
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @import './src/styles/utils/_mixin.scss';
          @import './src/styles/utils/_variables.scss';
          @import './src/styles/shared/description.scss';
          @import './src/styles/shared/titles.scss';
          @import './src/styles/utils/responsive.scss';
          @import './src/styles/utils/function.scss';
        `,
            },
        },
    },
});
