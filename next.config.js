const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  flexsearch: {
      codeblocks: false,
  },
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
      if (!isServer) {
          config.resolve.fallback = { fs: false };
      } 
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'yaml-loader',
      });
      return config;
  },
});
