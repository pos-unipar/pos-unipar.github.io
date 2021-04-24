module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Informações',
      collapsed: false,
      items: [
        'equipe',
        'creditos',
      ],
    },
    {
      type: 'category',
      label: 'Programas e Ferramentas',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Programas',
          collapsed: true,
          items: [
            'programas/programas-git',
            'programas/programas-visual-studio-code',
          ],
        },
        'ferramentas-online',
      ],
    },
  ],
};
