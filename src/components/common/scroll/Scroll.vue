<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  updated() {
    // 创建BScroll 对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad:this.pullUpLoad
    });
    // 监听滚动的位置
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit('scrollC', position);
    });
    // 监听上拉加载
    this.scroll.on("pullingUp",()=>{
       this.$emit('pullingUp');
      // console.log("上拉加载");
    })
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    }
  },
};
</script>

<style></style>
