self.assets = [
	'/favicon.ico',
	'/css/font-awesome.min.css',
	'/fonts/fontawesome-webfont.eot?v=4.7.0',
	'/fonts/fontawesome-webfont.svg?v=4.7.0',
	'/fonts/fontawesome-webfont.ttf?v=4.7.0',
	'/fonts/fontawesome-webfont.woff?v=4.7.0',
	'/fonts/fontawesome-webfont.woff2?v=4.7.0',
	'/css/style.css',
	'/js/masonry.pkgd.min.js',
	'/js/smooth-scroll.min.js',
	'/js/main.min.js',
];
//然后引入workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js');
workbox.setConfig({
	debug: false,
	modulePathPrefix: 'https://storage.googleapis.com/workbox-cdn/releases/3.3.0/'
});
workbox.core.setCacheNameDetails({
	prefix: 'gzwawj',
	suffix: 'v1',
	precache: 'precache',
	runtime: 'runtime'
})
//直接激活跳过等待阶段
workbox.skipWaiting();
workbox.clientsClaim();
self.assetsVersion = workbox.core.cacheNames.runtime
workbox.precaching.precacheAndRoute(self.assets);
//静态资源采用staleWhileRevalidate策略，安全可靠
workbox.routing.registerRoute(
	new RegExp('gzwawj\.github\.io.*.(?:html)', ''),
	workbox.strategies.staleWhileRevalidate({
		cacheName: self.assetsVersion,
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 20
			})
		]
	})
);
workbox.routing.registerRoute(
	new RegExp('gzwawj\.github\.io.*.(?:js|css|eot|svg|ttf|woff2|woff|otf|ico)', ''),
	workbox.strategies.cacheFirst({
		cacheName: self.assetsVersion
	})
);
workbox.routing.registerRoute(
	new RegExp('https:\/\/www\.intensedebate\.com.*.(?:js|css|ico|png|gif)', ''),
	workbox.strategies.staleWhileRevalidate({
		cacheName: self.assetsVersion,
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 20
			})
		]
	})
);
