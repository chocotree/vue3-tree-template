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
    align="items-center"
    pos="relative z-5"
    display="block"
    w="full"
    h="60px"
    bg="white"
    shadow="~"
    p="l-15px r-20px"
  >
    <div flex="~ center">
      <MenuBurger v-if="!isShowClose" />
      <MenuClose v-if="isShowClose" />
      <RouterLink to="/">
        <h3 text="18px pink-ff729d" font="bold">Tree Started App</h3>
      </RouterLink>
    </div>

    <div>
      <button w="min-120px" h="30px" text="15px gray-454343" font="bold" p="x-5px" bg="yellow-fed838" border="rounded-full">Login</button>
    </div>
  </header>
</template>
