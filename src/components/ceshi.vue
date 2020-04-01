<template>
  <div class="hello">
    {{deliveryTime}}
    <vuePicker :color="color"  v-model="deliveryTime" @select-time="showDelivery = false" />
  </div>
</template>

<script>
export default {
  name:"ceshi",
    components: {
    },
    data() {
        return {
          color:"#fabe00",
          deliveryTime:""
        };
    },
    created() {},
    mounted() {},
    methods: {
      parentFn(data){
        this.type=data
      }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  height: 280px;
  position: absolute;
  bottom: 0;
}
</style>
