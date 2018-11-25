/*
 * @Author: kael 
 * @Date: 2018-02-14 17:50:28 
 * @Last Modified by: kael
 * @Last Modified time: 2018-07-10 16:50:09
 */

module.exports = {
  mobile: /^1(([358]\d{9})|(7[135678]\d{8})|(4[5678]\d{8}))$/,
  qq: /^[1-9]\d{4,10}$/,
  number: /^[-+]?(?:\d+(?:\.\d*)|(?:\d*\.)?\d+)$/,
  email: /^\w+([-_.]\w)*@(\w+[-.])+\w{2,4}$/,
  url: /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#])+)?$/,
  ipv4: /^(((2((5[0-5]{1})|([0-4]\d{1})))|(1\d{2})|([1-9]?\d{1}))\.){3}((2((5[0-5]{1})|([0-4]\d{1})))|(1\d{2})|([1-9]?\d{1}))$/,
  idcard: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9xX]$/,
};
