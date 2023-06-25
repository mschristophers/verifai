import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react({
      jsx: {
        factory: 'React.createElement',
        pragma: 'React',
        fileExtensions: ['.jsx']
      },
    }),
  ],
});
