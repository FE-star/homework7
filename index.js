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
  email: /^(\w+)@(\w+)\.(com|org|cn|gov)$/,
  url: /^(http(s?)|ftp|mailto|ldap|file|news|gopher|telnet):\/\/([\w\-]+\.)+([\w\-]+)(\?([\w]+=[\w]+\&)+([\w]+=[\w]+))?(#\S*)?$/,
  ipv4: /^((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
  // 一条正则撑不住了，还要控制大小月和闰年……
  idcard: /^(\d{6})(((18|19|20)\d{2})(0[1-9]|1[1-2]))(\d{2})(\d{4})$/,
};