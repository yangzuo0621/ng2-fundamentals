import { Directive } from "@angular/core";
import { Validator, FormGroup } from "@angular/forms";

@Directive({
    selector: '[validateLocation]'
})
export class LocationValidator implements Validator {

    validate(fromGroup: FormGroup): { [key: string]: any } {
        let addressControl = fromGroup.controls['address'];
        let cityControl = fromGroup.controls['ciry'];
        let countryControl = fromGroup.controls['country'];
        let onlineUrlControl = (<FormGroup>fromGroup.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        } else {
            return { validateLocation: false };
        }
    }
}