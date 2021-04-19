export default {
  gooditem(context, goodlist) {
    return new Promise((resolve, reject) => {
      const goods = context.state.goodsitem.find(item => item.iid === goodlist.iid);
      if (goods) {
        context.commit('addCount', goods);
        resolve('商品數量+1');
      } else {
        context.commit('addGoods', goodlist);
        resolve('已將商品增添至購物車');
      }
    })
  }
}