/*
 * @Author: kael 
 * @Date: 2018-02-14 17:50:28 
 * @Last Modified by: kael
 * @Last Modified time: 2018-07-10 16:50:09
 */

module.exports = {
  mobile: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
  qq: /^[1-9]\d{4,10}$/,
  number: /^[+-]?(\d+\.?\d*$|\d*\.\d+$)/,
  email: /^\w+@[A-Za-z0-9]+\.com$/,
  url: /^http[s]?:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+\.(org|com|cn|gov)$/,
  ipv4: /^((0|[1-9]|1\d{1,2}|2[0-4]\d|25[0-5])\.){3}(0|[1-9]|1\d{1,2}|2[0-4]\d|25[0-5])$/,
  idcard: {
    test: (value = '') => {
      const reg = /^\d{6}\d{4}(((0[13578]|1[02])([0-2]\d|3[01]))|((0[469]|11)([0-2]\d|30))|(02[0-2]\d))\d{3}[0-9X]{1}$/;
      if (reg.test(value)) {
        const year = parseInt(value.slice(6, 10), 10);
        const curMaxIdYear = new Date().getFullYear() - 18;
        return !(year > curMaxIdYear);
      }
      return false;
    }
  },
};