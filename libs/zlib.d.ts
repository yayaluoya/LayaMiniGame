declare module Zlib {
    class Inflate {
        constructor(data: any);
        decompress(): any;
    }

    class Deflate {
        constructor(data: any);
        compress(): any;
    }
}