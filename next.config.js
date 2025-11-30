/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // <--- 关键配置：导出为静态文件
  images: {
    unoptimized: true, // <--- 关键配置：GitHub Pages 不支持默认图片优化
  },
}

module.exports = nextConfig
