import {Directive, Input, OnChanges, Output, EventEmitter} from "@angular/core";
import {NavController, Alert} from "ionic-angular";
import {AlertModel} from "./alert.model";

@Directive({
	selector : "ionic-alert"
})
export class AlertComponent implements OnChanges {

	@Input() model: AlertModel;
	@Input() isOpen: boolean;
	@Output() isOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	alert: Alert;

	constructor(
		private nav: NavController
	) {
	}

	ngOnChanges(changes: any): void {
		if (changes.isOpen.currentValue) {
			this.alert = Alert.create({
				title : this.model.title,
				message : this.model.message,
				inputs : this.model.inputs,
				buttons : [
					{
						text : "Cancel",
						handler : data => {
							console.log("Cancel clicked");
							this.isOpenChange.emit(false);
						}
					},
					{
						text : "Save",
						handler : data => {
							console.log("Saved clicked");
						}
					}
				]
			});
			this.nav.present(this.alert);
		}
	}
}

