// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'use-request',
  tagline: 'Zero dependency data fetch library for React ',
  url: 'https://Su-Yong.github.io',
  baseUrl: process.env.NODE_ENV === 'production' ? '/use-request/' : '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.svg',
  organizationName: 'Su-Yong',
  projectName: 'use-request',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Su-Yong/use-request/blob/docs/website/docs',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        pages: {
          remarkPlugins: [
            require('@docusaurus/remark-plugin-npm2yarn'),
          ]
        },
        blog: false,
        sitemap: {
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      autoCollapseSidebarCategories: true,
      algolia: {
        appId: process.env.APPLICATION_ID,
        apiKey: process.env.API_SEARCH_KEY,
        indexName: 'search',
        contextualSearch: true,
      },
      navbar: {
        title: 'use-request',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Su-Yong/use-request',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Author',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.suyong.me',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Su-Yong',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Su-Yong. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
