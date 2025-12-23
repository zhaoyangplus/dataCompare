<script lang="ts">
import type { PropType } from 'vue';
import { computed, defineComponent, h } from 'vue';
import { NAvatar, NSelect } from 'naive-ui';
import type { SelectOption } from 'naive-ui'; // 导入SelectOption类型

// 扩展SelectOption以包含imageUrl
interface OptionType extends SelectOption {
  label: string;
  value: number | undefined;
  imageUrl: string;
  jdbcUrl: string;
}

export default defineComponent({
  components: {
    NSelect
  },
  props: {
    modelValue: {
      type: Number as PropType<number | undefined | null>,
      default: null
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
    // 使用 computed 保证响应式更新
    const componentOptions = computed(() => props.options);

    const handleUpdateValue = (value: string) => {
      emit('update:modelValue', value);
    };

    // console.log('sss:', props.options);
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
      return h(
        'div',
        { style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '5px 0' } },
        [
          h('div', { style: { display: 'flex', alignItems: 'center' } }, [
            h(NAvatar, {
              src: opt.imageUrl,
              round: false,
              size: 25,
              style: { backgroundColor: 'transparent', marginRight: '12px' }
            }),
            h('div', { style: { padding: '4px 0' } }, opt.label)
          ]),
          h('div', { style: { fontSize: '14px', color: '#888', marginTop: '1px' } }, opt.jdbcUrl)
        ]
      );
    };

    return {
      handleUpdateValue,
      renderSingleSelectTag,
      renderLabel,
      componentOptions
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
