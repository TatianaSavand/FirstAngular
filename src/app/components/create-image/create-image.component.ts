import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../shared/services/gallery.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Album } from '../../shared/interfaces/album';

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.scss'],
})
export class CreateImageComponent implements OnInit {

  formImage: FormGroup = this.formBuilder.group({
    url: ['', Validators.required],
    label: [''],
    albumId: [null],
  });

  albums: Album[] = [];

  constructor(private galleryService: GalleryService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.albums = this.galleryService.albums;
  }

  /** Create image. */
  submit(): void {
    if (this.formImage.invalid) {
      return;
    }
    this.galleryService.createImage(
      this.formImage.value.url,
      this.formImage.value.label,
      this.formImage.value.albumId,
    );

    // Send to gallery list page.
    this.router.navigateByUrl('/');
  }
}
