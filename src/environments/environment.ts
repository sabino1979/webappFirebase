// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // llaves por proyectos firebase
  firebase: {
    apiKey: 'AIzaSyDpAwOJobetTAq5620ge-EQ7tjPoohabe4',
    authDomain: 'fidelia-foto.firebaseapp.com',
    databaseURL: 'https://fidelia-foto.firebaseio.com',
    projectId: 'fidelia-foto',
    storageBucket: 'fidelia-foto.appspot.com',
    messagingSenderId: '770835467433',
    appId: '1:770835467433:web:cb9f69bbb567728c'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
