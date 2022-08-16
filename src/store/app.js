import { ref } from 'vue';
import { acceptHMRUpdate, defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => {
  const nav = useNav();
  // const isShowNavMenu = ref(false);

  // const isShowLoginRegister = ref(false);

  // const openNavMenu = () => {
  //   isShowNavMenu.value = true;
  // };

  // const closeNavMenu = () => {
  //   isShowNavMenu.value = false;
  // };

  return {
    ...nav,
    // isShowNavMenu,
    // isShowLoginRegister,
    // openNavMenu,
    // closeNavMenu,
  };
});

const useNav = () => {
  const isShowNavMenu = ref(false);

  const openNavMenu = () => {
    isShowNavMenu.value = true;
  };

  const closeNavMenu = () => {
    isShowNavMenu.value = false;
  };

  return {
    isShowNavMenu,
    openNavMenu,
    closeNavMenu,
  };
};

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
