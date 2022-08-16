<script setup>
  const props = defineProps({
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
  });

  const symbolId = computed(() => {
    let svgNamePath = props.name;
    if (!props.name.includes('/')) svgNamePath = '/' + svgNamePath;
    return '#' + svgNamePath;
  });
</script>

<template>
  <svg aria-hidden="true" class="fill-current">
    <use :href="symbolId" />
  </svg>
</template>
