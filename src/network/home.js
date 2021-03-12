import { request } from './request';
export function getHomeData() {
  return request({
    url: '/home/multidata',
  });
};
// 步驟一：引入新的地址，但也是在home組件的關係，所以還是在home.js裡操作
export function getGoodsData(type, page) {
  return request({
    url: '/home/data',
    // 步驟二：在這裡並不是單純網址就可以獲取，而是以get形式，所以說要以params來去獲取相對應的資料
    params: {
      type: type,
      page: page,
    }
  })
}