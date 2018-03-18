/*
 * @Author: kael 
 * @Date: 2018-02-14 17:50:28 
 * @Last Modified by: kael
 * @Last Modified time: 2018-03-10 22:49:41
 */

// 校验区域码
var checkProv = function (val) {
  var pattern = /^[1-9][0-9]/;
  var provs = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门" };
  if (pattern.test(val)) {
    if (provs[val]) {
      return true;
    }
  }
  return false;
}

//  校验日期
var checkDate = function (val) {
  var pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
  if (pattern.test(val)) {
    var year = val.substring(0, 4);
    var month = val.substring(4, 6);
    var date = val.substring(6, 8);
    var date2 = new Date(year + "-" + month + "-" + date);
    if (date2 && date2.getMonth() == (parseInt(month) - 1)) {
      return true;
    }
  }
  return false;
}

// 校验 code 码
var checkCode = function (val) {
  var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
  var code = val.substring(17);
  if (p.test(val)) {
    var sum = 0;
    for (var i = 0; i < 17; i++) {
      sum += val[i] * factor[i];
    }
    if (parity[sum % 11] == code.toUpperCase()) {
      return true;
    }
  }
  return false;
}

// 校验身份证
var checkID = function (val) {
  if (checkCode(val)) {
    var date = val.substring(6, 14);
    if (checkDate(date)) {
      if (checkProv(val.substring(0, 2))) {
        return true;
      }
    }
  }
  return false;
}

module.exports = {
  mobile: /^1[3|4|5|7|8|9][0-9](-?)\d{4}(-?)\d{4}$/,
  qq: /^[1-9]\d{4,10}$/,
  number: /^[-+]?(?:\d*|(?=\d))(\.\d*)?$/,
  email: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
  url: /^https?\:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i,
  /*
   * 1.1.1.1 四段 [0, 255]
   * 第一段不能为0
   * 每一段不能以0开头
   */
  ipv4: /^([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$/gi,
  idcard: checkID,
};