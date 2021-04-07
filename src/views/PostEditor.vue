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

    <editor-floating-menu :editor="editor" v-slot="{ commands, isActive, menu }">
      <div
        class="editor__floating-menu"
        :class="{ 'is-active': menu.isActive }"
        :style="`top: ${menu.top}px`"
      >
        <v-btn
          v-for="menuBtn in floatingMenuBtns"
          :key="menuBtn.icon"
          text
          style="min-width: 0"
          class="pa-1"
          :class="{ 'is-active': isActive[menuBtn.name](menuBtn.params) }"
          @click="commands[menuBtn.name](menuBtn.params)"
        >
          <!-- strike icon seems too big, so passing "dense" prop only for it -->
          <v-icon :dense="menuBtn.name === 'strike' ? true : false">{{ menuBtn.icon }}</v-icon>
        </v-btn>
      </div>
    </editor-floating-menu>

    <editor-menu-bubble
      :editor="editor"
      :keep-in-bounds="keepInBounds"
      v-slot="{ commands, isActive, getMarkAttrs, menu }"
      @hide="hideLinkMenu"
    >
      <div
        class="menububble"
        :class="{ 'is-active': menu.isActive }"
        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
      >
        <v-form
          class="menububble__form"
          v-if="linkMenuIsActive"
          @submit.prevent="setLinkUrl(commands.link, linkUrl)"
        >
          <input
            class="menububble__input"
            type="text"
            v-model="linkUrl"
            placeholder="Eg: www.domain.com"
            ref="linkInput"
            @keydown.esc="hideLinkMenu"
          />
          <v-btn
            icon
            class="menububble__button"
            @click="setLinkUrl(commands.link, null)"
            type="button"
          >
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </v-form>

        <v-btn
          v-else
          v-for="menuBtn in menuBubbleBtns"
          :key="menuBtn.icon"
          text
          style="min-width: 0"
          class="pa-1"
          :class="{ 'is-active': isActive[menuBtn.name](menuBtn.params) }"
          @click="
            menuBtn.name === 'link'
              ? showLinkMenu(getMarkAttrs('link'))
              : commands[menuBtn.name](menuBtn.params)
          "
        >
          <!-- strike icon seems too big, so passing "dense" prop only for it -->
          <v-icon color="white" :dense="menuBtn.name === 'strike' ? true : false">{{
            menuBtn.icon
          }}</v-icon>
        </v-btn>
      </div>
    </editor-menu-bubble>

    <editor-content class="editor__content" :editor="editor" />
    <v-btn>Submit</v-btn>
  </div>
</template>

<script>
import {
  Editor, EditorContent, EditorFloatingMenu, EditorMenuBubble, EditorMenuBar,
} from 'tiptap';

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
    EditorFloatingMenu,
    EditorMenuBubble,
  },

  data() {
    return {
      linkUrl: null,
      linkMenuIsActive: false,
      keepInBounds: true,
      menuBubbleBtns: [
        { name: 'link', icon: 'mdi-link-variant', params: null },
        { name: 'bold', icon: 'mdi-format-bold' },
        { name: 'italic', icon: 'mdi-format-italic' },
        { name: 'strike', icon: 'mdi-format-strikethrough-variant' },
        { name: 'underline', icon: 'mdi-format-underline' },
      ],

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

      floatingMenuBtns: [
        { name: 'bold', icon: 'mdi-format-bold' },
        { name: 'italic', icon: 'mdi-format-italic' },
        { name: 'underline', icon: 'mdi-format-underline' },
        { name: 'code_block', icon: 'mdi-code-brackets' },
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

  methods: {
    showLinkMenu(attrs) {
      //   this.hideMenuBubble();
      this.linkUrl = attrs.href;
      this.linkMenuIsActive = true;
      this.$nextTick(() => {
        console.log(this.$refs);
        this.$refs.linkInput.focus();
      });
    },

    hideLinkMenu() {
      this.linkUrl = null;
      this.linkMenuIsActive = false;
    },

    setLinkUrl(command, url) {
      command({ href: url });
      this.hideLinkMenu();
    },
  },

  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>
<style>
.editor__floating-menu.is-active {
  visibility: visible;
  opacity: 1;
}

.editor__floating-menu {
  position: absolute;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: opacity 0.2s, visibility 0.2s;
  transition: opacity 0.2s, visibility 0.2s;
}

.menububble.is-active {
  visibility: visible;
  opacity: 1;
}

.menububble {
  position: absolute;
  display: -webkit-box;
  display: flex;
  z-index: 20;
  background: #000;
  border-radius: 5px;
  padding: 0.3rem;
  margin-bottom: 0.5rem;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  -webkit-transition: opacity 0.2s, visibility 0.2s;
  transition: opacity 0.2s, visibility 0.2s;
}

.menububble__input {
  font: inherit;
  border: none;
  background: transparent;
  color: #fff;
}
</style>
