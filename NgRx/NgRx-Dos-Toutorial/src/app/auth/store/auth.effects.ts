import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinnerAction } from 'src/app/store/Shared/shared.action';
import { loginStartAction, loginSuccess } from './auth.action';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  login$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(loginStartAction),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            const user = this.authService.formatUser(data);
            this.store.dispatch(setLoadingSpinnerAction({ status: false }));
            return loginSuccess({ user });
          })
        );
      })
    );
  });
}
