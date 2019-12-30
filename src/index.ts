import {foo} from "./nested-namespaces";
import Baz = foo.bar.Baz;
export {Baz};

export * from "./foo";
export {default as uuid} from "./uuid";

