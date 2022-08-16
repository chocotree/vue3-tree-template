<script setup>
  import CoverListArrow from './CoverListArrow.vue';
  const listDom = ref(null);

  /**
   * @param {"left" | "right"} direction
   */
  const handleClickArrow = (direction) => {
    if (!listDom.value) return;
    const scrollVal = direction === 'left' ? -500 : 500;
    listDom.value.scrollLeft += scrollVal;
  };
</script>

<template>
  <div pos="relative">
    <ul ref="listDom" flex="~ i-center" w="full" p="b-10px" overflow="x-auto " scrollbar="none" class="scroll-smooth">
      <slot></slot>
    </ul>

    <CoverListArrow arrowDirection="left" :handleClickArrow="handleClickArrow.bind(null, 'left')" />
    <CoverListArrow arrowDirection="right" :handleClickArrow="handleClickArrow.bind(null, 'right')" />
  </div>
</template>
