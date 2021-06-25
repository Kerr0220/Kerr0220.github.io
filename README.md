# README

**项目部署在GitHub Page上，请访问网址https://kerr0220.github.io**

### 1. 主要功能

#### 1.1 基本功能

**要求中的所有基本功能均已实现**

* 添加新任务
  * 设置任务名称
  * 选择任务截止时间
* 删除任务
  * 单击某条任务，打开编辑界面，通过下方红色按钮删除当前任务
  * 删除所有已完成任务
* 改变任务状态
  * 单击任务前方圆形按钮将任务设为“已完成”
  * 再次点击恢复为“未完成”
* 全部完成
  * 通过顶部按钮将所有任务设为“已完成”
  * 再次点击将全部取消设置“已完成”
* 折叠已完成列表
  * 单机`completed`按钮折叠已完成列表
  * 再次点击重新展示已完成部分
* 数据持久化存储
  * 退出页面再次进入或刷新页面数据不会丢失

#### 1.2 高级功能

**在基本功能的基础上，添加了4种我认为较为重要的高级功能**

* 添加标记
  * 将任务标记为星标任务，表示该任务优先级较高
  * 将任务标记为今日需完成
* 筛选过滤任务
  * 通过顶部的`Today`按钮筛选“今日需完成的任务”
  * 通过顶部的`Important`按钮筛选“星标任务”
  * 注：两个同时选择则会显示交集
* 单条编辑
  * 点击某条任务打开编辑界面
  * 编辑标题
  * 编辑截止时间
  * 编辑备注内容
* 换主题背景
  * 主页上方的下拉框选择背景
  * 提供7种不同背景

### 2. 项目亮点

* 功能完整，在实现基本功能的基础上实现了几个我认为较为重要的高级功能
* 页面简洁美观，css样式符合界面设计原则
* 所有代码均为自己实现，无任何借鉴开源代码的部分

### 3. 项目功能演示

#### 3.1 基本功能

##### 1) 添加新任务

* 在底部的添加条输入任务名称
* 选择任务截止时间
* 点击右侧蓝色的`ADD`按钮
* 成功添加

<img src="docImage/Screen Shot 2021-06-25 at 21.19.04.png" alt="Screen Shot 2021-06-25 at 21.19.04" style="zoom: 20%;" /><img src="docImage/Screen Shot 2021-06-25 at 21.20.49.png" alt="Screen Shot 2021-06-25 at 21.20.49" style="zoom:20%;" />      

##### 2) 删除任务

* 单击某条任务，打开编辑界面，通过下方红色按钮删除当前任务
* 页面自动刷新回到任务列表界面，该任务已删除

<img src="docImage/Screen Shot 2021-06-25 at 21.24.21.png" alt="Screen Shot 2021-06-25 at 21.24.21" style="zoom:20%;" /><img src="docImage/Screen Shot 2021-06-25 at 21.25.00.png" alt="Screen Shot 2021-06-25 at 21.25.00" style="zoom:20%;" />

##### 2') 删除所有已完成任务

* 单击`Delete all finished tasks`删除所有已完成任务
* 页面自动刷新，所有已完成任务已删除

<img src="docImage/Screen Shot 2021-06-25 at 21.28.02.png" alt="Screen Shot 2021-06-25 at 21.28.02" style="zoom:20%;" /><img src="docImage/Screen Shot 2021-06-25 at 21.28.30.png" alt="Screen Shot 2021-06-25 at 21.28.30" style="zoom:20%;" />

##### 3) 改变任务状态

* 单击任务前方圆形按钮将任务设为“已完成”

* 再次点击恢复为“未完成”

  <img src="docImage/Screen Shot 2021-06-25 at 21.29.06.png" alt="Screen Shot 2021-06-25 at 21.29.06" style="zoom:20%;" /><img src="docImage/Screen Shot 2021-06-25 at 21.29.45.png" alt="Screen Shot 2021-06-25 at 21.29.45" style="zoom:20%;" />

##### 4) 全部完成

* 通过顶部按钮将所有任务设为“已完成”

* 再次点击将全部取消设置“已完成”

  <img src="docImage/Screen Shot 2021-06-25 at 21.31.13.png" alt="Screen Shot 2021-06-25 at 21.31.13" style="zoom:20%;" /><img src="docImage/Screen Shot 2021-06-25 at 21.32.01.png" alt="Screen Shot 2021-06-25 at 21.32.01" style="zoom:20%;" /><img src="docImage/Screen Shot 2021-06-25 at 21.32.36.png" alt="Screen Shot 2021-06-25 at 21.32.36" style="zoom:20%;" />

##### 5) 折叠已完成列表

* 单机`completed`按钮折叠已完成列表
* 再次点击重新展示已完成部分

<img src="docImage/Screen Shot 2021-06-25 at 21.34.43.png" alt="Screen Shot 2021-06-25 at 21.34.43" style="zoom:20%;" /><img src="docImage/Screen Shot 2021-06-25 at 21.34.10.png" alt="Screen Shot 2021-06-25 at 21.34.10" style="zoom:20%;" />

##### 6)数据持久化存储

* 退出页面再次进入或刷新页面数据不会丢失

#### 3.2 高级功能

##### 1) 添加标记

* 将任务标记为星标任务，表示该任务优先级较高

* 将任务标记为今日需完成

  <img src="docImage/Screen Shot 2021-06-25 at 21.36.07.png" alt="Screen Shot 2021-06-25 at 21.36.07" style="zoom:20%;" />

##### 2) 筛选过滤任务

* 通过顶部的`Today`按钮筛选“今日需完成的任务”

  <img src="docImage/Screen Shot 2021-06-25 at 21.37.31.png" alt="Screen Shot 2021-06-25 at 21.37.31" style="zoom: 20%;" />

* 通过顶部的`Important`按钮筛选“星标任务”

  <img src="docImage/Screen Shot 2021-06-25 at 21.36.57.png" alt="Screen Shot 2021-06-25 at 21.36.57" style="zoom:20%;" />

* 注：两个同时选择则会显示交集

  <img src="docImage/Screen Shot 2021-06-25 at 21.38.03.png" alt="Screen Shot 2021-06-25 at 21.38.03" style="zoom:20%;" />

##### 3) 单条编辑

* 点击某条任务打开编辑界面

* 编辑标题

* 编辑截止时间

* 编辑备注内容

  <img src="docImage/Screen Shot 2021-06-25 at 21.38.22.png" alt="Screen Shot 2021-06-25 at 21.38.22" style="zoom:20%;" />

##### 4) 换主题背景

* 主页上方的下拉框选择背景
* 提供7种不同背景

<img src="docImage/Screen Shot 2021-06-25 at 21.40.21.png" alt="Screen Shot 2021-06-25 at 21.40.21" style="zoom:20%;" /><img src="docImage/Screen Shot 2021-06-25 at 21.39.58.png" alt="Screen Shot 2021-06-25 at 21.39.58" style="zoom:20%;" />

