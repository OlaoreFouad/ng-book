import { UserService } from './../user.service';
import { Component, OnInit, ReflectiveInjector, Injector } from '@angular/core';

@Component({
  selector: 'app-user-demo-injector',
  templateUrl: './user-demo-injector.component.html',
  styleUrls: ['./user-demo-injector.component.scss']
})
export class UserDemoInjectorComponent implements OnInit {

  userService: UserService;
  name: string;

  constructor() {
    const injector = ReflectiveInjector.resolveAndCreate([UserService]);

    this.userService = injector.get(UserService);
  }

  onSignIn() {
    this.userService.setUser({
      name: 'Olaore Fouad'
    });
    this.name = this.userService.get().name;
  }

  ngOnInit() {
  }

}
