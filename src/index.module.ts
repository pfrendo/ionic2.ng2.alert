import * as ng from "angular";
import consts from "./index.const";
import {SkeletonDirective} from "./skeleton.directive";

export let skeletonModule = ng.module(consts.moduleName, [
	consts.moduleNameTmpls
]);

skeletonModule.directive(SkeletonDirective.id, SkeletonDirective.factory());

export default skeletonModule;