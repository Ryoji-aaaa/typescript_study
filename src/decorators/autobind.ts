namespace App {
  //autobind decorator
  export function autobind(
    _t: any,
    _2: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMetod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,
      get() {
        const boundFn = originalMetod.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }
}
