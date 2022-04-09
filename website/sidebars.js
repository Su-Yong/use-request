// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'use-request',
    },
    'start',
    'fetcher',
    'options',
    'cache',
    {
      Type: [
        'type/typescript-basic',
      ],
    },
    {
      Advanced: [
        'request-config',
        'middleware',
      ],
    },
  ],
};

module.exports = sidebars;
