export default {
  goodsImgInfo(state, Img) {
    state.goodsImg = Img;
  },
  addCount(state, goods) {
    goods.count += 1;
  },
  addGoods(state, goodlist) {
    goodlist.count = 1;
    goodlist.status = true;
    state.goodsitem.push(goodlist);
  },
  setStatus(state, statusBox) {
    state.goodsitem[statusBox.index].status = statusBox.itemStatus;
  },

  // CartTabbar 全選
  setStatusFalse(state) {
    state.goodsitem.forEach(item => {
      item.status = false;
    });
  },
  setStatusTrue(state) {
    state.goodsitem.forEach(item => {
      item.status = true;
    })
  }
}