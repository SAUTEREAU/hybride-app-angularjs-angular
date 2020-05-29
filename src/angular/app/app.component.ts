import {Component, OnInit} from '@angular/core';
import {downgradeComponent, downgradeInjectable, UpgradeModule} from "@angular/upgrade/static";
import {UserAndRoleComponent} from "./user-and-role-component/user-and-role.component";
import {IUserService} from "./i-user.service";
import {RoleService} from "./role.service";

declare var angular: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hybride-app';

  constructor(private upgrade: UpgradeModule) {
  }

  ngOnInit(): void {
    this.downgradeSimpleService();
    this.upgradeAngularjsService();

    this.upgrade.bootstrap(document.body, ['app']);

    this.downgradeSimpleComponentWithRoute();
  }

  downgradeSimpleComponentWithRoute() {
    angular.module('app')
      .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home.both', {
          url: 'both',
          template: '<user-and-role></user-and-role>'
        })
      }]);
    let directive = downgradeComponent({
      component: UserAndRoleComponent
    });
    angular.module('app')
      .directive('userAndRole', directive);
  }

  downgradeSimpleService() {
    let service = downgradeInjectable(IUserService);
    angular.module('app').factory('iUserService', service);
  }

  upgradeAngularjsService() {
    let service = downgradeInjectable(RoleService);
    angular.module('app').factory('roleService', service);
  }

}
