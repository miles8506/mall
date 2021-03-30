<template>
  <div class="detailParams">
    <table>
      <tr
        v-for="(item, index) in params.table"
        :key="index"
        class="paramsTable"
      >
        <td v-for="(item, index) in params.table[index]" :key="index">
          {{ item }}
        </td>
      </tr>
    </table>
    <table>
      <tr v-for="(item, index) in params.info" :key="index" class="detailInfo">
        <td>{{ item.key }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "DetailParams",
  props: {
    params: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.detailParams {
  padding: 0 10px;
  border-top: 5px solid #e7e7e9;
  background-color: #fff;
}
table {
  width: 100%;
}
.paramsTable {
  width: 100%;
  text-align: center;
}
.paramsTable td {
  width: 85px;
  padding: 15px 0;
}
.paramsTable:nth-child(1) td {
  padding-top: 40px;
}
.detailInfo td {
  height: 60px;
}

.detailInfo:nth-child(1) td {
  padding: 40px 0 20px;
}

.detailInfo td:nth-child(1) {
  width: 100px;
  padding-left: 17px;
}
.detailInfo td:nth-child(2) {
  color: var(--color-tint);
}
</style>