/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'cdn.pixabay.com',
        'freesvg.org',
        'upload.wikimedia.org',
        'logos-world.net'
      ],
    },
    async headers() {
      const cspHeader = `
        default-src 'self';
        script-src 'self' 'unsafe-eval' 'unsafe-inline';
        style-src 'self' 'unsafe-inline';
        img-src 'self' blob: data:;
        font-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        frame-src 'self' https://www.youtube.com/;
        upgrade-insecure-requests;
      `;
  
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: cspHeader.replace(/\n/g, ''),
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  