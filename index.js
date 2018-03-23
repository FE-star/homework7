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
    email: /^(\S+)@(\S+)\.(com|org|cn|gov)$/,
    url: /^(https?):\/\/(\w\.?)*$/,
    ipv4: /^(0.0.0.0|((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|[1-9]).)((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d).){2}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d))$/,
    idcard: /^([1-9]\d{5})(19\d{2}|20[0-1][0-8])((0[1-9])|(1[0-2]))(([0-2]\d|3[0-1]))(\d{3})([\dXY])$/,
};