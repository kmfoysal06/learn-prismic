<?php
declare(strict_types=1);

namespace App;

/**
 * Render Prismic rich text field as HTML.
 */
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