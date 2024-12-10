import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// vite를 쓰면 빠르게 개발할 수 있다. 서버를 빠르게 띄우고 동기화가 빠르다.
