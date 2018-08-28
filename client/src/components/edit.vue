<template>
  <div class="editor-wrapper">
    <Input
      v-model="title"
      style="margin-bottom:20px"
      placeholder="请输入标题"
      @on-change="changeTit"
    >
    <Icon
      slot="append"
      type="ios-paper-plane"
      size="20"
      @click="save"
    />
    </Input>
    <div :id="editorId" />
  </div>
</template>

<script>
import Editor from 'wangeditor';
import 'wangeditor/release/wangEditor.min.css';
import { oneOf } from '@/utils/helper';

export default {
  name: 'Editor',
  props: {
    value: {
      type: String,
      default: '',
    },
    /**
     * 绑定的值的类型, enum: ['html', 'text']
     */
    valueType: {
      type: String,
      default: 'html',
      validator: val => oneOf(val, ['html', 'text']),
    },
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
  },
  data() {
    return {
      title: '无标题文本',
    };
  },
  computed: {
    editorId() {
      return `editor${this._uid}`;
    },
  },
  mounted() {
    this.editor = new Editor(`#${this.editorId}`);
    this.editor.customConfig.onchange = (html) => {
      const text = this.editor.txt.text();
      if (this.cache) localStorage.editorCache = html;
      if (this.cache) localStorage.editorTitleCache = this.title;
      this.$emit('input', this.valueType === 'html' ? html : text);
      this.$emit('on-change', html, text);
    };
    this.editor.customConfig.onchangeTimeout = this.changeInterval;
    // create这个方法一定要在所有配置项之后调用
    this.editor.create();
    // 如果本地有存储加载本地存储内容
    const context = localStorage.editorCache;
    const title = localStorage.editorTitleCache;
    if (context) this.editor.txt.html(context);
    if (title) this.title = title;
    // 打开的时候发送给父组件内容
    this.$emit('on-change-title', this.title);
    this.$emit('on-change', context);
  },
  methods: {
    // clearDef() {
    //   this.title = '';
    // },
    changeTit(event) {
      this.$emit('on-change-title', event.target.value);
    },
    save() {
      this.$emit('save');
    },
  },


};
</script>

<style>

</style>
