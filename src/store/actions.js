export default {
  gooditem(context, goodlist) {
    const goods = context.state.goodsitem.find(item => item.iid === goodlist.iid);
    if (goods) {
      context.commit('addCount', goods);
    } else {
      context.commit('addGoods', goodlist);
    }
  }
}