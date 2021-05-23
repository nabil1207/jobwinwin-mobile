import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  /**
   * success message
   * @param message
   */
  async success(message: string) {
    this.presentToast('success', message);
  }

  /**
   * success message
   * @param message
   */
  async error(message: string) {
    this.presentToast('danger', message);
  }
  /**
   * show toast message
   * @param color
   * @param message
   */
  private async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'top',
      cssClass : 'customToast'
    });
    toast.present();
  }



}
