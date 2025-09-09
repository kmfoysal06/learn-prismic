<?php
if(!defined("ABSPATH")) exit;
$api_type = $paths[1];
$api_path_map = [
    'prismic' => 'prismic/api.php'
];


if(array_key_exists($api_type, $api_path_map)) {
    $path = KMFOYSAL_PRISMIC_DIR. '/controller/' . $api_path_map[$api_type];
    if(file_exists($path)) {
        require_once $path;
    } else {
        abort(500);
    }
} else {
    abort();
}
