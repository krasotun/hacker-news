import { Component, OnDestroy } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { BehaviorSubject, Subject, Subscription, takeUntil } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  private _routerSubscription!: Subscription | null;
  private readonly _destroySubject = new Subject<void>();
  private readonly _loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this._loadingSubject.pipe(takeUntil(this._destroySubject));

  constructor(private _router: Router) {
    this._routerSubscription = this._router.events.subscribe((res: Event) => {
      this._setLoaderStatus(res);
    });
  }
  private _setLoaderStatus(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this._loadingSubject.next(true);
    }
    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this._loadingSubject.next(false);
    }
  }
  ngOnDestroy(): void {
    this._destroySubject.next();
    this._destroySubject.complete();
    if (this._routerSubscription) {
      this._routerSubscription.unsubscribe();
      this._routerSubscription = null;
    }
  }
}
