<?php
declare(strict_types=1);

// FirstNews SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

FirstNewsUtility::setRegistrar(function (FirstNewsUtility $u): void {
    $u->clean = [FirstNewsClean::class, 'call'];
    $u->done = [FirstNewsDone::class, 'call'];
    $u->make_error = [FirstNewsMakeError::class, 'call'];
    $u->feature_add = [FirstNewsFeatureAdd::class, 'call'];
    $u->feature_hook = [FirstNewsFeatureHook::class, 'call'];
    $u->feature_init = [FirstNewsFeatureInit::class, 'call'];
    $u->fetcher = [FirstNewsFetcher::class, 'call'];
    $u->make_fetch_def = [FirstNewsMakeFetchDef::class, 'call'];
    $u->make_context = [FirstNewsMakeContext::class, 'call'];
    $u->make_options = [FirstNewsMakeOptions::class, 'call'];
    $u->make_request = [FirstNewsMakeRequest::class, 'call'];
    $u->make_response = [FirstNewsMakeResponse::class, 'call'];
    $u->make_result = [FirstNewsMakeResult::class, 'call'];
    $u->make_point = [FirstNewsMakePoint::class, 'call'];
    $u->make_spec = [FirstNewsMakeSpec::class, 'call'];
    $u->make_url = [FirstNewsMakeUrl::class, 'call'];
    $u->param = [FirstNewsParam::class, 'call'];
    $u->prepare_auth = [FirstNewsPrepareAuth::class, 'call'];
    $u->prepare_body = [FirstNewsPrepareBody::class, 'call'];
    $u->prepare_headers = [FirstNewsPrepareHeaders::class, 'call'];
    $u->prepare_method = [FirstNewsPrepareMethod::class, 'call'];
    $u->prepare_params = [FirstNewsPrepareParams::class, 'call'];
    $u->prepare_path = [FirstNewsPreparePath::class, 'call'];
    $u->prepare_query = [FirstNewsPrepareQuery::class, 'call'];
    $u->result_basic = [FirstNewsResultBasic::class, 'call'];
    $u->result_body = [FirstNewsResultBody::class, 'call'];
    $u->result_headers = [FirstNewsResultHeaders::class, 'call'];
    $u->transform_request = [FirstNewsTransformRequest::class, 'call'];
    $u->transform_response = [FirstNewsTransformResponse::class, 'call'];
});
