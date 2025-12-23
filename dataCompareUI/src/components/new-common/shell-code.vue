<script>
import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { EditorView, keymap, lineNumbers } from '@codemirror/view'; // 导入 lineNumbers
import { EditorState } from '@codemirror/state';
import { StreamLanguage } from '@codemirror/language'; // 导入 StreamLanguage
import { shell } from '@codemirror/legacy-modes/mode/shell'; // 导入 Shell 模式
import { defaultKeymap } from '@codemirror/commands';
import { oneDark } from '@codemirror/theme-one-dark';

export default defineComponent({
  props: {
    modelValue: {
      type: [String, null], // 支持 string 和 null 类型
      required: true // 父组件必须传入初始值
    }
  },
  emits: ['update:modelValue'], // 定义 emit 事件
  setup(props, { emit }) {
    const editorContainer = ref(null);
    const editorView = ref(null);

    // 初始化编辑器
    onMounted(() => {
      const initialState = props.modelValue ?? ''; // 如果为 null，则使用空字符串作为初始值
      const state = EditorState.create({
        doc: initialState,
        extensions: [
          lineNumbers(), // 启用行号
          keymap.of(defaultKeymap), // 默认快捷键
          StreamLanguage.define(shell), // 使用 Shell 模式
          oneDark, // One Dark 主题
          EditorView.updateListener.of(update => {
            if (update.docChanged) {
              // 更新父组件的值
              const newValue = update.state.doc.toString();
              emit('update:modelValue', newValue || null); // 如果内容为空字符串，则返回 null
            }
          })
        ]
      });

      // 创建编辑器实例
      editorView.value = new EditorView({
        state,
        parent: editorContainer.value
      });
    });

    // 销毁编辑器
    onBeforeUnmount(() => {
      if (editorView.value) {
        editorView.value.destroy();
      }
    });

    // 监听父组件传入的值变化，并同步到编辑器
    watch(
      () => props.modelValue,
      newVal => {
        const currentValue = editorView.value?.state.doc.toString() || '';
        const normalizedNewVal = newVal ?? ''; // 将 null 转换为空字符串
        if (editorView.value && currentValue !== normalizedNewVal) {
          editorView.value.dispatch({
            changes: { from: 0, to: editorView.value.state.doc.length, insert: normalizedNewVal }
          });
        }
      }
    );

    return {
      editorContainer
    };
  }
});
</script>

<template>
  <div ref="editorContainer" class="code-editor"></div>
</template>

<style scoped>
.code-editor {
  width: 100%;
  height: 400px;
  background-color: #282c34;
  border-radius: 4px;
  position: relative;
}

/* 使用 :deep() 穿透作用域修改 CodeMirror 内部样式 */
:deep(.cm-editor) {
  height: 100%;
  outline: none !important;
}

:deep(.cm-scroller) {
  overflow: auto;
  height: 100%;
  font-family: 'Fira Code', monospace;
  padding-bottom: 16px; /* 给滚动条留出间距 */
}

/* 滚动条整体样式 */
:deep(.cm-scroller::-webkit-scrollbar) {
  width: 10px;
  height: 10px;
}

/* 垂直滚动条轨道 */
:deep(.cm-scroller::-webkit-scrollbar-track) {
  background: #1e1e1e;
  border-radius: 4px;
}

/* 水平滚动条轨道 */
:deep(.cm-scroller::-webkit-scrollbar-track:horizontal) {
  margin: 0 16px; /* 水平滚动条两侧留空 */
}

/* 滚动条滑块 */
:deep(.cm-scroller::-webkit-scrollbar-thumb) {
  background: #3e4451;
  border-radius: 4px;
  border: 2px solid #1e1e1e;
}

:deep(.cm-scroller::-webkit-scrollbar-thumb:hover) {
  background: #4d5564;
}

:deep(.cm-gutterElement) {
  color: #abadb0;
  padding: 0 8px 0 4px !important;
}

:deep(.cm-gutters) {
  background-color: #21252b;
  border-right: 1px solid #343a40;
  padding-right: 8px;
}

/* 调整光标所在行背景色 */
:deep(.cm-activeLine) {
  background-color: #2c313a !important;
}

/* 匹配括号高亮 */
:deep(.cm-matchingBracket) {
  background-color: #3e4451 !important;
  border-radius: 2px;
}
</style>
