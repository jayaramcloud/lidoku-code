import { createFileRoute } from '@tanstack/react-router';

// Editor imports
import { Editor, EditorContainer } from '@/components/plate-ui/editor';
import { linkValue } from '@/components/plate-ui/link-value';
import { editorPlugins } from '@/components/plate-ui/plugins/editor-plugins';
import { useCreateEditor } from '@/hooks/user-create-editor';
import { Plate } from '@udecode/plate-common/react';

export const Route = createFileRoute('/')({
  component: BasicEditor,
});

export default function BasicEditor() {
  const editor = useCreateEditor({
    plugins: [...editorPlugins],
    value: linkValue,
    readOnly: false,
  });

  return (
    <div>
      <div>
        <h2 className='p-4'>Plate Editor</h2>
      </div>
      <Plate editor={editor}>
        <EditorContainer>
          <Editor placeholder='Type the course here...' />
        </EditorContainer>
      </Plate>
    </div>
  );
}
