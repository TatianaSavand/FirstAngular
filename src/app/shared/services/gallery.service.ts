import { Injectable } from '@angular/core';
import { Image } from '../interfaces/image';
import { Album } from '../interfaces/album';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {

  /** List of images. */
  images: Image[] = [];

  /** List of albums. */
  albums: Album[] = [];

  constructor() {

    /** Initially get the list of images from the Local Storage. */
    const imageData: string | null = this.loadImages();

    /** Convert Local storage value from the string to the list. */
    if (imageData) {
      this.images = JSON.parse(imageData);
    }

    /** Initially get the list of albums from the Local Storage. */
    const albumData: string | null = this.loadAlbums();

    if (albumData) {
      this.albums = JSON.parse(albumData);
    }
  }

  /**
   * Create a new image.
   *
   * @param url Image URL.
   * @param label Image label.
   * @param albumId The album the image belongs to.
   */
  createImage(url: string, label: string, albumId: string | null): void {
    const image: Image = {
      url: url,
      label: label,
      albumId: albumId,
      id: Math.random().toString(16).slice(2),
      date: new Date(),
    };
    this.images.push(image);
    this.saveImages();
  }

  /** @returns Stored images in Local Storage. */
  loadImages(): string | null {
    return localStorage.getItem('images');
  }

  /** Save images in Local Storage. */
  saveImages(): void {
    localStorage.setItem('images', JSON.stringify(this.images));
  }

  /**
   * Create a new album.
   *
   * @param name Album name.
   * @param albumId Album ID.
   */
  createAlbum(name: string, albumId: string): void {
    const album: Album = {
      name: name,
      id: Math.random().toString(16).slice(2),
    };
    this.albums.push(album);
    this.saveAlbums();
  }

  /** @returns Stored albums in Local Storage. */
  loadAlbums(): string | null {
    return localStorage.getItem('albums');
  }

  /** Save albums in Local Storage. */
  saveAlbums(): void {
    localStorage.setItem('albums', JSON.stringify(this.albums));
  }

  /** Delete image from the gallery. */
  deleteImage(id: string): void {
    this.images = this.images.filter((image: Image): boolean => image.id !== id);
    this.saveImages();
  }

  /** Delete album from the gallery. */
  deleteAlbum(id: string): void {
    this.albums = this.albums.filter((album: Album): boolean => album.id !== id);
    this.saveAlbums();
  }
}


