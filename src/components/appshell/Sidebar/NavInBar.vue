<script setup>
  const props = defineProps({
    iconName: {
      type: String,
      default: 'appShell/home',
    },
    to: {
      type: String,
      default: '/',
    },
  });
</script>

<template>
  <li w="full" h="55px" bg="hover:gray-1">
    <RouterLink :to="props.to" w="full" h="full" flex="~" items="center" p="l-20px" cursor="pointer">
      <SvgIcon :name="props.iconName" inline-block w="25px" h="25px" m="r-15px" />
      <slot></slot>
    </RouterLink>
  </li>
</template>

<style lang="postcss" scoped>
  .router-link-exact-active {
    @apply bg-gray-1;
  }
</style>
