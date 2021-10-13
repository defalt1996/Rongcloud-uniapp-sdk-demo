# Rongcloud-uniapp-sdk-demo
A demo of Rongcloud uniapp sdk integration for compiling debug-apk in Android Studio  

这是一个为了给uniapp在Android平台打出debug-apk的demo (可断点可全量输出日志的apk).里边集成了融云uniapp原生层的源码作为基座. (因为HbuilderX云打包的apk都是release版, 不能全量输出log以及添加debugger)

## 基本所需数据:

* **我的Dcloud账号 (Uniapp的开发者后台):**  
17600809603@163.com  
pwd: 1996376gzk
* **demo中的项目名称:**  
__UNI__82E3102
* **Appkey (Uniapp):**   
2e31b6f1658ddd083c6bbd4ab74cebb5
* **package name:**  
com.defalt.for_building_uniapp_project
* **项目携带keystore的SHA1签名:**  
EC:C3:E4:D3:27:FD:D1:7F:C8:CA:FA:8F:B2:2E:12:21:E9:35:EA:11

## 怎么玩
* 如果客户本地有原生打包环境, 那么让他出debug-apk, 正常跑就可以.
* 如果客户没有原生打包环境, 可以:  
1. 指导客户使用这个demo, 把demo clone先下来, 里边的配置都不用动, 全部使用我的账号和配置数据. 让他从Hbuilder里生成本地离线打包资源(要把资源文件夹名改成__UNI__82E3102, 和我后台的项目对应上), 放入app/assets/apps.进app/assets/__UNI__82E3102/www/manifest.json.同样修改掉项目id和项目名即可. 然后尝试打debug包.  
2. 如果客户不愿意搞这个demo, 那么只能和他要项目源码, 放入hbuilder里生成本地离线打包资源. 其余步骤都和上述一致. 


## 吐槽:
目前Uniapp小槽点:
1. 客户可能都是web开发出身, 对Android开发并不了解, 完全不具备AS和adb的环境. 用HbuilderX打出的包是release包, 而且客户一般只会查H5那一层的log, Android原生层log是按照release包的输出量打的, 比较不完整, 难以排查问题. 
2. 如果客户已经配置好了原生开发环境 (例如这个项目), 且了解Android开发.就可以直接打debug包, 这样日志输出表现是一致的. 
