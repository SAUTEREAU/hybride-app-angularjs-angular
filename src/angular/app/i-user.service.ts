import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IUserService {

  constructor() { }

  getUsers(): string[] {
    throw new Error("Should be 'implemented' in AngularJS");
  }
}
