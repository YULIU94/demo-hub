import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {TestComponent} from './components/test/test.component';
import {MainComponent} from "./components/main/main.component";

const APP_ROUTES: Routes = [
  {path: '', component: MainComponent},
  {path: 'test', component: TestComponent},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
