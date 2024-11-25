import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react';
import { basicNodesPlugins } from './basic-node-plugins';
import { linkPlugin } from './link-plugin';
import { TablePlugin } from '@udecode/plate-table/react';
import { KbdPlugin } from '@udecode/plate-kbd/react';
import { HighlightPlugin } from '@udecode/plate-highlight/react';
import { FixedToolbarPlugin } from './fixed-toolbar-plugin';

export const viewPlugins = [
  ...basicNodesPlugins,
  HorizontalRulePlugin,
  linkPlugin,
  TablePlugin,
  HighlightPlugin,
  KbdPlugin
];

export const editorPlugins = [
  // Nodes
  ...viewPlugins,

    // UI
    FixedToolbarPlugin,
    // FloatingToolbarPlugin,
];
