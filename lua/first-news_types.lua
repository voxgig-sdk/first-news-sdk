-- Typed models for the FirstNews SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class New
---@field access? string
---@field data? table
---@field id? number
---@field last_modified? string
---@field link? string
---@field published? string
---@field status? string
---@field status_code? number
---@field summary? string
---@field title? string
---@field version? string

---@class NewLoadMatch
---@field id number

---@class NewListMatch

local M = {}

return M
