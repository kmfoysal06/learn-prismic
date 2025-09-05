<?php
if(!defined("ABSPATH")) exit;

if(!isset($paths[2])) {
    abort();
}

require_once KMFOYSAL_PRISMIC_DIR . '/vendor/autoload.php';

$lang = 'en-us';
if(isset($_GET['lang'])) {
    $lang = $_GET['lang'];
}

$page_type = $paths[2];

if(!isset($paths[3])) {
    require_once KMFOYSAL_PRISMIC_DIR. '/controller/prismic/get_by_type.php';
    exit;
}

$page_uid = $paths[3];
require_once KMFOYSAL_PRISMIC_DIR. '/controller/prismic/get_by_uid.php';
