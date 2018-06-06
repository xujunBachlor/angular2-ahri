import { RouterConfigModule } from './router.module';

describe('RouterModule', () => {
  let routerModule: RouterConfigModule;

  beforeEach(() => {
    routerModule = new RouterConfigModule();
  });

  it('should create an instance', () => {
    expect(RouterConfigModule).toBeTruthy();
  });
});
