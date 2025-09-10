<?php
if(!defined("ABSPATH")) exit;
require_once __DIR__ . '/../functions.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$paths = explode('/', $uri);
$paths = array_values(array_filter($paths));
$last_index = sizeof($paths) - 1;
$mime_type_mapping = [
    'css' => 'text/css',
    'js' => 'text/javascript',
];
if(!empty($paths) && $paths[$last_index] !== "index.php") {

    $file_extension = pathinfo($paths[$last_index], PATHINFO_EXTENSION);
    if(array_key_exists($file_extension, $mime_type_mapping)) {
        header('Content-Type: ' . $mime_type_mapping[$file_extension]);
        $uri = KMFOYSAL_PRISMIC_DIR.str_replace("index.php", "frontend", $uri);


        if(file_exists($uri)) {
            require_once($uri);
            exit;
        }
    }


    
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>kmfoysal06</title>
    <link rel="stylesheet" href="<?php echo KMFOYSAL_HOME; ?>/index.php/build/css/main.css">
</head>
<body>
    <div id="prismic-root"></div>
        <?php kmf__serve_variable('BACKEND', KMFOYSAL_HOME); ?>
        <script src="<?php echo KMFOYSAL_HOME; ?>/index.php/build/js/main.js"></script>
</body>
</html>
