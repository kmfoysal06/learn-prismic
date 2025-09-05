<?php
declare(strict_types=1);

ini_set('display_errors', '1');
error_reporting(E_ALL);


require_once __DIR__ . '/../vendor/autoload.php';

use App\PrismicClient;
//use function App\renderRichText;
function renderRichText(?array $rich): string
{
    if (empty($rich) || !is_array($rich)) return '';
    $html = '';
    foreach ($rich as $block) {
        $type = $block['type'] ?? 'paragraph';
        $text = htmlspecialchars($block['text'] ?? '');
        switch ($type) {
            case 'heading1': $html .= "<h1>{$text}</h1>"; break;
            case 'heading2': $html .= "<h2>{$text}</h2>"; break;
            case 'heading3': $html .= "<h3>{$text}</h3>"; break;
            case 'list-item': $html .= "<li>{$text}</li>"; break;
            case 'o-list-item': $html .= "<li>{$text}</li>"; break;
            case 'paragraph':
            default: $html .= "<p>{$text}</p>"; break;
        }
    }
    // Wrap list items in a <ul> (simple, not robust)
    if (strpos($html, '<li>') !== false) {
        $html = "<ul>{$html}</ul>";
    }
    return $html;
}

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
if (file_exists(__DIR__ . '/../.env')) {
    $dotenv->load();
}

$prismicRepo = $_ENV['PRISMIC_REPO'] ?? null;
$prismicToken = $_ENV['PRISMIC_ACCESS_TOKEN'] ?? null;

if (!$prismicRepo) {
    http_response_code(500);
    echo "<h1>Missing PRISMIC_REPO in environment.</h1><p>Copy .env.example to .env and set PRISMIC_REPO.</p>";
    exit;
}

$client = new PrismicClient($prismicRepo, $prismicToken);

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$basePath = rtrim(($_ENV['BASE_PATH'] ?? '/'), '/');
$trimmed = '/' . ltrim(substr($path, strlen($basePath)), '/');
$trimmed = ($trimmed === '/') ? '/' : rtrim($trimmed, '/');

function renderLayout(string $title, string $bodyHtml) {
    echo <<<HTML
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>{$title}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style>
    body { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Arial; padding: 24px; }
    header { margin-bottom: 24px; }
    main { max-width: 800px; margin: 0 auto; }
  </style>
</head>
<body>
  <header>
    <a href="/">Home</a>
  </header>
  <main>
    {$bodyHtml}
  </main>
  <footer>
    <p>Powered by Prismic • PHP</p>
  </footer>
</body>
</html>
HTML;
}

try {
    if ($trimmed === '/') {
        // Home route - fetch "home" type or first doc
        $doc = $client->fetchFirstOfType('home');
        if (!$doc) {
            $docs = $client->fetchAll(1);
            $doc = $docs[0] ?? null;
        }
        if (!$doc) {
            http_response_code(404);
            renderLayout('Not found', '<h1>Content not found</h1>');
            exit;
        }
        $title = $doc['data']['title'][0]['text'] ?? $doc['uid'] ?? 'Home';
        $bodyHtml = renderRichText($doc['data']['content'] ?? []);
        renderLayout($title, "<h1>{$title}</h1>{$bodyHtml}");
        exit;
    }

    $slug = ltrim($trimmed, '/');
    $doc = $client->fetchByUID('page', $slug);
    if (!$doc) {
        $doc = $client->fetchByUIDAny($slug);
    }
    if (!$doc) {
        http_response_code(404);
        renderLayout('Not found', "<h1>Page not found</h1>");
        exit;
    }
    echo '<pre>';
    var_dump($doc);
    $title = $doc['data']['title'][0]['text'] ?? $doc['uid'];
    $bodyHtml = renderRichText($doc['data']['content'] ?? []);
    renderLayout($title, "<h1>{$title}</h1>{$bodyHtml}");
} catch (Exception $e) {
    http_response_code(500);
    renderLayout('Error', '<pre>' . htmlspecialchars($e->getMessage()) . '</pre>');
}
