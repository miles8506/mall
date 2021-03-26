<template>
  <div class="detail-params">
    <table>
      <tr
        v-for="(item, index) in params.table"
        :key="index"
        class="params-table"
      >
        <td v-for="item in params.table[index]" :key="item">
          {{ item }}
        </td>
      </tr>
    </table>
    <table>
      <tr v-for="(item, index) in params.info" :key="index" class="detail-info">
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
.detail-params {
  padding: 0 10px;
  border-top: 5px solid #e7e7e9;
  background-color: #fff;
}
table {
  width: 100%;
}
.params-table {
  width: 100%;
  text-align: center;
}
.params-table td {
  width: 85px;
  padding: 15px 0;
}
.params-table:nth-child(1) td {
  padding-top: 40px;
}
.detail-info td {
  height: 60px;
}

.detail-info:nth-child(1) td {
  padding: 40px 0 20px;
}

.detail-info td:nth-child(1) {
  width: 100px;
  padding-left: 17px;
}
.detail-info td:nth-child(2) {
  color: var(--color-tint);
}
</style>