declare module 'vite-plugin-pwa' {
  import { Plugin } from 'vite';

  interface VitePWAOptions {
    registerType?: 'autoUpdate' | 'prompt';
    includeAssets?: string[];
    manifest?: {
      name: string;
      short_name: string;
      description: string;
      theme_color: string;
      background_color: string;
      display: string;
      icons: Array<{
        src: string;
        sizes: string;
        type: string;
        purpose?: string;
      }>;
    };
  }

  export function VitePWA(options?: VitePWAOptions): Plugin;
} 