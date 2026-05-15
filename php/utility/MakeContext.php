<?php
declare(strict_types=1);

// FirstNews SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FirstNewsMakeContext
{
    public static function call(array $ctxmap, ?FirstNewsContext $basectx): FirstNewsContext
    {
        return new FirstNewsContext($ctxmap, $basectx);
    }
}
