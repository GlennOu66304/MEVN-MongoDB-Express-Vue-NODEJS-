// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity均可对数据库操做形成影响，但Model比Entity更具操做性。
const mongoose = require('mongoose');
// 链接数据库 若是不本身建立 默认test数据库会自动生成
mongoose.connect('mongodb://127.0.0.1:27017'); // 地址跟第一步的地址对应。

// 为此次链接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
    account : String,
    password : String
});

/************** 定义模型Model **************/
const Models = {
    Login : mongoose.model('Login',loginSchema)
}

module.exports = Models;