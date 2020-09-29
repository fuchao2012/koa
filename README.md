一、mysql8.0的学习
    1.下载后配置环境变量
    2.在mysql下的bin中打开cmd执行mysqld --initialize-insecure --user=mysql，目的是生成data文件
    3.安装mysql，在bin中打开cmd，执行mysqld -install，看到service successfully installed代表成功
    4.启动服务：net start MySQL
    5.登录MySQL：mysql -u root -p（因为之前没设置密码，所以密码为空，不用输入密码，直接回车即可）
    6.查询用户密码：select host,user,authentication_string from mysql.user;（最后面的分号不可省略）
    7.退出数据库：exit
    8.关闭服务：net stop MySQL
    9.todo:更新密码，创建新表，查询表，删除表，添加信息，更新信息，查询信息，删除信息

二.koa知识点记录
    1.模板引擎的引入要在router之前


--- 

1. 首先，ejs是一个模板语言，需要遵循模板的书写语法，比如引入其他模板使用的是 include(xxx) 这样的，详细的可以参考https://github.com/mde/ejs 官方解释
2. 其次有几个编程上的小问题希望同学自己能解决掉， 

* 1) 让程序在修改代码后自动重启
* 2）提交到GitHub的时候，需要增加一个,gitignore文件，保证我们的node_modules 不会上传上去，
* 3）Markdown也是一门模板语言，他的语法也可以去看一下，是程序猿之间沟通的重要方式~

调整好的代码会提交到你的仓库，希望先自己看文档解决，解决不了，再看我提交的，可行？ @Dave

