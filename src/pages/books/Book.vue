<template>
  <div class="mebox">
    <p v-for="(item, index) in bookList" :key="index">{{item.title}}</p>

  </div>
</template>

<script>
import { GET } from '@/utils/request';
export default {
  data () {
    return {
      bookList:[],//图书列表
    };
  },
  async created () {
    const res = await GET('/book/list');
    this.bookList = res.list;
  }
};
</script>

<style scoped>

</style>


