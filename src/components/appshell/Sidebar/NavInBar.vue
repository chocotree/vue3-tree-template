<script setup>
  const props = defineProps({
    iconName: {
      type: String,
      default: 'appShell/home',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: '/',
    },
  });
</script>

<template>
  <li flex="~ i-center" w="full" h="55px" bg="hover:gray-ededed" :class="['nav_item', { active: props.isActive }]">
    <RouterLink :to="props.to" w="full" h="full" flex="~ i-center" p="l-20px" cursor="pointer">
      <SvgIcon :name="props.iconName" display="inline-block" w="25px" h="25px" m="r-15px" />
      <slot></slot>
    </RouterLink>
  </li>
</template>

<style lang="postcss" scoped>
  .nav_item {
    &.active {
      @apply bg-gray-ededed;
    }
  }
</style>
