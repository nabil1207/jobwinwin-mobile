import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdvertisementService } from 'src/app/core/services/crud/advertisement.service';
import { GlobalService } from 'src/app/core/services/global/global.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{

  descriptions: string[] = [];
  form: FormGroup;
  constructor(public modalController: ModalController, public advertisementService: AdvertisementService, public globalService: GlobalService) {
  }

  ngOnInit(): void {
    console.log(this.advertisementService.advertisement);
    this.descriptions = this.advertisementService.advertisement.descriptions;
    this.form = new FormGroup({
      usageTitles: new FormControl(this.advertisementService.advertisement.usageTitles ? this.advertisementService.advertisement.usageTitles : []),
      function: new FormControl(this.advertisementService.advertisement.function),
      desiredJob: new FormControl(this.advertisementService.advertisement.desiredJob, Validators.required),
      descriptions: new FormControl(null)
    });
  }

  close() {
    this.modalController.dismiss();
  }

  /**
   * add new task
   * @param element
   */
  addTask(element) {
    if (element.value) {
      this.descriptions.push(element.value);
      element.value = null;
    }
  }

  /**
   * delete tasks
   * @param i
   */
  deleteTask(i: number) {
    this.descriptions.splice(i, 1);
  }

  /**
   * add experiences
   */
  onSave() {
    this.advertisementService.updateTasks(this.advertisementService.advertisement._id, Object.assign(this.form.value, {descriptions: this.descriptions})).subscribe(res => {
      this.close();
    })
  }

}
