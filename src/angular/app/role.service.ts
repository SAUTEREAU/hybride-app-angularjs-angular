import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  roles = [
    'Dev',
    'Dev',
    'PO',
    'EM'
  ]

  constructor() { }

  getRoles(): string[] {
    return this.roles;
  }

  addRole(role: string): void  {
    this.roles.push(role);
  }

}
