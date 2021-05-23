import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CandidateService } from 'src/app/core/services/crud/candidate.service';
import { GlobalService } from 'src/app/core/services/global/global.service';
import { Redirection, Helper } from 'src/app/core/utils';
import { AuthService } from 'src/app/core/services/global/auth.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.scss']
})
export class JobInfoComponent implements OnInit {

  form: FormGroup;
  oldPercentage = 0;
  dropdownSettings: IDropdownSettings;
  selectedItems = [];

  constructor(private candidateService: CandidateService, public globalService: GlobalService, public authService: AuthService, private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
    console.log(this.authService.user.picture);
    this.oldPercentage = Helper.calculePercentage(this.form.value, 0, 1.96);
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 0,
      allowSearchFilter: true,
      enableCheckAll: false,
    };
  }

  onItemSelect(event) {
    // this.selectedItems.push(item);
    // console.log(this.selectedItems);
    console.log(event);
  }
  OnItemDeSelect(event) {
    // this.selectedItems.slice(item);
    // this.selectedItems = this.selectedItems.filter(worker => worker !== item);
    console.log(event);
  }
  /**
   * init job infos form
   */
  private initForm(): void {
    this.form = this.fb.group({
      searchedPost: new FormControl(this.candidateService.candidate ? this.candidateService.candidate['searchedPost'] : null, Validators.required),
      jobType: new FormControl(this.candidateService.candidate ? this.candidateService.candidate['jobType'] : null , Validators.required),
      jobMode: new FormControl(this.candidateService.candidate ? this.candidateService.candidate['jobMode'] : null, Validators.required),
      supposedSalaryMin: new FormControl(this.candidateService.candidate ? this.candidateService.candidate['supposedSalaryMin'] : null, Validators.required),
      supposedSalaryMax: new FormControl(this.candidateService.candidate ? this.candidateService.candidate['supposedSalaryMax'] : null, Validators.required),
      usageTitles: new FormControl(this.candidateService.candidate ? this.candidateService.candidate['usageTitles'] : []),
      functions: new FormControl(this.candidateService.candidate ? this.candidateService.candidate['functions'] : []),
      activitySector: new FormControl(this.candidateService.candidate ? this.candidateService.candidate['activitySector'] : []),
      locations: new FormControl(this.candidateService.candidate ? this.candidateService.candidate['locations'] : []),
      contracts: new FormControl(this.candidateService.candidate ? this.candidateService.candidate['contracts'] : []),
    }, { validator: this.checkSupposedSalary });
  }

  checkSupposedSalary(group: FormGroup) {
    const min = group.controls.supposedSalaryMin.value;
    const max = group.controls.supposedSalaryMax.value;
    return min < max ? null : { salaryErreur: true };
  }

  /**
   * on save
   */
  onSave(): void {
    let value = this.form.value;
    // value['usageTitles'] = value.usageTitles.map(x => x._id);
    const percentage = Helper.calculePercentage(value, (this.authService.user.percentage ? Number(this.authService.user.percentage) : 0) - Number(this.oldPercentage), 1.96);
    console.log('New percent : ', percentage);
    this.candidateService.changeInfos(Object.assign(value, {
      currentStep: 3,
      percentage: (Math.round(percentage * 100) / 100).toFixed(2)
    })).subscribe(res => {
      console.log(res);
      this.candidateService.candidate = res;
      this.authService.user = res;
      this.candidateService.setPercentage(this.authService.user.percentage);
      Redirection.profileExperiences();
    });
  }

}
