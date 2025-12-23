<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent, h } from 'vue';
import { NAvatar, NSelect } from 'naive-ui';
import type { SelectOption } from 'naive-ui'; // 导入SelectOption类型

// 扩展SelectOption以包含imageUrl
interface OptionType extends SelectOption {
  label: string;
  value: string | number;
  imageUrl: string;
}

export default defineComponent({
  components: {
    NSelect
  },
  props: {
    modelValue: {
      type: String as PropType<string | undefined | null>,
      default: undefined
    },
    placeholderValue: {
      type: String as PropType<string | undefined>,
      default: undefined
    },
    options: {
      type: Array as PropType<OptionType[]>,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const handleUpdateValue = (value: string) => {
      emit('update:modelValue', value);
    };

    // 使用SelectOption类型参数，然后断言为OptionType
    const renderSingleSelectTag = ({ option }: { option: SelectOption }) => {
      const opt = option as OptionType;
      return h('div', { style: { display: 'flex', alignItems: 'center' } }, [
        h(NAvatar, {
          src: opt.imageUrl,
          round: false,
          size: 24,
          style: { marginRight: '12px', backgroundColor: 'transparent' }
        }),
        opt.label
      ]);
    };

    // 参数类型使用SelectOption，断言为OptionType
    const renderLabel = (option: SelectOption) => {
      const opt = option as OptionType;
      return h('div', { style: { display: 'flex', alignItems: 'center' } }, [
        h(NAvatar, {
          src: opt.imageUrl,
          round: false,
          size: 25,
          style: { backgroundColor: 'transparent' }
        }),
        h('div', { style: { marginLeft: '12px', padding: '4px 0' } }, [h('div', null, [opt.label])])
      ]);
    };

    return {
      handleUpdateValue,
      renderSingleSelectTag,
      renderLabel,
      componentOptions: props.options
    };
  }
});
</script>

<template>
  <NSelect
    :value="modelValue"
    :options="componentOptions"
    :render-label="renderLabel"
    :render-tag="renderSingleSelectTag"
    filterable
    clearable
    :placeholder="placeholderValue"
    @update:value="handleUpdateValue"
  />
</template>
