import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  private isLoggedInFlag: boolean = false;
  constructor(private http: HttpClient) { }

  apiUrl: string = 'http://localhost:3001/api/auth/loggedin';
  httpOptions = {
  	headers: new HttpHeaders({
    	'Content-Type': 'application/json',
      'mode':'cors'
  	}), withCredentials: true,
	};

  getLoggedIn(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.get<boolean>(this.apiUrl, this.httpOptions)
        .toPromise()
        .then((response) => {
          if (response !== undefined) {
            this.isLoggedInFlag = response;
          }
          resolve();
        })
        .catch((error) => {
          console.error(error);
          reject();
        });
    });
  }

  async checkLoggedIn(): Promise<boolean> {
    try {
      await this.getLoggedIn();
      return this.isLoggedInFlag;
    } catch (error) {
      console.error(error);
      return false;
    }
  }


//   login(): void {
//   this.getLoggedIn().then(isLoggedIn => {
//     if (isLoggedIn) {
//       this.isLoggedInFlag = true;
//       // Resto de la lógica después de la autenticación exitosa
//     } else {
//       // Lógica para el caso de autenticación fallida
//       this.isLoggedInFlag = false;
//     }
//   });
// }

  logout(): void {
    // Realiza la lógica de cierre de sesión y establece this.isLoggedInFlag en false
    this.isLoggedInFlag = false;
    // Por ejemplo, elimina la cookie o el token de autenticación y establece this.isLoggedInFlag en false
  }
}
