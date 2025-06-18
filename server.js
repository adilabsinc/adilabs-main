import { createServer as createViteServer } from 'vite';

const vite = await createViteServer({
  server: { 
    middlewareMode: false,
    host: '0.0.0.0',
    port: 5173
  },
  appType: 'spa'
});

vite.listen();
console.log('ADILABS INC website running on http://0.0.0.0:5173');