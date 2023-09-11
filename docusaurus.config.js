// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Luke\'s Web App Demos',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://portfolio.lukexli.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lukexlii', // Usually your GitHub org/user name.
  projectName: 'portfolio.lukexli.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Luke\'s Web App Demos',
        logo: {
          alt: 'Luke\'s Web App Demos',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Portfolio',
          },
          //{ to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/lukexlii',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'javascript:void alert(String.fromCharCode(77,121,32,101,109,97,105,108,58,32,119,101,98,45,99,111,110,116,97,99,116,64,108,117,107,101,120,108,105,46,99,111,109))',
            label: 'Email',
            position: 'right',
            target: '_self'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /*
                    {
                       title: 'Docs',
                       items: [
                         {
                           label: 'Tutorial',
                           to: '/docs/intro',
                         },
                       ],
                     },
                     {
                       title: 'Community',
                       items: [
                         {
                           label: 'Stack Overflow',
                           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                         },
                         {
                           label: 'Discord',
                           href: 'https://discordapp.com/invite/docusaurus',
                         },
                         {
                           label: 'Twitter',
                           href: 'https://twitter.com/docusaurus',
                         },
                       ],
                     },
                     {
                       title: 'More',
                       items: [
                         {
                           label: 'Blog',
                           to: '/blog',
                         },
                         {
                           label: 'GitHub',
                           href: 'https://github.com/facebook/docusaurus',
                         },
                       ],
                     },
                    {
                      title: 'Contact',
                      items: [
                        {
                          label: 'Email',
                          href: 'javascript:void alert(\'My email: \' + String.fromCharCode(119,101,98,45,99,111,110,116,97,99,116,64,108,117,107,101,120,108,105,46,99,111,109))"',
                        },
                      ],
                    },
          */
        ],
        copyright: `Luke Li. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
