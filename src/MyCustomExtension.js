import { Extension } from '@tiptap/core';

const MyCustomExtension = Extension.create({
    name: 'myCustomExtension',
  
    addCommands() {
      return {
        setCustomExtension:
          () =>
          ({ commands }) => {
            return commands.insertContent('<p>This is my enhanced custom content!</p>');
          },
      };
    },
  
    addKeyboardShortcuts() {
      return {
        'Mod-k': () => this.editor.commands.setCustomExtension(),
      };
    },
  });

  export default MyCustomExtension;
