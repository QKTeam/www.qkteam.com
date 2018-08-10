<?php
$url = 'http://192.168.1.129:8085';
header('Location: ' . $url . '?' . $_SERVER['QUERY_STRING']);
