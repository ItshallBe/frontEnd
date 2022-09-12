# 新知
1. vscode创建html模板：
```
插件：HTML CSS Support; open in browser
新建html: 输入!，自动补全生成html模板
实时预览：安装Live Preview、Live Server、Live ServerPreview，然后右键html->show preview
```
2. ``<s>``、``<del>``给文字增加删除线
3. ``<span>``嵌套``<pre>``原样显示代码中的文本
4. ``<a>`` target属性，_self在当前窗口打开、_blank则是新窗口打开; href = #，锚击到首页
5. ``<img>`` 可以做热点地图，有点意思，见``<a href="hotMap.html"></a>``
6. ``<table>``边框设置方式：
```
1. 设置border="xx"
2. 设置bgcolor:
<table border="0" cellspacing="1" cellpadding="0" width="600" bgcolor="#aaa">
    <tr bgcolor="#FFF"></tr>
</table>
```
7. 行级元素``<a>``、``<span>``等是行级元素，css样式只会影响行中内容；``<div>``是块级元素，css样式会影响整行。行级元素定义宽高无效，而块级元素有效。``display: block``定义为块级元素; ``display: inline``定义为行级元素; ``display: inline-block``定义为行级块元素，既能定义在一行，也能定义宽高
8. ``margin: 0 auto``，设置元素居中
9. 其他标签之间，如``<h1>``和``<p>``，它们中间的间隔通过设置{padding: 0, margin:0}消除