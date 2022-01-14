import { Injectable } from "@angular/core";

/**
 * Сервис для работы с Local Storage
 */
@Injectable()
export class LocalStorageService {

  version: number = 1;

  constructor() {

  }

  public read(key: string) {
    return localStorage.getItem(this.getKeyWithVersion(key));
  }

  public save(key: string, data: any) {
    localStorage.setItem(this.getKeyWithVersion(key), data);
  }

  private getKeyWithVersion(key: string): string {
    return `${key}-v${this.version}`;
  }

}
