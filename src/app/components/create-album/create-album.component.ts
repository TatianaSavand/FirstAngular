import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GalleryService } from '../../shared/services/gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss'],
})
export class CreateAlbumComponent implements OnInit {

  formAlbum: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
  });

  constructor(private galleryService: GalleryService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  /** Create album. */
  create(): void {
    if (this.formAlbum.invalid) {
      return;
    }
    this.galleryService.createAlbum(
      this.formAlbum.value.name,
      this.formAlbum.value.albumId,
    );

    // Send to gallery list page.
    this.router.navigateByUrl('/');
  }
}

