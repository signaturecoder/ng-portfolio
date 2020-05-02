export class
EnsureModuleLoadedOnceGaurd {
  constructor(targetModule: any) {
    if(targetModule){
      throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module once in the AppModule. `);
    }
  }
}
