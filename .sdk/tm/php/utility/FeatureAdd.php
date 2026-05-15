<?php
declare(strict_types=1);

// FirstNews SDK utility: feature_add

class FirstNewsFeatureAdd
{
    public static function call(FirstNewsContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
