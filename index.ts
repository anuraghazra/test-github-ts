// POC of type incompatibility diff view

type Children = {
  msg: string;
  from: string;
};
type FooWithBar = {
  a: {
    b: {
      c: number
    }
  };
};

declare function sayHello(arg: FooWithBar): void;
const fail = {
  a: {
    b: {
      c: 'string'
    }
  }
};

sayHello(fail);
