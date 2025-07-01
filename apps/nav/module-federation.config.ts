import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'nav',
  exposes: {
    './Routes': 'apps/nav/src/app/components/nav/nav.routes.ts',
    './Nav': 'apps/nav/src/app/components/nav/nav.ts',
  },
  shared(libraryName, sharedConfig) {
    const sharedLibs = ['@angular/core', '@angular/common', '@angular/router'];

    const config = { ...sharedConfig, singleton: true, strictVersion: true };
    return sharedLibs.includes(libraryName) ? config : false;
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
