<script setup>
  import { useAppStore } from '@/store';
  const appStore = useAppStore();
</script>

<template>
  <div
    display="inline-block"
    w="35px"
    h="35px"
    text="black"
    box="content"
    p="5px"
    cursor="pointer"
    bg="hover:(gray-ededed opacity-70)"
    border="rounded-full"
    m="r-10px"
    @click="appStore.openNavMenu"
  >
    <SvgIcon name="appShell/menu" display="inline-block" w="full" h="full" text="black" />
  </div>
</template>
