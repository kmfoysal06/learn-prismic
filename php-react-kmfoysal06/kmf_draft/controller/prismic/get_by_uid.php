<?php
if(!defined("ABSPATH")) exit;
use Prismic\Api;


header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

http_response_code(200);

$repo_name = KMFOYSAL_PRISMIC_REPO;

require_once __DIR__ . '/../../cache.php';
$cache_key = "uid_{$repo_name}_{$page_type}_{$page_uid}_{$lang}";
$document = cache_get($cache_key);
if (!$document) {
	$api = Api::get("https://{$repo_name}.prismic.io/api/v2");
	$document = $api->getByUID($page_type, $page_uid, ['lang' => $lang]);
	cache_set($cache_key, $document, 300); // cache for 5 min
}
echo json_encode($document, JSON_PRETTY_PRINT);
