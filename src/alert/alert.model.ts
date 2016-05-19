export interface AlertModel {
	title: string;
	message: string;
	inputs: [{
		name: string;
		placeholder: string;
	}];
}
