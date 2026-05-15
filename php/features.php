<?php
declare(strict_types=1);

// FirstNews SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FirstNewsFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FirstNewsBaseFeature();
            case "test":
                return new FirstNewsTestFeature();
            default:
                return new FirstNewsBaseFeature();
        }
    }
}
