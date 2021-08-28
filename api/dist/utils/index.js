"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformerUnique = exports.transformer = void 0;
function transformer(object) {
    if (object == null) {
        return null;
    }
    if (object && object.length > 0) {
        object.map((o) => {
            delete o.password;
        });
    }
    return object;
}
exports.transformer = transformer;
function transformerUnique(object) {
    if (object == null) {
        return null;
    }
    delete object.password;
    return object;
}
exports.transformerUnique = transformerUnique;
//# sourceMappingURL=index.js.map