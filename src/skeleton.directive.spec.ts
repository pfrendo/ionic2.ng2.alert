import * as ng from "angular";
import "test-setup";
import consts from "./index.const";

describe("SkeletonDirective", () => {

	beforeEach(() => {
		ng.mock.module(consts.moduleName);

		inject(() => {
		});
	});

	describe("given a simple task", () => {

		// it("should fail", () => {
		// 	expect(1 + 1).toBe(3);
		// });

		it("should be sucessful", () => {
			expect(1 + 1).toBe(2);
		});
	});

});
