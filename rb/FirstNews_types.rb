# frozen_string_literal: true

# Typed models for the FirstNews SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# New entity data model.
#
# @!attribute [rw] channels
#   @return [Array, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] link
#   @return [String, nil]
#
# @!attribute [rw] published
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
New = Struct.new(
  :channels,
  :content,
  :id,
  :link,
  :published,
  :summary,
  :title,
  keyword_init: true
)

# Request payload for New#load.
#
# @!attribute [rw] id
#   @return [Integer]
NewLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for New#list.
#
# @!attribute [rw] channels
#   @return [Array, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] link
#   @return [String, nil]
#
# @!attribute [rw] published
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
NewListMatch = Struct.new(
  :channels,
  :content,
  :id,
  :link,
  :published,
  :summary,
  :title,
  keyword_init: true
)

