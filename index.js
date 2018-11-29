/*
 * @Author: kael 
 * @Date: 2018-02-14 17:50:28 
 * @Last Modified by: kael
 * @Last Modified time: 2018-07-10 16:50:09
 */

module.exports = {
  mobile: /^1\d{10}$/,
  qq: /^[1-9]\d{4,10}$/,
  number: /^[-+]?(?:\d+(?:\.\d*)|(?:\d*\.)?\d+)$/,
  email: /^([A-Za-z0-9])+@([A-Za-z\d])+(\.[A-Za-z0-9]+)+$/,
  url: /^https?\:\/{2}[A-Za-z0-9]+(.([A-Za-z0-9])+)+$/,
  ipv4: /^([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2[0-4][0-9])|25[0-5])(.[0-9]|([1-9][0-9])|(1[0-9][0-9])|(2[0-4][0-9])|25[0-5]){3}$/,
  idcard: /^(\d){6}(19[0-9]{2}|(200[0-9]|201[0-8]))(0[1-9]|1[0-2])(([0-2][0-9])|3[0-1])\d{4}$/,
};