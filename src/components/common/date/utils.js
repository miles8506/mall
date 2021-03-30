export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  };
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    };
  };
  return fmt;
};
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

// 使用方式：
// format() {
//   let date = new Date();
//   return formatDate(date, "yyyy-MM-dd");
//   第二個參數 可以放入時分秒 ex: yyyy-MM-dd hh-mm-ss
// },

