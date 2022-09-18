/*
 * @Author: kael 
 * @Date: 2018-02-14 17:35:48 
 * @Last Modified by: kael
 * @Last Modified time: 2018-07-10 16:50:29
 */

const assert = require('assert');
const RegExps = require('..');

describe('正则表达式', () => {

  it('匹配手机号码', () => {
    [
      '13800000000',
      '14712341234',
      '15012341234',
    ].forEach((mobile) => {
      assert.ok(RegExps.mobile.test(mobile));
    });
    [
      '23800000000',
      '1471234l234',
      '147000000000',
      '150-123-41234',
      '150-1234-1234',
    ].forEach((mobile) => {
      assert.ok(!RegExps.mobile.test(mobile));
    });
  });

  it('匹配 QQ 号', () => {
    [
      '10000',
      '987654321',
      '12345678900',
    ].forEach((qq) => {
      assert.ok(RegExps.qq.test(qq));
    });
    [
      '1000',
      '0987654321',
      '123456789000',
    ].forEach((qq) => {
      assert.ok(!RegExps.qq.test(qq));
    });
  });

  it('匹配数字', () => {
    [
      '5',
      '+5',
      '-5',
      '.5',
      '0.5',
      '1.5',
      '-.5',
      '+.5',
      '10000',
      '10000.',
      '100.00',
    ].forEach((number) => {
      assert.ok(RegExps.number.test(number));
    });
    [
      '.5.5',
      '1.5.5',
      '',
      '.',
      '+',
      '-',
      '+.',
      '-.',
      '.+',
      '.-',
    ].forEach((number) => {
      assert.ok(!RegExps.number.test(number));
    });
  });

  it('匹配邮箱', () => {
    const validEmails = [
      '12345@qq.com', // 数字邮箱
      'leopen@qq.com', // 字符邮箱
      'leopen-123_@qq.com', // 组合邮箱
      'leopen@mail.dd.dd.qq.com', // 支持多级域名
    ]
    validEmails.forEach((value) => {
      assert.ok(RegExps.email.test(value))
    })
    const invalidEmails = [
      'leopen#qq.com.cn', // 不可缺少 @
      '_leopen@xxx.com', // 用户名不能以特殊字符开头
      '@qq.com', // 用户名不能为空
      'leopen@.com', // 主机名不能为空
      'leopen@xxxcom', // 域名不能缺少 .
      'leopen@xxx.', // 不能缺少域名后缀
      'leopen@xxx.sdfdf', // 不能使用不合法域名后缀
      'leopen@xxx..com', // 域名不能存在连续的 .
    ]
    invalidEmails.forEach((value) => {
      assert.ok(!RegExps.email.test(value))
    })
  });

  it('匹配 url', () => {
    const validUrl = [
      'http://www.qq.com', // 支持 http
      'https://www.qq.com', // 支持 https
      'www.qq.com', // 支持无头
      'qq.com', // 支持无头
      'blog.sss.xd', // 支持自定义域名
      'blog.sss.xd/sdm', // 支持路径
      'blog.sss.xd/sdm/', // 支持尾部 /
      'blog.sss.xd/sdm/?lo=x', // 支持query
      'blog.sss.xd/sdm/?lo=x&df=3', // 支持多query
    ]
    validUrl.forEach((value) => {
      assert.ok(RegExps.url.test(value))
    })
    const invalidUrl = [
      'http//www.qq.com', // 协议不能缺少 ：
      'cc://www.qq.com', // 不支持非 http https 协议
      '.com', // 主机名不能为空
      'xxxcom', // 域名不能缺少 .
      'xxx.', // 不能缺少域名后缀
      'xxx..com', // 域名不能存在连续的 .
      'xxx.com//df', // 域名不能存在连续的 /
    ]
    invalidUrl.forEach((value) => {
      assert.ok(!RegExps.url.test(value))
    })
  });

  it('匹配 IPv4', () => {
    [
      '127.0.0.1',
    ].forEach((value) => {
      assert.ok(RegExps.ipv4.test(value));
    });
    [
      '256.0.0.0',
    ].forEach((value) => {
      assert.ok(!RegExps.ipv4.test(value));
    });
  });

  it('匹配身份证号码', () => {
    [
      '350301198906180060',
    ].forEach((value) => {
      assert.ok(RegExps.idcard.test(value));
    });
    [
      '350301298906180060',
      '350301298906310060',
      '35030129890618006Y',
      '3503012989061800666',
    ].forEach((value) => {
      assert.ok(!RegExps.idcard.test(value));
    });
  });

});
