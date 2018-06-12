<template>
  <div class="progressBar">

    <progress :percent="percent" color="pink" activeColor="#ea5a49" />
    <p class="desc">{{year}}已经过去{{days}}天，{{percent}}%</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods: {
    isLeapYear () {
      const year = new Date().getFullYear();
      if (year % 400 === 0) {
        return true;
      } else if (year % 4 === 0 && year % 100 !== 0) {
        return true;
      } else {
        return false;
      }
    },
    getDarOfYear () {
      return this.isLeapYear() ? 366 : 365;
    }
  },
  computed: {
    year () {
      return new Date().getFullYear();
    },
    days () {
      let start = new Date();
      start.setMonth(0);
      start.setDate(1);
      // start 就是今年第一天
      let offset = new Date().getTime() - start.getTime();
      return parseInt(offset / 1000 / 60 / 60 / 24) + 1;
    },
    percent () {
      return (this.days * 100 / this.getDarOfYear()).toFixed(1)
    }
  }
};
</script>

<style lang="scss" scoped>
.progressBar {
  width: 100%;
  progress {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .desc {
    font-size: 26rpx;
    color: #666;
    text-align: center
  }
}
</style>
