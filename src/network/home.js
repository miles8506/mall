import { request } from './request';
// banner feature
export function getHomeData() {
  return request({
    url: '/home/multidata',
  });
};
// 
export function getGoodsData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}