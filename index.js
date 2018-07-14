/*
 * @Author: kael
 * @Date: 2018-02-14 17:50:28
 * @Last Modified by: kael
 * @Last Modified time: 2018-03-10 22:49:41
 */

module.exports = {
  // 移动号码/固定号码/特殊号码
  mobile: /(^(1[3-8]\d{9})$)|(^(0\d{2,3}-\d{7,8}(-\d{3})?)$)|(^\d{3,5}$)/,
  qq: /^[1-9]\d{4,10}$/,
  number: /^[-+]?(?:\d*|(?=\d))((\.\d+)|(\d\.\d*))?$/,
  // [-\w.]+ : @之前的内容：字母、数字、下划线、-、.
  // [-a-zA-Z\d.]+: @之后的内容：字母、数字、-、.
  // ((?<!\.)\.): .前面不能有.
  // [a-zA-Z\d]{2,6}: .之后的内容：字母、数字，2到6位
  email: /^[-\w.]+@[-a-zA-Z\d.]+((?<!\.)\.)[a-zA-Z\d]{2,6}$/,
  // (http|https|ftp|ftps):\/\/ : 协议 ://
  // (([-\w]+).)+[-\w/]+ : 域名
  // (:[\d]{1,5})* ： 端口
  // (\?[-\w]=([\dA-Za-z]*)(&[-\w]=([\dA-Za-z]*))*)* ： 参数
  url: /^(http|https|ftp|ftps):\/\/(([-\w]+).)+[-\w/]+(:[\d]{1,5})*(\?[-\w]=([\dA-Za-z]*)(&[-\w]=[\dA-Za-z\s]*)*)*$/,
  // 每一组数满足以下规则：
  // 1、任何一个1位或2位数字，即0-99；
  // 2、任何一个以1开头的3位数字，即100-199；
  // 3、任何一个以2开头、第2位数字是0-4之间的3位数字，即200-249；
  // 4、任何一个以25开头，第3位数字在0-5之间的3位数字，即250-255。
  // 中间以点隔开
  ipv4: /^((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5])\.){3}(\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5])$/,
  // 身份证；15位：6位地址编码+6位出生日期+3位顺序号
  // 18位：6位地址编码+8位出生日期+3位顺序号+1位校验位
  // [1-9]\d{5}：地址编码
  // (18|19|[23]\d)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])： 出生日期
  // \d{3}[0-9Xx]?：顺序位+校验位
  idcard: /^[1-9]\d{5}(18|19|20)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])\d{3}[0-9Xx]?$/,
};
