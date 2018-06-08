<template>
  <div class="mebox">
    <p>暑假</p>
    <div v-for="(item, index) in bookList" :key="index" style="padding:5px;">
      <p>{{item.title}}</p>
      <img :src="item.image" alt="">
    </div>

  </div>
</template>

<script>
import { GET } from '@/utils/request';

export default {
  data() {
    return {
      bookList: [], // 图书列表
    };
  },
  async created() {
    // const res = await GET('/book/list');
    const res = await GET('/login');
    this.bookList = res.list;
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 50px;
}
</style>


