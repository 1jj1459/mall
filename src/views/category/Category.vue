<template>
  <div class="wrapper">
    <div>
      <button @click="btnClick">按钮</button>
      <div @click="divClick">呵呵呵呵</div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    };
  },
};
</script>

<style></style>
