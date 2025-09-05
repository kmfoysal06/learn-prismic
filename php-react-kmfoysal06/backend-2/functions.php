<?php
define("KMFOYSAL_PRISMIC_DIR", __DIR__);
define("ABSPATH", __DIR__ . "/../");
define("ENV", "development");
define("KMFOYSAL_PRISMIC_REPO", "kmfoysal06");

if(ENV === "development") {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
}


function dd($data) {
    echo "<pre>";
    var_dump($data);
    echo "</pre>";
    die();
}
