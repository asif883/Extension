import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MyCustomExtension from './MyCustomExtension';

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, MyCustomExtension],
    content: '<p>Start editing...</p>',
  });

  if (!editor) {
    return null;
  }

  const addCustomContent = () => {
    editor.chain().focus().setCustomExtension().run();
  };

  return (
    <div>
      <EditorContent editor={editor} />
      <button onClick={addCustomContent} style={{ marginTop: '10px' }}>
        Add Custom Content
      </button>
    </div>
  );
};

export default TiptapEditor;
