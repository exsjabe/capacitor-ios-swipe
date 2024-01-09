import { registerPlugin } from '@capacitor/core';

import type { IosSwipePlugin } from './definitions';

const IosSwipe = registerPlugin<IosSwipePlugin>('IosSwipe', {
  web: () => import('./web').then(m => new m.IosSwipeWeb()),
});

export * from './definitions';
export { IosSwipe };
