/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Team',
      items: [
        {
          type: 'doc',
          id: 'team/working-agreements',
          label: 'Working agreements',
        },
        {
          type: 'doc',
          id: 'team/contribution',
          label: 'Contribution',
        },
      ],
    },
    {
      type: 'category',
      label: 'Repositories',
      items: [
        {
          type: 'doc',
          id: 'repositories/repositories',
          label: 'Intro',
        },
        {
          type: 'doc',
          id: 'repositories/documentation',
          label: 'Documentation',
        },
        {
          type: 'doc',
          id: 'repositories/front-end',
          label: 'Front-end',
        },
        {
          type: 'doc',
          id: 'repositories/back-end-x',
          label: 'Back-end X',
        },
        {
          type: 'doc',
          id: 'repositories/back-end-y',
          label: 'Back-end Y',
        },
      ],
    },
  ],
};

module.exports = sidebars;
