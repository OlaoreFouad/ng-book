import { AnalyticsService } from './../services/analytics.service';
import { UserService } from './../user.service';
import { Component, OnInit, ReflectiveInjector, Injector, Inject } from '@angular/core';

@Component({
  selector: 'app-user-demo-injector',
  templateUrl: './user-demo-injector.component.html',
  styleUrls: ['./user-demo-injector.component.scss']
})
export class UserDemoInjectorComponent implements OnInit {

  userService: UserService;
  name: string;

  constructor(@Inject('API_URL') private apiUrl: string,
              private analytics: AnalyticsService) {
    const injector = ReflectiveInjector.resolveAndCreate([UserService]);

    this.userService = injector.get(UserService);
  }

  onSignIn() {
    this.userService.setUser({
      name: 'Olaore Fouad'
    });
    this.name = this.userService.get().name;
    this.analytics.record({
      eventName: 'loggedIn',
      source: this.name
    });
  }

  ngOnInit() {
    console.log(this.apiUrl);
  }

}
