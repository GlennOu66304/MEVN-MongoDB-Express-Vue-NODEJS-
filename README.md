### 1.Instruction to build the project:  
1.Create the Mongodb enviroment:  
[Install MongoDB Community Edition on macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)  
[mongodb/homebrew-brew](https://github.com/mongodb/homebrew-brew)  
2.[Homebrew国内如何自动安装（国内地址）](https://zhuanlan.zhihu.com/p/111014448)  
3.You just add the code below into the （proxy） config/index.js to see the change:
```
proxyTable: {
        '/api': {
        target: 'http://localhost:8088/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
```



### Resourcelist:      

1.Project guide:   
[MEVN 架构（MongoDB + Express + Vue + NODEJS）制做网站](https://www.shangmayuan.com/a/bacc5c7c7d2147bf8cf09568.html)  
