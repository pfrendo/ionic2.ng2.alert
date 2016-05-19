import {
	it,
	inject,
	describe,
	beforeEach,
	beforeEachProviders
} from "@angular/core/testing";

describe("LoggerService", () => {
	beforeEachProviders(() => []);
	beforeEach(() => {
		spyOn(console, "log");
	});

	it("should log successfully", inject([], () => {

	}));
});