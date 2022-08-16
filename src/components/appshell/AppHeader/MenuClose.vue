<script setup>
  import { useAppStore } from '@/store';
  const appStore = useAppStore();
</script>

<template>
  <div display="inline-block" w="35px" h="35px" box="content" p="5px" cursor="pointer" m="r-10px" @click="appStore.closeNavMenu">
    <SvgIcon name="close" display="inline-block" w="full" h="full" text="black" />
  </div>
</template>

<style></style>
