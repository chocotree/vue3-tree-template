<script setup>
  import Swiper from 'swiper';
  import HotTItle from '@/components/global/HotTItle.vue';

  const swiperDom = ref(null);

  let swiper;

  const initSwiper = () => {
    swiper = new Swiper(swiperDom.value, {
      slidesPerView: 2,
      slidesPerGroup: 2,
      loopFillGroupWithBlank: true,
      spaceBetween: 15,
      loop: true,
    });
  };

  const destroySwiper = () => {
    if (!swiper) return;
    swiper.destroy();
  };

  onMounted(() => {
    initSwiper();
  });
  onUnmounted(() => {
    destroySwiper();
  });
</script>

<template>
  <div w="full">
    <HotTItle m="b-15px">熱評陪玩師</HotTItle>

    <div ref="swiperDom" class="swiper">
      <div class="swiper-wrapper">
        <div v-for="i in 13" :key="i" class="swiper-slide">Slide {{ i }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 50%;
    height: 250px;
    @apply rounded-10px;
    @apply bg-gray-ededed;
  }
</style>
