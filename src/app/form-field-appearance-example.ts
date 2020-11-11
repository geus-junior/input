import { Component, ViewEncapsulation } from "@angular/core";

/** @title Form field appearance variants */
@Component({
  selector: "form-field-appearance-example",
  templateUrl: "form-field-appearance-example.html",
  styleUrls: ["form-field-appearance-example.css"],
  encapsulation: ViewEncapsulation.None
})
export class FormFieldAppearanceExample {

  public releaseCode: string = "1231126421654154154656485649659859745654548765955454";
  public serialNumber: string = ""  ;

  onClick(id: string): void {

    let lElement = document.getElementById(id);
    lElement.select();

  }
}
