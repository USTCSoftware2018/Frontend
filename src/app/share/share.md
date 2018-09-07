#Sharemodule  
 
 
####基本使用方法
**使用内部组件方法** 
 
1. 在需要使用的下列组件的模块内导入shareModule即可使用
2. 对于页面被包含在appModule内的同学，建议先将构建一个惰性加载模块后再导入，不建议直接在appModule内导入
3. 若你写的页面并未包含多个组件（即不需要包含进模块中），那你可以忽略上一条了

**构建公共组建方法**  

1. 命令行进入share文件夹  
2. 命令行输入`ng g c 你要构建的组件`
3. 进入share.module.ts文件
4. 在exports数组内输入你创建的模块
5. 恭喜你，你的模块可以被其他模块使用啦！

*注意：*
   
* 不要将复用次数不 >= 2的组件包含进share module
* 注意使用@Input
  

##panda组件
**selector:** 
\<app-panda> 


**基本功能：**
当鼠标指在熊猫时，熊猫开始招手 

**输入属性：**
shake: boolean 为真时招手， 为假时停止招手
 
**使用方法及注意事项**  

* 常见场景1：你需要让你的熊猫在其他事件下开始招手
	* 进入 ***.component.ts
	* 加入下列两个方法
	
	```
	//熊猫开始招手
	startShake() {
    this.shake = true;
  }
  //熊猫停止招手
  stopShake() {
    this.shake = false;
  }
	```
	* 将以上两个方法分别与你的开始招手和停止招手绑定
* 常见场景2：你发现你的熊猫掉落到了它的父DOM节点底部
	* 不要慌张，这不是你的错
	* 熊猫组件的使用要求其底部有另一个组件，这样能遮挡它摇动手时多余的部分。因此熊猫会掉到包裹它的父元素底部，以确保它的手一定能被下面的组件遮挡
	*  由于这个设计， 你需要将遮挡熊猫手的元素设置一个style = z-index：（一个大于0的数字）。如果不加也可以保证熊猫摇手的正确显示，你可以不加

* 有别的问题你可以联系我，如果还是没看懂可以参考authentic目录内的组件实现方法 

**效果图**

![](./panda.git)

##other-report组件

**selector:** 
\<app-others-report> 


**基本功能：**
简单展示report资料

**！！！（非常重要）输入属性：**  

report：  请确保你的输入符合下列规范

```
export class Report {
  title: string;  // 报告标题
  topic: string[];  // 报告话题 3个以上
  content: string;  // 报告内容
  commentsnum: number; // 评论个数
  likesnum: number;  // 点赞这篇报告的人数
}
```
   
bkcolor：string // 设置组件背景颜色
   
**使用方法及注意事项**  

* 此组件自带margin可以不用自己设置
* 如果还有不清楚的地方可以参考userinfo/detailinfo
* 待添加

**效果图**
![](./report.png)

##likereport组件

**selector:** 
\<app-likereport> 


**基本功能：**
简单展示被他人点赞report资料

**！！！（非常重要）输入属性：**  

like： Like 请确保你的输入符合下列规范

```
export class Otheruser {
  id: number;
  name: string;
  avatar_url: string;
  about_me: string;
  followingnum: number;
  followednum: number;
  likenum: number;
  reportsnum: number;
}
export class Like {
  ouser: Otheruser;
  report: Report;
}
```
   
bkcolor：string // 设置组件背景颜色
   
**使用方法及注意事项**  

* 此组件自带margin可以不用自己设置
* 如果还有不清楚的地方可以参考userinfo/detailinfo
* 待添加（时间好像还没加 待添加）

**效果图**
![](./like.png)

##followuser组件

**selector:** 
\<app-followuser> 


**基本功能：**
简单展示其他following和followed用户资料

**！！！（非常重要）输入属性：**  

user：Otheruser 请确保你的输入符合下列规范

```
export class Otheruser {
  id: number;
  name: string;
  avatar_url: string;
  about_me: string;
  followingnum: number;
  followednum: number;
  likenum: number;
  reportsnum: number;
}
```
   
bkcolor：string // 设置组件背景颜色
isFollowing：boolean // 导入该用户是否被本用户follow
   
**使用方法及注意事项**  

* 此组件自带margin可以不用自己设置
* 如果还有不清楚的地方可以参考userinfo/detailinfo
* 待添加（时间好像还没加 待添加）

**效果图**
![](./user.png)
