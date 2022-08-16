<script setup>
  import HotTItle from '@/components/global/HotTItle.vue';
  import ProductAvatarCard from '@/components/ProductAvatarCard/index.vue';
  import SkillListLayout from './SkillListLayout.vue';
</script>

<template>
  <div>
    <HotTItle m="b-15px">
      <slot></slot>
    </HotTItle>

    <SkillListLayout>
      <li v-for="i in 10" :key="i" m="l-2px r-20px last-of-type:r-2px">
        <ProductAvatarCard />
      </li>
    </SkillListLayout>
  </div>
</template>
