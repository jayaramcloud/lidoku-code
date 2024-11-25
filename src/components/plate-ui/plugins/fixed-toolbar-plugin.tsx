'use client';

import { createPlatePlugin } from '@udecode/plate-common/react';

import { FixedToolbar } from '../elements/fixed-toolbar';
import { FixedToolbarButtons } from '../elements/fixed-toolbar-buttons';

export const FixedToolbarPlugin = createPlatePlugin({
  key: 'fixed-toolbar',
  render: {
    beforeEditable: () => (
      <FixedToolbar>
        <FixedToolbarButtons />
      </FixedToolbar>
    ),
  },
});
