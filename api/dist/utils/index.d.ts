declare type typeGeneric = Array<Record<string, unknown>>;
export declare function transformer<T extends typeGeneric>(object: T): T;
export declare function transformerUnique<T extends Record<string, unknown>>(object: T): T;
export {};
