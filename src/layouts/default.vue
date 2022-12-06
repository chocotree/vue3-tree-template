<script setup>
  import AppHeader from '@/components/appshell/AppHeader/index.vue';
  import Sidebar from '@/components/appshell/Sidebar/index.vue';
  import { useMatchMedia } from '@/composables';
  import { useAppStore } from '@/store';

  const { isMatches: isPc } = useMatchMedia();
  const appStore = useAppStore();

  const isShowMobileNavMenu = computed(() => {
    if (isPc.value) return false;
    return appStore.isShowNavMenu;
  });
</script>

<template>
  <AppHeader />
  <div flex="~" w="full" h="[calc(100vh_-_60px)]">
    <!-- pc -->
    <div v-if="isPc" shrink="0" w="200px" h="full">
      <Sidebar />
    </div>

    <!-- mobile -->
    <Transition name="navMenu">
      <div
        v-show="isShowMobileNavMenu"
        pos="fixed z-10 left-0 top-60px"
        w="full"
        h="[calc(100vh-60px)]"
        bg="white"
        overflow="y-auto"
        scrollbar="pink"
      >
        <Sidebar />
      </div>
    </Transition>

    <div w="[calc(100vw-200px)] lt-md:full" h="full" overflow="y-scroll">
      <RouterView />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .navMenu-enter-active,
  .navMenu-leave-active {
    transition: all 0.4s ease;
  }

  .navMenu-enter-from,
  .navMenu-leave-to {
    transform: translateX(-102%);
  }
</style>
