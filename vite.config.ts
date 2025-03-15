import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {ManifestOptions, VitePWA} from 'vite-plugin-pwa';

// https://vite.dev/config/

const manifest: Partial<ManifestOptions> = {
    theme_color: "#8936FF",
    background_color: "#2EC6FE",
    icons: [
        {
            purpose: "maskable",
            sizes: "512x512",
            src: "icon512_maskable.png",
            type: "image/png"
        },
        {
            purpose: "any",
            sizes: "512x512",
            src: "icon512_rounded.png",
            type: "image/png"
        }
    ],
    screenshots: [
        {
            src: '/screenshots/desktop.png',
            type: 'image/png',
            sizes: '1919x881',
            form_factor: 'wide',
        },
        {
            src: '/screenshots/mobile.png',
            type: 'image/png',
            sizes: '426x758',
            form_factor: 'wide',
        }
    ],
    orientation: "any",
    display: "standalone",
    lang: "ru-RU",
    name: "USD/BYN",
    short_name: "USD/BYN",
    start_url: "/"
};
export default defineConfig({
    plugins: [react(), VitePWA(
        {
            registerType: "autoUpdate",
            workbox: {
                globPatterns: ["**/*.{html,css,js,ico,png,svg}"]
            },
            manifest: manifest
        }
    )],
})
