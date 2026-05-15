<?php
declare(strict_types=1);

// FirstNews SDK utility: prepare_body

class FirstNewsPrepareBody
{
    public static function call(FirstNewsContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
