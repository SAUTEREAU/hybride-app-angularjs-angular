import { Component, OnInit } from '@angular/core';
import { RoleService } from "../role.service";
import { IUserService } from "../i-user.service";

type UserAndRole = {
  user: string,
  role: string
}

@Component({
  selector: 'user-and-role',
  templateUrl: './user-and-role.component.html',
  styleUrls: ['./user-and-role.component.css']
})
export class UserAndRoleComponent implements OnInit {

  roles: string[];
  users: string[];

  userAndRoles: UserAndRole[]

  constructor(private roleService: RoleService,
              private userService: IUserService) { }

  ngOnInit(): void {
    this.roles = this.roleService.getRoles();
    this.users = this.userService.getUsers();
    this.userAndRoles = this.users.reduce((prev, current, index) =>
      [...prev, { user: current, role: this.roles[index] }], <UserAndRole[]>[]);
  }

}
