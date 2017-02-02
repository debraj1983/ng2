import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { EmployeeModule } from './Module/EmployeeModule';

const platform = platformBrowserDynamic();

platform.bootstrapModule(EmployeeModule);