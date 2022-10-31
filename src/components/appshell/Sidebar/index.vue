<script setup>
  import NavInBar from './NavInBar.vue';
</script>

<template>
  <div pos="relative z-5" w="full" h="full" border="r-1">
    <nav block w="full">
      <ul w="full">
        <NavInBar to="/" :icon-name="'appShell/home'">Home</NavInBar>
        <NavInBar to="/about" :icon-name="'appShell/thunder'">About</NavInBar>
      </ul>
    </nav>

    <div p="x-10px" m="y-10px">
      <div w="full" h="0" border="b-1"></div>
    </div>
  </div>
</template>
