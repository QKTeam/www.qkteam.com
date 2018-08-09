<!DOCTYPE html>
<html>
<?php include('header.php');?>
<script src="src/typed.min.js"></script>
<body>
<div class="page page-1">
<div class="video">
<video autoplay loop>
<source src="src/bj.mp4" type="video/mp4">Your browser does not support the video tag. I suggest you upgrade your browser.
<source src="src/bj.webm" type="video/webm">Your browser does not support the video tag. I suggest you upgrade your browser.
<source src="src/bj.ogv" type="video/ogv">Your browser does not support the video tag. I suggest you upgrade your browser.
</video>
</div>
<div class="main">
<div class="main-title">
<span>QK</span>
<img src="img/logo.jpg">
<span>Team</span>
</div>
<div class="main-type">We are <span id="typeMachine" style="color:#FF5511;"></span></div>
</div>
</div>
<div class="page page-text page-2" id="page-2">
<h1>工作室是一个非营利团队，旨在召集对计算机科学有浓厚兴趣的同学，一起讨论、交流、学习、提升自我。</h1>
</div>
<div class="page page-text page-3" id="page-3">
<h1 class="hfont underline underline-h1"> 『 Introduction 』 </h1>
<br>
<p class="paragraph">晴空工作室成立于2009年, 是电子科技大学数学科学学院的一个创新团队。团队面向校内外，主要从事软件开发与维护，网站开发与维护等业务。</p>
<p class="paragraph">工欲善其事必先利其器，在历届工作室老一辈成员的不懈努力，和数学科学学院的大力支持下，工作室场地、服务器、供学习参考的纸质和电子资料等硬件资源逐步完善。更有数学科学学院杨鹏等老师的谆谆教导、各经验丰富的师兄们的口耳相传等“软件”资源。数学学院各级领导也给予了很高的期望。占到天时地利人和的工作室成员们当然不敢懈怠：他们热爱计算机科学，有激情，有斗志，学习刻苦认真。工作室成员毕业以后相对于普通同学有较好的技术水平、较高的学习能力。在就业方面，多名优秀成员，被华为、腾讯、阿里巴巴、Intel等知名企业聘用；在继续深造方面，被电子科技大学、东南大学、中国科学院、中山大学等高校录取为研究生；2013年工作室诞生了第一个创业团队......</p>
<p class="paragraph">天将降大任于斯人也，必先苦其心志，劳其筋骨。工作室的每一位成员在以后的工作和学习中，必将以更高的热情，更强的斗志，更顽强的意志，应对每一个挑战。</p>
</div>
<div class="page page-text page-4" id="page-4">
<h1 class="hfont underline underline underline-h1"> 『 About Us 』 </h1>
<table>
<tr>
<td><h3 class="underline underline-h2">联系地址</h3></td>
<td><h3 class="underline underline-h2">主要工作</h3></td>
<td><h3 class="underline underline-h2">经费来源</h3></td>
<td><h3 class="underline underline-h2">构成成员</h3></td>
</tr>
<tr>
<td>电子科技大学清水河校区主楼A1517<br>数学科学学院本科生创新中心</td>
<td>软件、App和网站的设计开发与维护</td>
<td>数学科学学院资助、大学生创新创业项目资助、外包项目款</td>
<td>主要是电子科技大学本科生</td>
</tr>
</table>
</div>
<?php include('footer-mainpage.php');?>
</body>
<script type="text/javascript">
window.onload = function () {
    $("#typeMachine").typed({
                            strings: ["QKTeam", "here in UESTC"],
                            typeSpeed: 100,
                            loop: true,
                            startDelay: 1000,
                            backDelay: 1000
                            });
}
</script>
</html>
