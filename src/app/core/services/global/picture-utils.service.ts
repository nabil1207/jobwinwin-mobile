import { Injectable } from '@angular/core';
// import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { File, IWriteOptions, FileEntry } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class PictureUtilsService {
  objectToSave: Array<any> = new Array();
  fileTransfer: FileTransferObject;
  private takePictureOptions: CameraOptions = {
    allowEdit: true,
    cameraDirection: this.camera.Direction.BACK,
    sourceType: this.camera.PictureSourceType.CAMERA,
    destinationType: this.camera.DestinationType.DATA_URL
  };

  private galleryOptions: CameraOptions = {
    allowEdit: true,
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    correctOrientation: true
  };

  constructor(private camera: Camera) { }

  /**
   * Take a picture and return a promise with the image data
   */
  uploadFromCamera() {
    return new Promise((resolve, reject) => {
      this.camera.getPicture(this.takePictureOptions).then(async (imageData) => {
        resolve({ imageData: 'data:image/jpeg;base64,' + imageData }); // convert picture to blob
      }, (err) => {
        reject(err);
      });
    });
  }

  /**
   * open the gallery and Return a promise with the image data
   */
  uploadFromGallery() {
    return new Promise((resolve, reject) => {
      this.camera.getPicture(this.galleryOptions).then(async (imageData) => {
        resolve({ imageData: 'data:image/jpeg;base64,' + imageData }); // convert picture to blob
      }, (err) => {
        reject(err);
      });
    });
  }

}