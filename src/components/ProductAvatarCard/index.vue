<script setup></script>

<template>
  <!-- h 335 px -->
  <div w="207px" shadow="~" border="rounded-10px" overflow="hidden" transform="translate-z-0" bg="white">
    <div w="full" h="235px" bg="no-repeat cover center gray-ededed" :style="{ backgroundImage }"></div>

    <div w="full" h="min-100px" p="x-10px y-14px">
      <div flex="~ i-center" w="full" m="b-5px">
        <p text="14px" font="bold" m="r-10px">巧巧💕缺單單🥺</p>
        <SvgIcon name="verified" display="inline-block" w="16px" h="16px" text="blue-500" />
      </div>

      <div flex="~ i-center" w="full" m="b-20px">
        <ul flex="~ i-center" m="r-10px">
          <li v-for="i in 5" :key="i" flex="~ j-center i-center" w="16px" h="16px" overflow="hidden">
            <SvgIcon name="star" display="inline-block" w="18px" h="18px" text="yellow-500" />
          </li>
        </ul>
        <p text="12px gray-bebebe">(715)</p>
      </div>

      <div flex="~ i-center" w="full">
        <p text="14px pink-ff729d" font="bold">150幣<span display="inline-block" m="x-6px">/</span>局</p>
      </div>
    </div>
  </div>
</template>

<style></style>
