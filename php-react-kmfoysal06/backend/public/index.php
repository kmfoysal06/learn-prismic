<?php
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);

// Simple router for the PHP-React application
$request = $_SERVER['REQUEST_URI'];
$apiPath = parse_url($request, PHP_URL_PATH);

$langs = ['en-us', 'fr-ca'];

array_map(function($l) use(&$apiPath) {
    if(str_starts_with(trim($apiPath, '/'), $l)) {
        $_GET['lang'] = $l; 
        // trim the lang
        $apiPath = '/'. trim(substr($apiPath, strlen($l) + 1), '/');
    }
}, $langs);

        $apiContrPath = __DIR__ .'/../api/prismic/web.php';
    
        if(file_exists(($apiContrPath))) {
            require_once ($apiContrPath);
            exit;
        }
//
//// Handle API routes
//if (strpos($apiPath, '/api/') === 0) {
//    $apiPath = substr($apiPath, 12); // Remove '/api' prefix
//    $apiContrPath = __DIR__ .'/../api/prismic/web.php';
//
//    if(file_exists(($apiContrPath))) {
//        require_once ($apiContrPath);
//        exit;
//    }
//}

// Serve React app for all other routes
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>kmfoysal06 - Portfolio</title>
    <link rel="icon" href="/favicon.ico" />
</head>
<body>
    <div id="root"></div>
    
    <!-- Development note: In production, you would serve the built React app files -->
    <script>
        // For development, we'll add a message
        document.getElementById('root').innerHTML = `
            <div style="padding: 20px; font-family: Arial, sans-serif;">
                <h1>PHP-React kmfoysal06 Portfolio</h1>
                <p>This is the PHP backend serving the React frontend.</p>
                <p>To run the complete application:</p>
                <ol>
                    <li>Build the React frontend: <code>cd frontend && npm run build</code></li>
                    <li>Serve the built files through this PHP application</li>
                    <li>Or run the React dev server and configure proxy to this PHP backend</li>
                </ol>
                <p>API endpoint example: <a href="/api/prismic/home">/api/prismic/home</a></p>
            </div>
        `;
    </script>
</body>
</html>
