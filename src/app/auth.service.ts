export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    // use a promise to fake it will take some time to reach an Auth server.
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    )
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
