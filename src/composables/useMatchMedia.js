import { onMounted, onUnmounted, ref } from 'vue';

/**
 * @param {number} num default 768
 * @param {"min" | "max"} maxOrMin default min
 */
export function useMatchMedia(num = 768, maxOrMin = 'min') {
  const isMatches = ref(false);

  const phoneMediaQuery = ref(null);

  phoneMediaQuery.value = window.matchMedia(`(${maxOrMin}-width: ${num}px)`);

  const handleMediaChange = () => {
    isMatches.value = phoneMediaQuery.value.matches;
  };

  onMounted(() => {
    if (phoneMediaQuery.value === null) return;
    if ('addEventListener' in phoneMediaQuery.value) {
      phoneMediaQuery.value.addEventListener('change', handleMediaChange);
    } else {
      phoneMediaQuery.value.addListener(handleMediaChange);
    }
    handleMediaChange();
  });

  onUnmounted(() => {
    if ('addEventListener' in phoneMediaQuery.value) {
      phoneMediaQuery.value.removeEventListener('change', handleMediaChange);
    } else {
      phoneMediaQuery.value.removeListener(handleMediaChange);
    }
  });

  return {
    isMatches,
  };
}
