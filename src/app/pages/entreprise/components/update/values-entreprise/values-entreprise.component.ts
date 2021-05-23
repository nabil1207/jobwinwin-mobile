import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { ToastService } from 'src/app/core/services/addapters/toast.service';
import { TransService } from 'src/app/core/services/addapters/trans.service';
import { CompanyService } from 'src/app/core/services/crud/company.service';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { Response } from 'src/app/core/models/interfaces';

@Component({
  selector: 'app-values-entreprise',
  templateUrl: './values-entreprise.component.html',
  styleUrls: ['./values-entreprise.component.scss']
})
export class ValuesEntrepriseComponent implements OnInit {

  values = [];
  otherValues = [];
  checkedValue = 0;
  maxLenght = false;
  disabled = true;
  form: FormGroup;

  constructor(public modalController: ModalController, private globalService: GlobalService, private authService: AuthService,
              private toastService: ToastService, private transService: TransService, private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      values: new FormControl(this.authService.user.company.values ? this.authService.user.company.values : [])
    });
  }

  // getCheckedValues() {
  //   this.globalService.values.forEach((val) => {
  //     const index = this.authService.user.company.values.findIndex(x => x._id === val._id);
  //     this.values.push({
  //       _id: val._id,
  //       name: val.name,
  //       checked: index !== -1
  //     });
  //   });
  // }

  // onChangeValues(i: number, event) {
  //   this.checkedValue = this.values.filter(x => (x.checked)).length;
  //   if (this.checkedValue === 6) {
  //     event.source._checked = false;
  //     this.values[i]['checked'] = false;
  //     this.checkedValue -= 1;
  //   } else {
  //     this.values[i]['checked'] = event.checked;
  //     this.checkedValue += 1;
  //   }
  //   this.enableButton();
  // }

  // enableButton() {
  //   const valuesSize = this.values.filter(x => (x.checked)).length;
  //   this.disabled = valuesSize === 0;
  // }

  // addValue(element) {
  //   this.otherValues.push(element.value);
  //   element.value = null;
  // }

  // removeValue(i: number) {
  //   this.otherValues.splice(i, 1);
  // }

  /**
   * save values
   */
  onSave() {
    const val = { values: this.values.filter(x => (x.checked)).map(x => (x._id)) };
    console.log(val);
    this.companyService.updateValues(val).subscribe((response: Response) => {
      this.authService.user.company = Object.assign(this.authService.user.company, this.form.value);
      this.toastService.success(this.transService.translate(response.message));
      this.modalController.dismiss();
    });
  }

}
