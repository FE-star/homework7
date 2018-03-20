/*
 * @Author: kael 
 * @Date: 2018-02-14 17:50:28 
 * @Last Modified by: kael
 * @Last Modified time: 2018-03-10 22:49:41
 */

module.exports = {
  mobile: /^1\d{10}$/,
  qq: /^[1-9]\d{4,10}$/,
  number: /^[-+]?(?:\d*|(?=\d))(\.\d*)?$/,
  email: /^\w+@\w+(\.\w+)+$/,
  url: /^http[s]{0,1}:\/\/.+$/,
  ipv4: /^((2[0-4][0-9]\.)|(25[0-5]\.)|(1[0-9][0-9]\.)|([1-9][0-9]\.)|([0-9]\.)){3}((2[0-5][0-5])|(25[0-5])|(1[0-9][0-9])|([1-9][0-9])|([0-9]))$/,
  idcard: /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9a-z]$/i,
};