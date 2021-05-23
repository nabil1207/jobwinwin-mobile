import { Component, OnInit, Input, forwardRef, AfterViewInit } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true
    }
  ]
})
export class MultiSelectComponent implements OnInit, ControlValueAccessor {

  @Input('label') label: string;
  @Input('collection') collection: string;
  @Input('limit') limit: number;
  value = [];
  disabled = false;
  rows = [];

  constructor(public globalService: GlobalService) { }

  ngOnInit() { }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value): void {
    this.value = value;
    this.rows = this.globalService[this.collection].map(x => {
      const index = this.value.findIndex(val => val === x._id);
      return {
        _id: x._id,
        name: x.name,
        checked: index !== -1
      };
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * detecte values changes
   * @param i
   * @param event 
   */
  onChangeValue(i: number, event) {
    this.rows[i]['checked'] = event.checked;
    const rowsSize = this.rows.filter(x => (x.checked)).length - 1;
    if (this.limit && this.limit === rowsSize) { // validation limit
      event.source._checked = false;
      this.rows[i]['checked'] = false;
    } else if (event.checked) {
      this.value.push(this.rows[i]._id);
    } else {
      const index = this.value.findIndex(x => x === this.rows[i]._id);
      if (index !== -1) {
        this.value.splice(index, 1);
      }
    }
  }

}
