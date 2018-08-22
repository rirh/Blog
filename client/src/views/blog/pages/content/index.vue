<template>
  <div class="editor-wrapper">
    <div :id="editorId" />
  </div>
</template>

<script>
import Editor from 'wangeditor';
import 'wangeditor/release/wangEditor.min.css';

export default {
  name: 'Editor',
  data() {
    return {
      value: {
        type: String,
        default: '',
      },
      /**
     * 绑定的值的类型, enum: ['html', 'text']
     */
      valueType: 'html',
      /**
     * @description 设置change事件触发时间间隔
     */
      changeInterval: {
        type: Number,
        default: 200,
      },
      /**
     * @description 是否开启本地存储
     */
      cache: {
        type: Boolean,
        default: true,
      },
    };
  },
  computed: {
    editorId() {
      return `editor${this.valueType}`;
    },
  },
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

</style>
