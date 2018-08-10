<?php
    if(substr($requestPath, -1) == '/') {
        $requestPath = substr($requestPath, 0, -1);
    }
    if(substr($requestPath, -4) != '.php') {
        $articleFile = $requestPath.'.php';
    }
    if(!file_exists($articleFile)) {
        $articleFile = '404.php';
    }?>
<!DOCTYPE html>
<html>
<?php include('header.php');?>
<body>
<div class="article-bg"></div>
<div class="article">
<?php include($articleFile);?>
<?php include('footer.php');?>
</div><!-- article -->
</body>
</html>
