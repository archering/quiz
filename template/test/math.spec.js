const assert = require('chai').assert;
const math = require("../src/math");


describe("matn.sum函数的测试 \r\n",function(){

    it("没有输入参数的情况下，返回0",function(){
        assert.equal(math.sum(),0);
    });

    it("输入第一个参数为10的情况下，返回10",function(){
        assert.equal(math.sum(10),10);
    });

    it("输入第一个参数为不为数字类型的情况下，返回NaN",function(){
        assert.isNaN(math.sum({}),NaN);
    });    

});

describe("matn.minus函数的测试 \n\r",function(){

    it("没有输入参数的情况下，math.minus() 返回0",function(){
        assert.equal(math.minus(),0);
    });

    it("输入第一个参数为10,第二个参数为空的情况下，math.minus(10) 返回10",function(){
        assert.equal(math.minus(10),10);
    });

    it("输入第一个参数为不为数字类型的情况下，返回NaN",function(){
        assert.isNaN(math.minus({}),NaN);
    });    

});