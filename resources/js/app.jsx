import './bootstrap';
import '../css/app.css';
import '@telegram-apps/telegram-ui/dist/styles.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import {TonConnectUIProvider} from "@tonconnect/ui-react";
import {AppRoot} from "@telegram-apps/telegram-ui"

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const manifest ="https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>  resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<TonConnectUIProvider manifestUrl={manifest}><AppRoot><App {...props} /></AppRoot></TonConnectUIProvider>);
    },
    progress: {
        color: '#4B5563',
    },
});
