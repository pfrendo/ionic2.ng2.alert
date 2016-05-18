import {IAugmentedJQuery, IAttributes, IScope, IDirective, IDirectiveFactory} from "angular";
import consts from "./index.const";

export class SkeletonDirective implements IDirective {
	static id = "obgSkeleton";

	restrict = "EA";
	templateUrl = `${consts.basePath}/skeleton.html`;

	scope = {
	};

	/*@ngInject*/
	constructor(
	) {
		// todo: constructor injection and dependency initialization here
	}

	static factory(): IDirectiveFactory {
		/*@ngInject*/
		const directive = (
		) => {
			return new SkeletonDirective();
		};
		return directive;
	}

	link = (
		scope: IScope,
		element: IAugmentedJQuery,
		attrs: IAttributes
	) => {
		// todo: DOM manipulation should be done here, this is called on creation of the directive
	};

};