<script setup>
  import NavInBar from './NavInBar.vue';
</script>

<template>
  <div pos="relative z-5" w="full" h="full" border="r-1 r-gray-ededed">
    <nav display="block" w="full">
      <ul w="full">
        <NavInBar to="/" :icon-name="'appShell/home'" :isActive="true">Home</NavInBar>
        <NavInBar to="/about" :icon-name="'appShell/thunder'">About</NavInBar>
      </ul>
    </nav>

    <div p="x-10px" m="y-10px">
      <div w="full" h="0" border="b-1 b-gray-ededed"></div>
    </div>
  </div>
</template>
