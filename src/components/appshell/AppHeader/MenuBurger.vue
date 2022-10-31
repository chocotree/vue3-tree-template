<script setup>
  import { useAppStore } from '@/store';
  const appStore = useAppStore();
</script>

<template>
  <div
    inline-block
    w="35px"
    h="35px"
    text="black"
    box="content"
    p="5px"
    cursor="pointer"
    hover="bg-gray-3 bg-opacity-30"
    rounded-full
    m="r-10px"
    @click="appStore.openNavMenu"
  >
    <SvgIcon name="appShell/menu" inline-block w="full" h="full" text="black" />
  </div>
</template>
