<?php
// Simple file-based cache for Prismic API responses
// Usage: cache_set($key, $data, $ttl); $data = cache_get($key);
function cache_set($key, $data, $ttl = 300) {
    $cacheDir = __DIR__ . '/cache';
    if (!is_dir($cacheDir)) mkdir($cacheDir);
    $file = $cacheDir . '/' . md5($key) . '.json';
    $payload = [
        'expires' => time() + $ttl,
        'data' => $data
    ];
    file_put_contents($file, json_encode($payload));
}

function cache_get($key) {
    $cacheDir = __DIR__ . '/cache';
    $file = $cacheDir . '/' . md5($key) . '.json';
    if (!file_exists($file)) return null;
    $payload = json_decode(file_get_contents($file), true);
    if (!$payload || $payload['expires'] < time()) {
        unlink($file);
        return null;
    }
    return $payload['data'];
}
