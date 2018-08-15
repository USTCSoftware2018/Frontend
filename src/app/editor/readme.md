# editor 模块
### 版本 0.0.0

### 一、editor 总体架构

#### 1.1 数据处理

在编辑器前端交互部分之中，由于需要经常动态等增删节点以及改变元素之间等位置，使用javascript对象构成的对象映射关系模型可以方便动态等改变文章。
但是json在传输过程之中表达能力欠缺，考虑使用xml格式传输和存储文章等结构。因此需要使用各个浏览器自带等xml解析器进行encode和decode。

### 二、XML定义

一篇文章考虑由多个原子操作 step 和过程 process 串联而成。

#### 2.1 文章结构

文章中分为 head 和 body 两个部分。

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<article id="文章id">
    <head>
        <!-- 文章头部 -->
    </head>
    <body>
        <!-- 文章主题部分 -->
    </body>
<article>
```

#### 2.2 head部分
头部包括了文章的元信息：标题、作者、日期、关键词、引用等。

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<head>
    <title>标题名字</title>
    <date>提交时间<date>

    <!-- 主要作者 -->
    <author type="primary">作者名字1</author> 
    <!-- 其他作者 -->
    <author >作者名字2</author> 
    <!-- ... -->

    <!-- 关键词 -->
    <key>关键词1</key>
    <key>关键词2</key>
    <key>关键词3</key>

    <!-- 引用 -->
    <quote type="eassy">引用1</quote>
    <quote type="magazine">引用2</quote>
    <quote type="network">引用3</quote>
    <!-- ... -->
</head>

```

#### 2.3 body 部分

文章主题部分考虑按顺序排列各个 step 和 process。

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<body>
    <step id="stepid" name="原子操作名">
    <!-- 原子操作 -->
       <!-- ... -->
    <step>

    <step id="stepid" name="原子操作名">
       <!-- ... -->
    <step>

    <process id="stepid" name="过程操作名">
    <!-- 过程 -->
        <step id="stepid" name="原子操作名">
           <!-- ... -->
        <step>
        <step id="stepid" name="原子操作名">
            <!-- ... -->
        <step> 
    <process>

    <step id="stepid" name="原子操作名">
       <!-- ... -->
    <step>
</body>
```

其中原子操作的中有的表单拥有 input、testarea、select、checkbox、radio等选项。
``` xml
<?xml version="1.0" encoding="UTF-8"?>
<step id="stepid" name="原子操作名">
    <!-- input -->
    <input label="名字" value="值" default="默认值"/>

    <!-- textarea -->
    <textarea label="名字" value="值" default="默认值"/>

    <!-- select -->
    <select label="名字" default='1'>
        <option value="选项1">选项1</option>
        <option value="选项2">选项2</option>
        <option value="选项3">选项3</option>
        <option value="选项4">选项4</option>
    </select>

    <!-- radio -->
    <radio label="名字" default="checked" value="值"/>

    <!-- checkbox -->
    <checkbox label="名字" default='1'>
        <option >值1</option>
        <option >值2</option>
        <option >值3</option>
        <!-- ... -->
    </checkbox>

    <!-- 剩下的部分是文字、图片、引用等补充部分 -->
    <remark>remark部分</remark>
    <description>description部分</description>
    <pic id="id"  name="name" src="url"/>
    <quote type="...">引用</quote>

</step>
```

过程 Process 中包含了多个step，切也有自己的 remark、description、pic、quote标签。

### 三、组件部分