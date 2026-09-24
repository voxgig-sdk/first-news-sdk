"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstNewsError = void 0;
class FirstNewsError extends Error {
    isFirstNewsError = true;
    sdk = 'FirstNews';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.FirstNewsError = FirstNewsError;
//# sourceMappingURL=FirstNewsError.js.map