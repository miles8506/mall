import { request } from './request';
export function DetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function Recommend() {
  return request({
    url: '/recommend',
  })
}


//goodInfo
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
  };
};


//shopInfo
export class shopInfo {
  constructor(data) {
    this.logo = data.shopInfo.shopLogo;
    this.name = data.shopInfo.name;
    this.fans = data.shopInfo.cFans;
    this.sells = data.shopInfo.cSells;
    this.score = data.shopInfo.score;
    this.goodsCount = data.shopInfo.cGoods;
  };
};


// params
export class params {
  constructor(data) {
    this.images = data.itemParams.info.images ? data.itemParams.info.images[0] : '';
    this.table = data.itemParams.rule.tables[0];
    this.info = data.itemParams.info.set;
  }
}