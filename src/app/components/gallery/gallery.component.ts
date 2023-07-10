import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../shared/services/gallery.service';
import { Image } from '../../shared/interfaces/image';
import { Album } from '../../shared/interfaces/album';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  images: Image[] = [];

  albums: Album[] = [];

  filteredImages: Image[] = [];

  selectedAlbum: Album | null = null;

  search: string = '';

  albumDict: Record<string, Album> = {};


  constructor(private galleryService: GalleryService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    /** Initially load images and albums */
    this.getImages();
    this.getAlbum();
  }

  /** Load images in the gallery. */
  getImages(): void {
    this.images = this.galleryService.images;
    this.filteredImages = this.images;
  }

  /** Load albums in the gallery. */
  getAlbum(): void {
    this.albums = this.galleryService.albums;

    // Dictionary from list of albums.
    this.albumDict = {};

    // Update the dictionary to use album ID as a key and {album} as a value.
    for (let album of this.albums) {
      this.albumDict[album.id] = album;
    }
  }

  /** Delete image. */
  deleteImage(id: string): void {
    this.galleryService.deleteImage(id);
    this.getImages();
  }

  /** Delete album. */
  deleteAlbum(albumId: string): void {
    this.galleryService.deleteAlbum(albumId);
    this.getAlbum();
    if (this.selectedAlbum?.id === albumId) {
      this.selectedAlbum = null;
      this.getImages();
    }
  }

  /** Show images based on clicked album. */
  showAlbumImages(album: Album): void {
    if (album.id === this.selectedAlbum?.id) {
      this.selectedAlbum = null;
      this.getImages();
      return;
    }
    this.selectedAlbum = album;
    this.filteredImages = this.images.filter((image: Image) => image.albumId === album.id);
  }

  /** Search images. */
  searchImages(search: string) {

    // Convert search text into lowercase.
    const searchValue = search.toLowerCase();

    /** Filter images based on search text. */
    this.filteredImages = this.images.filter((image: Image): boolean => {

      // Convert image label into lowercase.
      const label: string = image.label.toLowerCase();

      // Check if image label includes search text.
      return label.includes(searchValue);
    });
  }
}

