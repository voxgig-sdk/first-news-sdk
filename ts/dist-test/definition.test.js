"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "new",
        "accessor": "New",
        "op": "list",
        "method": "GET",
        "path": "/news",
        "args": [],
        "select": {
            "after": "v1",
            "before": "v1",
            "channel": "What's New",
            "limit": 100,
            "link": "v1",
            "offset": 0,
            "pretty": "v1",
            "q": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "channel",
            "link",
            "before",
            "after",
            "q",
            "limit",
            "offset",
            "pretty"
        ],
        "queryArgs": [
            {
                "name": "after",
                "wire": "after"
            },
            {
                "name": "before",
                "wire": "before"
            },
            {
                "name": "channel",
                "wire": "channel"
            },
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "link",
                "wire": "link"
            },
            {
                "name": "offset",
                "wire": "offset"
            },
            {
                "name": "pretty",
                "wire": "pretty"
            },
            {
                "name": "q",
                "wire": "q"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "OK",
            "status-code": 200,
            "version": "1",
            "last-modified": "Tue, 12 Jul 2016 15:42:31 GMT",
            "total": 249,
            "limit": 3,
            "offset": 0,
            "access": "public",
            "data": [
                {
                    "id": 40558,
                    "title": "FIRST calls for participants for a new Special Interest Group (SIG) on Malware Analysis",
                    "summary": "Forum invites stakeholders to get involved in sharing best practice to mitigate malware incidents.",
                    "link": "https://www.first.org/newsroom/releases/20160711",
                    "published": "Mon, 11 Jul 2016 18:54:00 GMT"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "new",
        "accessor": "New",
        "op": "load",
        "method": "GET",
        "path": "/news/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": 40558
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "OK",
            "status-code": 200,
            "version": "1",
            "last-modified": "Mon, 11 Jul 2016 18:58:35 GMT",
            "access": "public",
            "data": {
                "id": 40558,
                "title": "FIRST calls for participants for a new Special Interest Group (SIG) on Malware Analysis",
                "summary": "Forum invites stakeholders to get involved in sharing best practice to mitigate malware incidents.",
                "link": "https://www.first.org/newsroom/releases/20160711",
                "content": "<p><strong>Forum invites stakeholders to get involved in sharing best practice to mitigate malware incidents</strong></p>",
                "channels": [
                    "FIRST Newsroom",
                    "Press Releases",
                    "What's New"
                ],
                "published": "Mon, 11 Jul 2016 18:54:00 GMT"
            }
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map