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
# @!attribute [rw] access
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_modified
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [String, nil]
#
# @!attribute [rw] published
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] status_code
#   @return [Integer, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
New = Struct.new(
  :access,
  :data,
  :id,
  :last_modified,
  :link,
  :published,
  :status,
  :status_code,
  :summary,
  :title,
  :version,
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
# @!attribute [rw] access
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_modified
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [String, nil]
#
# @!attribute [rw] published
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] status_code
#   @return [Integer, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
NewListMatch = Struct.new(
  :access,
  :data,
  :id,
  :last_modified,
  :link,
  :published,
  :status,
  :status_code,
  :summary,
  :title,
  :version,
  keyword_init: true
)

