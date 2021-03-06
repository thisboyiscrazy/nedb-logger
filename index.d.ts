// Type definitions for NeDB 0.1
// Project: https://github.com/louischatriot/nedb
// Definitions by: Joe Vanderstelt <https://github.com/thisboyiscrazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = NeDBLoggerDataStore;
export as namespace NedbLogger;

declare namespace NeDBLoggerDataStore { }
declare class NeDBLoggerDataStore {
    
    constructor(path?: string | {filename: string});

    /**
     * Insert a new document
     * @param {Function} cb Optional callback, signature: err, insertedDoc
     */
    insert<T>(newDoc: T, cb?: (err: Error, document: T) => void): void;

}
