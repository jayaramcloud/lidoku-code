import { withProps } from '@udecode/cn';
import type { Value } from '@udecode/plate-common';
import { type CreatePlateEditorOptions, usePlateEditor } from '@udecode/plate-common/react';

// Elements
import { HeadingElement } from '@/components/plate-ui/elements/heading-element';
import { LinkElement } from '@/components/plate-ui/elements/link-element';

// Plugins
import { editorPlugins, viewPlugins } from '@/components/plate-ui/plugins/editor-plugins';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';
import {
  ParagraphPlugin,
  PlateLeaf,
} from '@udecode/plate-common/react';
import {
  CodeBlockPlugin,
  CodeLinePlugin,
  CodeSyntaxPlugin,
} from '@udecode/plate-code-block/react';
import { HEADING_KEYS } from '@udecode/plate-heading';
import { LinkPlugin } from '@udecode/plate-link/react';
import { HighlightPlugin } from '@udecode/plate-highlight/react';
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react';
import { KbdPlugin } from '@udecode/plate-kbd/react';
// import {
//   ImagePlugin,
//   PlaceholderPlugin,
// } from '@udecode/plate-media/react';
import { TogglePlugin } from '@udecode/plate-toggle/react';
import {
  TableCellHeaderPlugin,
  TableCellPlugin,
  TablePlugin,
  TableRowPlugin,
} from '@udecode/plate-table/react';
import { BlockquoteElement } from '@/components/plate-ui/elements/blockquote-element';
import { CodeLeaf } from '@/components/plate-ui/elements/code-leaf';
import { ParagraphElement } from '@/components/plate-ui/elements/paragraph-element';
import { CodeBlockElement } from '@/components/plate-ui/elements/code-block-element';
import { CodeLineElement } from '@/components/plate-ui/elements/code-line-element';
import { CodeSyntaxLeaf } from '@/components/plate-ui/elements/code-syntax-leaf';
import { HrElement } from '@/components/plate-ui/elements/hr-element';
import { HighlightLeaf } from '@/components/plate-ui/elements/highlight-leaf';
import { KbdLeaf } from '@/components/plate-ui/elements/kbd-leaf';
import { ToggleElement } from '@/components/plate-ui/elements/toggle-element';
import { TableCellElement, TableCellHeaderElement } from '@/components/plate-ui/elements/table-cell-element';
import { TableElement } from '@/components/plate-ui/elements/table-element';
import { TableRowElement } from '@/components/plate-ui/elements/table-row-element';


const viewComponents = {
  [BlockquotePlugin.key]: BlockquoteElement,
  [BoldPlugin.key]: withProps(PlateLeaf, { as: 'strong' }),
  [ItalicPlugin.key]: withProps(PlateLeaf, { as: 'em' }),
  [UnderlinePlugin.key]: withProps(PlateLeaf, { as: 'u' }),
  [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: 's' }),
  [CodePlugin.key]: CodeLeaf,

  [HEADING_KEYS.h1]: withProps(HeadingElement, { variant: 'h1' }),
  [HEADING_KEYS.h2]: withProps(HeadingElement, { variant: 'h2' }),
  [HEADING_KEYS.h3]: withProps(HeadingElement, { variant: 'h3' }),
  [HEADING_KEYS.h4]: withProps(HeadingElement, { variant: 'h4' }),
  [HEADING_KEYS.h5]: withProps(HeadingElement, { variant: 'h5' }),
  [HEADING_KEYS.h6]: withProps(HeadingElement, { variant: 'h6' }),
  [ParagraphPlugin.key]: ParagraphElement,
  [CodeBlockPlugin.key]: CodeBlockElement,
  [CodeLinePlugin.key]: CodeLineElement,
  [CodeSyntaxPlugin.key]: CodeSyntaxLeaf,

  [HorizontalRulePlugin.key]: HrElement,
  [LinkPlugin.key]: LinkElement,
  [KbdPlugin.key]: KbdLeaf,
  // [ImagePlugin.key]: ImageElement,
  // [PlaceholderPlugin.key]: MediaPlaceholderElement,

  [TableCellHeaderPlugin.key]: TableCellHeaderElement,
  [TableCellPlugin.key]: TableCellElement,
  [TablePlugin.key]: TableElement,
  [TableRowPlugin.key]: TableRowElement,
  [TogglePlugin.key]: ToggleElement,

  [HighlightPlugin.key]: HighlightLeaf,
};

const editorComponents = {
  ...viewComponents,
};

export const useCreateEditor = (
  {
    components,
    override,
    readOnly,
    ...options
  }: {
    components?: Record<string, any>;
    plugins?: any[];
    readOnly?: boolean;
  } & Omit<CreatePlateEditorOptions, 'plugins'> = {},
  deps: any[] = [],
) => {
  return usePlateEditor<Value, (typeof editorPlugins)[number]>(
    {
      override: {
        components: {
          ...(readOnly ? viewComponents : editorComponents),
          ...components,
        },
        ...override,
      },
      plugins: (readOnly ? viewPlugins : editorPlugins) as any,
      ...options,
    },
    deps,
  );
};
