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
    hideableSidebar: true,
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
          label: 'Conteúdos',
          position: 'left',
        },
        {
          to: 'professores/',
          activeBasePath: 'professores',
          label: 'Professores',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          to: 'info/',
          activeBasePath: 'info',
          label: 'Info',
          position: 'right',
        },
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
              href: 'https://pswebdisposit-4ss3184.slack.com',
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
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'docs',
          path: 'docs/docs',
          editUrl: 'https://github.com/pos-unipar/pos-unipar.github.io/edit/master/',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          path: 'blog',
          editUrl: 'https://github.com/pos-unipar/pos-unipar.github.io/edit/master/',
          blogTitle: 'Blog',
          blogDescription: 'Blog',
          blogSidebarCount: 'ALL',
          // blogSidebarTitle: 'All our posts',
          routeBasePath: 'blog',
          include: ['*.md', '*.mdx'],
          postsPerPage: 10,
          // /**
          //  * Theme components used by the blog pages.
          //  */
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          showReadingTime: true,
          // /**
          //  * Blog feed.
          //  * If feedOptions is undefined, no rss feed will be generated.
          //  */
          // feedOptions: {
          //   type: '', // required. 'rss' | 'feed' | 'all'
          //   title: '', // default to siteConfig.title
          //   description: '', // default to  `${siteConfig.title} Blog`
          //   copyright: '',
          //   language: undefined, // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
          // },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          // You can also use your "G-" Measurement ID here.
          trackingID: 'G-GL316DNCCY',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'exemplos',
        path: 'docs/exemplos',
        editUrl: 'https://github.com/pos-unipar/pos-unipar.github.io/edit/master/',
        routeBasePath: 'exemplos',
        sidebarPath: require.resolve('./sidebarsExemplos.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'professores',
        path: 'docs/professores',
        editUrl: 'https://github.com/pos-unipar/pos-unipar.github.io/edit/master/',
        routeBasePath: 'professores',
        sidebarPath: require.resolve('./sidebarsProfessores.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'info',
        path: 'docs/info',
        editUrl: 'https://github.com/pos-unipar/pos-unipar.github.io/edit/master/',
        routeBasePath: 'info',
        sidebarPath: require.resolve('./sidebarsInfo.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    // https://manifest-gen.netlify.app/
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(237, 50, 55)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.svg',
            color: 'rgb(237, 50, 55)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/logo512.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#ffffff',
          },
        ],
      },
    ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsRouteBasePath: [
          "/docs",
          "/info",
        ],
        hashed: true,
        language: ["pt"],
        highlightSearchTermsOnTargetPage: true,
        translations: {
          "search_placeholder": "Pesquisa",
          "see_all_results": "Veja todos os resultados",
          "no_results": "Sem resultados.",
          "search_results_for": "Resultados da pesquisa para \"{{ keyword }}\"",
          "search_the_documentation": "Pesquise",
          "count_documents_found": "{{ count }} documento encontrado",
          "count_documents_found_plural": "{{ count }} documentos encontrados",
          "no_documents_were_found": "Nenhum resultado encontrado"
        }
      },
    ],
  ],
};
