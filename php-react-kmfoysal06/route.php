<?php
if(!defined("ABSPATH")) exit;
function route() {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $paths = explode('/', $uri);
    $paths = array_values(array_filter($paths));


    $routes = [
        'api' => 'controller/api.php',
    ];
    
    $main_path = $paths[0] ?? '';


    if(array_key_exists($main_path, $routes)) {
        $path = KMFOYSAL_PRISMIC_DIR. '/' . $routes[$main_path];

        if(file_exists($path)) {
            require_once $path;
        } else {
            abort(500);
        }
    } else {
        //served in public
        require_once KMFOYSAL_PRISMIC_DIR. '/frontend/index.php';

    }

    
}

function abort($code = 404) {
    http_response_code($code);
    die("Error $code");
}

function kmf__serve_variable($key, $value) {
    echo "<script>var $key = " . json_encode($value) . ";</script>";
}
