/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Pós Web & Dispositivos Móveis',
  tagline: 'Unipar - 2021',
  url: 'https://pos-unipar.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pos-unipar', // Usually your GitHub org/user name.
  projectName: 'pos-unipar.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Pós Unipar',
      logo: {
        alt: 'Pós Web & Dispositivos Móveis - Unipar 2021',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/pos-unipar/pos-unipar.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Organizacional',
          items: [
            {
              label: 'Site da pós',
              href: 'https://pos.unipar.br/especializacao/desenvolvimento-de-aplicacoes-web-e-mobile/toledo',
            },
            {
              label: 'Aluno online',
              href: 'https://aluno.unipar.br/',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Slack',
              href: 'https://app.slack.com/client/T01TA24MZ88/D01TARRTEM6',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pos-unipar/pos-unipar.github.io',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Informações',
              to: 'info',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          editUrl: 'https://github.com/pos-unipar/pos-unipar.github.io/edit/master/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/pos-unipar/pos-unipar.github.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
