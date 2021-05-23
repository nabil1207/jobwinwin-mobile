import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/addapters/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loading: boolean;

  constructor(private loaderService: LoaderService) {

    this.loaderService.isLoading.subscribe((result) => {
      this.loading = result;
    });

  }

  ngOnInit(): void {
  }

}
