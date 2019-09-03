import { ErrorHandler, Injectable, Injector } from '@angular/core';
import * as stacktrace from 'stacktrace-js';
import { LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/user/user.service';
import { LogServerService } from './log-server.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(
        private injector: Injector) { }

    async handleError(error: any): Promise<void> {
        console.log('passei pelo handle');

        // Injecao de dependencia(manualmente)
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const logService = this.injector.get(LogServerService);
        const router = this.injector.get(Router);

        // Informacoes do log
        const message = error.message ? error.message : '';
        const url = location instanceof LocationStrategy ? location.path() : '';
        const userName = userService.getUserName();

        const stacktraceFrames = await stacktrace.fromError(error);

        if (environment.production) {
            router.navigate(['/error']);
        }

        if (stacktraceFrames) {
            const stacktraceAsString = stacktraceFrames.map(stackFrame => stackFrame.toString())
                                                       .join('\n');
            console.log(message);
            console.log(stacktraceAsString);

            logService.log({ message, url, userName, stack: stacktraceAsString })
                .subscribe(
                    () => console.log('log gravado no server com sucesso'),
                    () => console.log('erro ao gravar o log no server'));
        }
    }
}
