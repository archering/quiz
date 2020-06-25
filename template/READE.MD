# 使用说明

依赖环境

    nodejs  版本 10+

安装

    npm i 

或者一步步的安装

    npm i mocha --save-dev

可选断言库(默认使用nodejs断言库)

    npm install chai --save-dev


启动，使用  （会自动监听src下面文件的变动进行测试）

    npm  run test

然后按照BDD的模式进行 开发，先写测试用例--> 测试 --> 编写函数完善 --> 再测试 



BDD  development flow：

1，An initial spec is written, with tests for the most basic functionality.
2，An initial implementation is created.
3，To check whether it works, we run the testing framework Mocha (more details soon) that runs the spec. While the functionality is not complete, errors are displayed. We make corrections until everything works.
4，Now we have a working initial implementation with tests.
5，We add more use cases to the spec, probably not yet supported by the implementations. Tests start to fail.
6，Go to 3, update the implementation till tests give no errors.
7，Repat steps 3-6 till the functionality is ready.
