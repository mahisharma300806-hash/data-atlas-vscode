import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'public');
const port = Number(process.env.PORT || 3000);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  const requested = url.pathname === '/' ? '/index.html' : url.pathname;
  const safePath = path.normalize(requested).replace(/^([.][.][/\\])+/, '');
  const filePath = path.join(root, safePath);

  try {
    const content = await readFile(filePath);
    const extension = path.extname(filePath);
    res.writeHead(200, {
      'Content-Type': mime[extension] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    res.end(content);
  } catch {
    if (!path.extname(requested)) {
      try {
        const fallback = await readFile(path.join(root, 'index.html'));
        res.writeHead(200, { 'Content-Type': mime['.html'], 'Cache-Control': 'no-cache' });
        res.end(fallback);
        return;
      } catch {}
    }
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Data Atlas listening on ${port}`);
});
