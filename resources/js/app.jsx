import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import {TonConnectUIProvider} from "@tonconnect/ui-react";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const manifest ="https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>  resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<TonConnectUIProvider manifestUrl={manifest}><App {...props} /></TonConnectUIProvider>);
    },
    progress: {
        color: '#4B5563',
    },
});
