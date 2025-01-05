import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './event.service';
import { map } from 'rxjs/operators'; // Import map operator

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private event: EventService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | boolean | UrlTree {
    return this.event.isLogedin.pipe(
      map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          // Navigate to login if not logged in
          return this.router.createUrlTree(['/login']);
        }
        // Allow navigation if logged in
        return true;
      })
    );
  }
}
