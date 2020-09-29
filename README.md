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