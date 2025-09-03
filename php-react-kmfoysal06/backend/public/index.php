<?php

// Simple router for the PHP-React application
$request = $_SERVER['REQUEST_URI'];
$path = parse_url($request, PHP_URL_PATH);

// Handle API routes
if (strpos($path, '/api/') === 0) {
    $apiPath = substr($path, 4); // Remove '/api' prefix
    $filePath = __DIR__ . '/api' . $apiPath . '.php';
    
    if (file_exists($filePath)) {
        include $filePath;
    } else {
        // Try to find the file in the correct location
        $segments = explode('/', trim($apiPath, '/'));
        if (count($segments) >= 2) {
            $newPath = __DIR__ . '/../api/' . implode('/', $segments) . '.php';
            if (file_exists($newPath)) {
                include $newPath;
                exit;
            }
        }
        
        http_response_code(404);
        echo json_encode(['error' => 'API endpoint not found', 'path' => $apiPath, 'file' => $filePath]);
    }
    exit;
}

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