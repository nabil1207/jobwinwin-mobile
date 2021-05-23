import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FileService } from 'src/app/core/services/crud/file.service';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { ToastService } from 'src/app/core/services/addapters/toast.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent {

  @Input('data') data = { file: null, type: 'video' };
  @Output()
  fileChanges = new EventEmitter<any>();

  constructor(private fileService: FileService, private loadingController: LoadingController, private toastService: ToastService) { }

  /**
   * console.log('aaa);
   * @param files
   */

  onFileChange(event) {
    const reader = new FileReader();
    const files = event.target.files;
    if (files && files.length) {
      const [file] = files;
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const loading = await this.loadingController.create({});
        await loading.present();
        this.data.file = null;
        this.fileService.create(file).pipe(finalize(() => {
          loading.dismiss();
        })).subscribe((response) => {
          this.data = { file: response.file, type: this.data.type };
          this.fileChanges.emit(response.file);
          this.toastService.success('Enregistré avec succès');
          loading.dismiss();
        });
      };
    }
  }

  onFileChangeVideo(event) {
    const reader = new FileReader();
    const files = event.target.files;
    if (files && files.length) {
      const [file] = files;
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const media = new Audio(reader.result.toString());
        media.onloadedmetadata = async () => {
          const loading = await this.loadingController.create({});
          await loading.present();
          this.data.file = null;
          if (media.duration > 30) {
            this.toastService.error('Durée maximale de la vidéo : 30 secondes');
            loading.dismiss();
            return;
          }
          else {
            this.fileService.create(file).pipe(finalize(() => {
              loading.dismiss();
            })).subscribe((response) => {
              this.data = { file: response.file, type: this.data.type };
              this.fileChanges.emit(response.file);
              loading.dismiss();
            });
          }
        };
      };
    }
  }

  /**
   * 
   */
  onDelete() {
    this.fileService.delete(this.data.file._id).subscribe(res => {
      this.data = Object.assign(this.data, { 'file': null });
      this.fileChanges.emit(null);
    });
  }

}
