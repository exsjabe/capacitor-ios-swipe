export interface IosSwipePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
