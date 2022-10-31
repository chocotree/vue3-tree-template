<script setup>
  import { useAppStore } from '@/store';
  const appStore = useAppStore();
</script>

<template>
  <div inline-block w="35px" h="35px" box="content" p="5px" cursor="pointer" m="r-10px" @click="appStore.closeNavMenu">
    <SvgIcon name="close" inline-block w="full" h="full" text="black" />
  </div>
</template>
