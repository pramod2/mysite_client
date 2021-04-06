<template>
  <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">
        <v-btn
          v-for="menuBtn in menuBtns"
          :key="menuBtn.icon"
          text
          style="min-width: 0"
          class="pa-1"
          :class="isActive[menuBtn.name](menuBtn.params) ? 'grey lighten-1' : ''"
          @click="commands[menuBtn.name](menuBtn.params)"
        >
          <!-- strike icon seems too big, so passing "dense" prop only for it -->
          <v-icon :dense="menuBtn.name === 'strike' ? true : false">{{ menuBtn.icon }}</v-icon>
        </v-btn>
      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor" />
    <v-btn>Submit</v-btn>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions';

export default {
  components: {
    EditorContent,
    EditorMenuBar,
  },
  data() {
    return {
      menuBtns: [
        { name: 'bold', icon: 'mdi-format-bold' },
        { name: 'italic', icon: 'mdi-format-italic' },
        { name: 'strike', icon: 'mdi-format-strikethrough-variant' },
        { name: 'underline', icon: 'mdi-format-underline' },
        { name: 'heading', icon: 'mdi-format-header-1', params: { level: 1 } },
        { name: 'heading', icon: 'mdi-format-header-2', params: { level: 2 } },
        { name: 'heading', icon: 'mdi-format-header-3', params: { level: 3 } },
        { name: 'code', icon: 'mdi-code-tags' },
        { name: 'bullet_list', icon: 'mdi-format-list-bulleted' },
        { name: 'ordered_list', icon: 'mdi-format-list-numbered' },
        { name: 'blockquote', icon: 'mdi-format-quote-close' },
        { name: 'code_block', icon: 'mdi-code-brackets' },
        { name: 'horizontal_rule', icon: 'mdi-dots-horizontal' },
      ],

      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
        `,
      }),
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>
