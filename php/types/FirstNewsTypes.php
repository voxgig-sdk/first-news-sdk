<?php
declare(strict_types=1);

// Typed models for the FirstNews SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** New entity data model. */
class NewType
{
    public ?array $channels = null;
    public ?string $content = null;
    public ?int $id = null;
    public ?string $link = null;
    public ?string $published = null;
    public ?string $summary = null;
    public ?string $title = null;
}

/** Request payload for New#load. */
class NewLoadMatch
{
    public int $id;
}

/** Request payload for New#list. */
class NewListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?string $channel = null;
    public ?int $limit = null;
    public ?string $link = null;
    public ?int $offset = null;
    public ?bool $pretty = null;
    public ?string $q = null;
}

