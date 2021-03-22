import { request } from './request';
export function DetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class goodInfo {
  constructor(data) {
    //top
    this.title = data.itemInfo.title;
    this.price = data.itemInfo.price;
    this.oldPrice = data.itemInfo.oldPrice;
    this.discountDesc = data.itemInfo.discountDesc;
    this.discountColor = data.itemInfo.discountBgColor;
    //center
    this.sales = data.columns[0];
    this.save = data.columns[1];
    this.returnGoods = data.shopInfo.services[0].name;
    //bottomb
    this.sevenDayContent = data.shopInfo.services[2].name;
    this.sevenDayImg = data.shopInfo.services[2].icon;

    this.seventyTwoContent = data.shopInfo.services[3].name;
    this.seventyTwoDayImg = data.shopInfo.services[3].icon;
  }
}