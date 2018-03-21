/*
 * @Author: kael 
 * @Date: 2018-02-14 17:35:48 
 * @Last Modified by: kael
 * @Last Modified time: 2018-03-10 22:48:51
 */

const assert = require('assert');
const RegExps = require('..');

describe('正则表达式', () => {
  it('匹配手机号码', () => {
    [
      '13800000000',
      '15712341234',
      '17012341234',
      '18012341234'
    ].forEach((mobile) => {
      assert.ok(RegExps.mobile.test(mobile));
    });
    [
      '1873482665',
      '23800000000',
      '1471234l234',
      '147000000000',
      '150-123-41234',
      '150-1234-1234',
      '150.1234.1234'
    ].forEach((mobile) => {
      assert.ok(!RegExps.mobile.test(mobile));
    });
  });

  it('匹配 QQ 号', () => {
    [
      '10000',
      '987654321',
      '12345678900'
    ].forEach((qq) => {
      assert.ok(RegExps.qq.test(qq));
    });
    [
      '1000',
      '0987654321',
      '123456789000'
    ].forEach((qq) => {
      assert.ok(!RegExps.qq.test(qq));
    });
  });

  it('匹配数字', () => {
    [
      '5',
      '+5',
      '+5.0',
      '-5',
      '-5.0',
      '.5',
      '0.5',
      '1.5',
      '-.5',
      '+.5',
      '10000',
      '10000.',
      '100.00'
    ].forEach((number) => {
      assert.ok(RegExps.number.test(number));
    });
    [
      '.5.5',
      '1.5.5',
      '--0.5',
      '++0.5',
      '0.+5',
      '0.5+',
      '+-0.5'
    ].forEach((number) => {
      assert.ok(!RegExps.number.test(number));
    });
  });

  it('匹配邮箱', () => {
    [
      '12asdf345@163.com',
      '12345@qq.com',
      'balabala@163.com',
      'wx.wagn@email.cn',
      'wx.wang@al.com.cn'
    ].forEach((value) => {
      assert.ok(RegExps.email.test(value));
    });
    [
      '_123sdf@qq.com',
      '12345#qq.com',
      ' 123asdf@126.com'
    ].forEach((value) => {
      assert.ok(!RegExps.email.test(value));
    });
  });

  it('匹配 url', () => {
    [
      'https://www.qq.com',
      'http://i.wang.com'
    ].forEach((value) => {
      assert.ok(RegExps.url.test(value));
    });
    [
      'httpss://www.baidu.com',
      'awed://www.baidu.com',
      'http//www.qq.com'
    ].forEach((value) => {
      assert.ok(!RegExps.url.test(value));
    });
  });

  it('匹配 IPv4', () => {
    [
      '0.0.0.0',
      '127.0.0.1',
      '1.1.1.255',
      '255.255.255.254'
    ].forEach((value) => {
      assert.ok(RegExps.ipv4.test(value));
    });
    [
      '0.192.167.0',
      '256.0.0.0',
      '255.255.255.256',
      '192.168.0.1255'
    ].forEach((value) => {
      assert.ok(!RegExps.ipv4.test(value));
    });
  });
  it('匹配身份证号码', () => {
    [
      '350301198906180060',
      '142202199801254866',
      '14245219980125486X',
      '11255219980125486Y'
    ].forEach((value) => {
      assert.ok(RegExps.idcard.test(value));
    });
    [
      '142202189201103589X',
      '350301298906180060',
      '350301298906310060',
      '350301201902088945',
      '35030129890618006Y',
      '3503012989061800666',
    ].forEach((value) => {
      assert.ok(!RegExps.idcard.test(value));
    });
  });
});
