<script setup>
  import MenuBurger from './MenuBurger.vue';
  import MenuClose from './MenuClose.vue';
  import { useAppStore } from '@/store';
  import { useMatchMedia } from '@/composables';

  const { isMatches: isPc } = useMatchMedia();
  const appStore = useAppStore();

  const isShowClose = computed(() => {
    if (isPc.value) return false;
    return appStore.isShowNavMenu;
  });
</script>

<template>
  <header
    flex="~"
    justify="between"
    items="center"
    pos="relative z-5"
    display="block"
    w="full"
    h="60px"
    bg="white"
    shadow="~"
    p="l-15px r-20px"
  >
    <div flex="~" items="center">
      <MenuBurger v-if="!isShowClose" />
      <MenuClose v-if="isShowClose" />
      <RouterLink to="/">
        <h3 text="18px pink-4" font="bold">Tree Started App</h3>
      </RouterLink>
    </div>

    <div>
      <button min-w="120px" h="30px" text="15px " font="bold" p="x-12px" bg="yellow-4" rounded="full">Login</button>
    </div>
  </header>
</template>
