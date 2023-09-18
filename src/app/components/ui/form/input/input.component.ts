import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit {
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() type?: string = 'text';

  formControl!: FormControl;
  onTouched!: () => void;
  onChange!: () => void;

  ngOnInit(): void {
    console.log(this.formControl);
    this.formControl = new FormControl('');
  }

  writeValue(value: string): void {
    this.formControl.setValue(value);
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
    this.formControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }
}
