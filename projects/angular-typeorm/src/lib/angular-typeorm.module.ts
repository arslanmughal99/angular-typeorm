/* eslint-disable no-constant-condition */
import { CommonModule } from '@angular/common';
import { ConnectionOptions, createConnection } from 'typeorm';
import {
  NgModule,
  ModuleWithProviders,
  APP_BOOTSTRAP_LISTENER,
} from '@angular/core';

// @dynamic
@NgModule({
  exports: [],
  providers: [],
  declarations: [],
  imports: [CommonModule],
})
export class AngularTypeormModule {
  /**
   * @param duration time in seconds
   * @description Pause for given amount of time
   */
  private static wait(duration: number): Promise<void> {
    return new Promise((resolve, __) => {
      setTimeout(() => {
        resolve();
      }, duration * 1000);
    });
  }

  /**
   * @param configs  connection options
   * @description Initialize TypeOrm connection for root
   */
  static forRoot(
    configs: ConnectionOptions
  ): ModuleWithProviders<AngularTypeormModule> {
    return {
      ngModule: AngularTypeormModule,
      providers: [
        {
          provide: APP_BOOTSTRAP_LISTENER,
          useFactory: () => async () => {
            let retryCount = 0;
            while (true) {
              try {
                return await createConnection(configs);
              } catch (err) {
                retryCount += 1;
                console.error(
                  `TYPEORM CONNECTION ATTEMPT ${retryCount} FAILED: `,
                  err
                );
                await this.wait(5);
                continue;
              }
            }
          },
          multi: true,
        },
      ],
    };
  }
}
