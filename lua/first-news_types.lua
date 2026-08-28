-- Typed models for the FirstNews SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class New
---@field channels? table
---@field content? string
---@field id? number
---@field link? string
---@field published? string
---@field summary? string
---@field title? string

---@class NewLoadMatch
---@field id number

---@class NewListMatch
---@field after? string
---@field before? string
---@field channel? string
---@field limit? number
---@field link? string
---@field offset? number
---@field pretty? boolean
---@field q? string

local M = {}

return M
