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
  email: /^\w+@\w+\.\w{2,}$/,
  url: /^http(s)?:\/\/\w+\.\w+\.\w+$/,
  ipv4: /\b((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.|$)){4}\b/,
  idcard: /^\d{6}(1\d{3}|20[0-1]\d)(((0[469]|11)([0[1-9]|[12]\d|30))|((0[135789]|1[02])(0[1-9]|[12]\d|3[01]))|(02([0-1]\d|2[0-8])))\d{3}(X|x|\d)$/,
};