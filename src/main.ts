/**
 * Angular bootstrapping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

/**
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app/app.module';

/**
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(environment.decorateModuleRef)
    .catch(err => console.error(err));
}

/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', domReadyHandler, false);
    break;
  case 'interactive':
  case 'complete':
  default:
    main();
}

function domReadyHandler() {
  document.removeEventListener('DOMContentLoaded', domReadyHandler, false);
  main();
}
