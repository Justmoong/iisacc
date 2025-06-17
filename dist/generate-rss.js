// generate-rss.js

import fs from 'fs';
import path from 'path';

const postsDir = './src/routes/Posts';
const entries = fs.readdirSync(postsDir, { withFileTypes: true });

const posts = entries
	.filter(dirent => dirent.isDirectory())
	.map(dirent => {
		const slug = dirent.name;
		const metaPath = path.join(postsDir, slug, 'meta.json');

		let meta = {};
		if (fs.existsSync(metaPath)) {
			try {
				const content = fs.readFileSync(metaPath, 'utf-8');
				meta = JSON.parse(content);
			} catch (e) {
				console.warn(`⚠️ Failed to parse meta.json for ${slug}:`, e);
			}
		}

		return {
			title: meta.title || decodeURIComponent(slug),
			date: meta.date || new Date().toISOString(),
			summary: meta.summary || '',
			path: '/Posts/' + encodeURIComponent(slug)
		};
	});

const now = new Date().toUTCString();

const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>iisacc</title>
    <link>https://iisacc.com</link>
    <description>RSS Feed</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>
    ${posts.map(post => `
      <item>
        <title>${post.title}</title>
        <link>https://iisacc.com${post.path}</link>
        <description>${post.summary}</description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <guid>https://iisacc.com${post.path}</guid>
      </item>`).join('')}
  </channel>
</rss>`;

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync(path.resolve('dist/rss.xml'), rss);