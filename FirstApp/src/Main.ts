import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { StudentModule } from './Module/StudentModule';

const platform = platformBrowserDynamic();

platform.bootstrapModule(StudentModule);