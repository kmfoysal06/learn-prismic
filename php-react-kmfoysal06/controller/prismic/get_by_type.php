<?php
if(!defined("ABSPATH")) exit;
use Prismic\Api;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

http_response_code(200);


$repo_name = KMFOYSAL_PRISMIC_REPO;
$api = Api::get("https://{$repo_name}.prismic.io/api/v2");
//$document = $api->getSingle($page_type, ['lang' => $lang]);


// echo json_encode($document, JSON_PRETTY_PRINT);
// return;

require_once __DIR__ . '/../../cache.php';
$cache_key = "single_{$repo_name}_{$page_type}_{$lang}";
$cached = cache_get($cache_key);
if ($cached) {
	echo json_encode($cached, JSON_PRETTY_PRINT);
	exit;
}
$document = $api->getSingle($page_type, ['lang' => $lang]);
if(!$document) {
    $fallback_types = ['page'];
//    if the document not found it will try to fetch by uid with fallback types
    foreach($fallback_types as $type) {
        $document = $api->getByUID($type, $page_type, ['lang' => $lang]);
        if($document) break;
    }
}

if(!$document) {
    http_response_code(404);
    echo json_encode(['error' => 'Document not found'], JSON_PRETTY_PRINT);
    exit;
}
cache_set($cache_key, $document, 300);
echo json_encode($document, JSON_PRETTY_PRINT);
