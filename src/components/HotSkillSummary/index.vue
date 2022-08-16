<script setup>
  import HotTItle from '@/components/global/HotTItle.vue';
</script>

<template>
  <div>
    <HotTItle m="b-15px">熱門技能</HotTItle>

    <ul flex="~ i-center" overflow="x-auto" border="rounded-3px">
      <li
        v-for="i in 8"
        :key="i"
        flex="shrink-0"
        w="150px"
        h="150px"
        bg="gray-ededed"
        border="rounded-3px"
        m="r-15px last-of-type:r-0"
      ></li>
    </ul>
  </div>
</template>

<style></style>
