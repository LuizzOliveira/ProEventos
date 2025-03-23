import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(
    private router: Router,
    private toaster: ToastrService
  ) {}

  canActivate(): boolean {
    if (localStorage.getItem('user') !== null)
      return true;

    this.toaster.info('Usuário não autenticado!');
    this.router.navigate(['/user/login']);
    return false;
  }

}
