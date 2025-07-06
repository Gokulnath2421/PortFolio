import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/Portfolio/',  // ⬅️ if your repo is github.com/Akashh0/Portfolio/Resume
  plugins: [react()],
});
