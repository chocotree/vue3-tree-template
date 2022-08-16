<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      // "left" | "right"
      arrowDirection: {
        type: String,
        default: 'left',
      },
      isShowArrow: {
        type: Boolean,
        default: true,
      },
      handleClickArrow: {
        type: Function,
        default: () => {},
      },
    },
    setup(props) {
      return {
        props,
      };
    },
  });
</script>

<template>
  <div
    pos="absolute z-1 top-0 bottom-0"
    m="y-auto"
    w="40px"
    h="40px"
    flex="~ j-center i-center"
    border="rounded-full"
    bg="gray-797777 opacity-80"
    cursor="pointer"
    :class="['icon_arrow', props.arrowDirection, { show: isShowArrow }]"
    @click="handleClickArrow"
  >
    <svgIcon name="arrow-left" display="inline-block" w="25px" h="25px" />
  </div>
</template>

<style lang="postcss" scoped>
  .icon_arrow {
    @apply left-0;
    @apply opacity-0;

    svg {
      @apply text-white;
      @apply transform translate-x-5px;
    }

    &.left {
      @apply -left-20px;
    }

    &.right {
      @apply left-auto -right-20px;
      svg {
        @apply transform rotate-180 -translate-x-5px;
      }
    }

    &.show {
      @apply opacity-100;
    }
  }
</style>
