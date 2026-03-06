import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

function getPort(mode: string): number | undefined {
  const env = loadEnv(mode, process.cwd());

  const NODE_ENV = env.VITE_NODE_ENV;
  if (!NODE_ENV) throw new Error(`❌ Missing required environment variable: NODE_ENV`);

  const value = env.VITE_ADMIN_PORT;

  if (!value && ['dev', 'test'].includes(NODE_ENV))
    throw new Error(`❌ Missing required VITE_ADMIN_PORT when NODE_ENV is ${NODE_ENV}`);
  if (value && isNaN(Number(value)))
    throw new Error(`❌ Invalid value for VITE_ADMIN_PORT: "${value}" is not a number`);

  return Number(value) || undefined;
}

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    envPrefix: 'VITE_',

    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@repo/contracts': path.resolve(process.cwd(), '../../packages/contracts/src'),
      },
    },

    server: {
      port: getPort(mode),
      strictPort: true,
      host: '0.0.0.0', // for docker
    },
    build: {
      ssr: false,
      rollupOptions: {
        external: [],
      },
    },
  });
};
