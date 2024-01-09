import { WebPlugin } from '@capacitor/core';

import type { IosSwipePlugin } from './definitions';

export class IosSwipeWeb extends WebPlugin implements IosSwipePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
