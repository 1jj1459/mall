<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activestyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"rgb(19,34,122)"
    }
  },
  data() {
    return {

    }
  },
  methods: {
    itemclick(){
      this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path==this.path
    },
    activestyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>
