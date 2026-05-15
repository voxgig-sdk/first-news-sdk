# FirstNews SDK utility: feature_add
module FirstNewsUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
