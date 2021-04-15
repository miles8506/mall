export default {
  goodsImgInfo(state, Img) {
    state.goodsImg = Img;
  },
  addCount(state, goods) {
    goods.count += 1;
  },
  addGoods(state, goodlist) {
    goodlist.count = 1;
    state.goodsitem.push(goodlist);
  }
}