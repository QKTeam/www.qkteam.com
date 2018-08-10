<?php
    $basePath = substr($_SERVER['PHP_SELF'], 0, -strlen('index.php'));
    if($_SERVER['QUERY_STRING'] == '') {
        $requestUrl = $_SERVER['REQUEST_URI'];
    }
    else {
        $queryStringLength = strlen('?'.$_SERVER['QUERY_STRING']);
        $requestUrl = substr($_SERVER['REQUEST_URI'], 0, -$queryStringLength);
    }
    $requestPath = substr($requestUrl, strlen($basePath));
    switch ($requestPath) {
        case '':
        case 'index':
            include('main.php');
            break;
            
        default:
            include('article.php');
        break;
    }