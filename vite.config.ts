import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        apply: 'apply.html',
      },
    },
  },
});
```

**Commit changes.**

---

Then wait 60 seconds for Vercel to rebuild and test:
```
creatoros.co.in/apply
