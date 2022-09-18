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
  email:
    /^[A-Za-z0-9]+([A-Za-z0-9_-])*@[A-Za-z0-9]+([A-Za-z0-9_-])*(\.[A-Za-z0-9_-]+)*\.(com|cn|net|org|gov)$/,
  url: /^(http(s)?\:\/\/)?([A-Za-z0-9]+[A-Za-z0-9_-])+(\.([A-Za-z0-9]+[A-Za-z0-9_-])+)+(\/[A-Za-z0-9_-]+)*(\/)?(\?[A-Za-z0-9]+([A-Za-z0-9_-])*=\w+(\&[A-Za-z0-9]+([A-Za-z0-9_-])*=\w)*)?$/,
  ipv4: /^.$/,
  idcard: /^.$/,
}