<template>
  <div class="picker">
    <div class="select-day">
      <div
        class="day"
        v-for="(item,index) in deliveryTimeList"
        :key="index"
        :class="nowDay===index?'active':''"
        @click="nowDay = index;"
      >{{item.day}}</div>
    </div>
    <div class="select-time">
      <!-- <div v-for="(item,index) in deliveryTimeList" :key="index"> -->
      <div v-if="nowDay===0">
        <div
          @click="clickTime('现在发货')"
          class="time"
          :class="'现在发货'===selectTime&&nowDay===selectDay?'select':''"
          :style="{color:('现在发货'===selectTime && nowDay===selectDay?color:'')}"
        >
        <div class="iconflex">
          <span class="time-text lefttext">现在发货</span>
          <!-- <icon v-show="'现在发货'===selectTime&&nowDay===selectDay" type="success"></icon> -->
          <span :style="{background:color}" v-show="'现在发货'===selectTime&&nowDay===selectDay" class="demo2"></span>
          </div>
        </div>
        <div
          class="time"
          :class="i==selectTime&&nowDay===selectDay?'select':''"
          :style="{color:(i==selectTime && nowDay===selectDay?color:'')}"
          v-for="(i,index) in deliveryTimeList[nowDay].timeList"
          @click="clickTime(i)"
          :key="index"
        >
          <div class="iconflex">
          <span class="time-text">{{i}}</span>
          <!-- <icon v-show="i==selectTime&&nowDay===selectDay?'select':''" type="success"></icon> -->
           <span :style="{background:color}" v-show="i==selectTime&&nowDay===selectDay?'select':''" class="demo2"></span>
          </div>
        </div>
      </div>
      <div v-if="nowDay!==0">
        <div
          class="time"
          :class="i==selectTime&&nowDay===selectDay?'select':''"
          :style="{color:(i==selectTime && nowDay===selectDay?color:'')}"
          v-for="(i,index) in deliveryTimeList[nowDay].timeList"
          @click="clickTime(i)"
          :key="index"
        >
          <div class="iconflex">
          <span class="time-text">{{i}}</span>
          <!-- <icon v-show="i==selectTime&&nowDay===selectDay?'select':''" type="success"></icon> -->
           <span :style="{background:color}" v-show="i==selectTime&&nowDay===selectDay?'select':''" class="demo2"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"vuePicker",
  props:{
    color: {
      type: String,
      default: '#fabe00'
    }
  },
    data() {
        return {
        deliveryTime: "",
        showDelivery: false,
        deliveryTimeList: [{ day: "", timeList: "" }],
        nowDay: 0,
        selectTime: '现在发货',
        selectDay: 0
        };
    },
    created() {
     this.getDliveryTime();
    },
    mounted() {},
    methods: {
    clickTime(text) {
      this.selectTime = text;
      this.deliveryTime = this.deliveryTimeList[this.nowDay].day + text;
      this.selectDay = this.nowDay;
      //使用 this.$emit('input',data)改变父组件中v-model绑定的属性值
      this.$emit('input',[this.deliveryTimeList[this.selectDay].day,text]);
      this.$emit('select-time');
    },
    //计算配送时间
    getDliveryTime() {
      //获取星期几
      let date = new Date();
      let week = date.getDay();
      let today = "";
      let nextDay = "";
      let tomorrowDay = "";
      let deliveryTimeList = [];
      if (week == 0) {
        today = "今天（周日）";
        nextDay = "明天（周一）";
        tomorrowDay="后天（周二）";
      } else if (week == 1) {
        today = "今天（周一）";
        nextDay = "明天（周二）";
        tomorrowDay="后天（周三）";
      } else if (week == 2) {
        today = "今天（周二）";
        nextDay = "明天（周三）";
        tomorrowDay="后天（周四）";
      } else if (week == 3) {
        today = "今天（周三）";
        nextDay = "明天（周四）";
        tomorrowDay="后天（周五）";
      } else if (week == 4) {
        today = "今天（周四）";
        nextDay = "明天（周五）";
        tomorrowDay="后天（周六）";
      } else if (week == 5) {
        today = "今天（周五）";
        nextDay = "明天（周六）";
        tomorrowDay="后天（周日）";
      } else if (week == 6) {
        today = "今天（周六）";
        nextDay = "明天（周日）";
        tomorrowDay="后天（周一）";
      }
      //获取时间段
      let timeDate = new Date(date.getTime() + 3600000);
      let todayList = getTimeList(timeDate.getHours(), timeDate.getMinutes());
      deliveryTimeList.push({ day: today, timeList: todayList });
      let nextDayList = getTimeList(9, 0);
      deliveryTimeList.push({ day: nextDay, timeList: nextDayList });
      deliveryTimeList.push({ day: tomorrowDay, timeList: nextDayList });
      this.deliveryTime = ["今天（周六）","现在发货"];
      this.$emit('input', this.deliveryTime);
      this.deliveryTimeList = [];
      this.deliveryTimeList = deliveryTimeList;
      function getTimeList(hour, minut) {
        let timeList = [];
        let startTime = hour < 9 ? 9 : hour;
        if (minut < 60) {
          for (let i = 0; i < 21 - startTime; i++) {
            for (let j = 0; j < 2; j++) {
              if (j % 2 === 0) {
                timeList.push(
                  startTime + i + ":00" + "-" + (startTime + i + 1) + ":00"
                );
              }
            }
          }
        } 
        return timeList;
      }
    }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.picker{
  height: 260px;
  overflow: hidden;
  .select-day {
    background-color: #F0F0F0;
    height: 100%;
    float: left;
    width: 40%;
    .day {
      font-size: 16px;
      line-height: 50px;
      text-align: center;
      &.active {
        background-color: #fff;
        // color: #763FDF;
      }
    }
  }
  .select-time {
    height: 100%;
    background-color: #fff;
    padding: 0 20px;
    overflow-y: auto;
    .time {
      font-size: 15px;
      line-height: 50px;
      border-bottom: 2px solid #eee;
      // &.select {
        // color: #763FDF;
      // }
      i {
        float: right;
        font-size: 15px;
        color: #ff4a00;
        margin-top: 26px;
      }
      .iconflex{
        display: flex;
        justify-content: space-between;
      }
    }
    // .time-text{
    //   display: inline-block;
    //   width: calc( 100% - 50px);
    //   margin-left: 20px;
    //   text-align: left;
    // }
      .demo2 {
        width:20px;
        height:20px;
        border-radius:20px ;
        // background:#763FDF;
        display:inline-block;
        position: relative;
        top: 14px;
    }
    
    .demo2:before, .demo2::after {
        content:"";
        height:14px;
        width:3px;
        border-radius: 5px;
        display:block;
        background:white;
        position: absolute;
        top:3px;/*40-6=34*/
        left:11px;/*make the two rects in the middle of the cycle */
        transform:rotate(45deg);    
        -ms-transform:rotate(45deg);    
    }
    .demo2::before {
        height:8px;
        transform: rotate(-45deg);
        -ms-transform:rotate(-45deg);
        position: absolute;
        top:9px;/*40-18=12  */
        left:4px;       
    }
  }
}
</style>
