
<template>
  <div class="demo-split">
    <Split v-model="split1">
      <div
        slot="left"
        class="demo-split-pane"
      >
        <Menu
          theme="light"
          active-name="1"
          style="width:100%"
        >
          <MenuGroup title="内容管理">
            <MenuItem name="1">
              <Icon type="md-document" />
              博客列表
            </MenuItem>
            <MenuItem name="2">
              <Icon type="md-document" />
              写博客
            </MenuItem>
          </MenuGroup>
        </Menu>
      </div>
      <div
        slot="right"
      >
        <div class="editor-wrapper">
          <div :id="editorId" />
        </div>
      </div>
    </Split>
  </div>
</template>
<script>
import Editor from 'wangeditor';
import 'wangeditor/release/wangEditor.min.css';

export default {
  data() {
    return {
      split1: 0.2,
      value: '123123123',
      valueType: 'html',
      changeInterval: 200,
      cache: true,
      editorId: 'editor',
    };
  },
  // computed: {
  //   editorId() {
  //     return `editor${this._uid}`;
  //   },
  // },
  mounted() {
    this.editor = new Editor(`#${this.editorId}`);
    this.editor.customConfig.onchange = (html) => {
      const text = this.editor.txt.text();
      if (this.cache) localStorage.editorCache = html;
      this.$emit('input', this.valueType === 'html' ? html : text);
      this.$emit('on-change', html, text);
    };
    this.editor.customConfig.onchangeTimeout = this.changeInterval;
    // create这个方法一定要在所有配置项之后调用
    this.editor.create();
    // 如果本地有存储加载本地存储内容
    const html = localStorage.editorCache;
    if (html) this.editor.txt.html(html);
  },
};
</script>
<style>
    .demo-split{
        height: 100%;
        border: 1px solid #000;
    }
    .demo-split-pane{
        /* padding: 10px; */
        height: 100%;
        overflow:scroll;
    }
</style>
