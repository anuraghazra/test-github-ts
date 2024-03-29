import React from "react";
import merge from "deepmerge";
import fs from 'fs';
import { HelloFromAnotherFile } from "second-module";
import { MyTypeInAnotherPackage } from "another";
import { logger, checkOdd } from "utils";

logger();
const isOdd = checkOdd(2);

type GitTree = {
  path: string;
  mode: string;
  type: string;
  sha: string;
  size: number;
  url: string;
}[];

const MyComponentIDontKnowWhereItIs: React.FC<HelloFromAnotherFile> = ({
  hello,
}) => {
  const [count, setCount] = React.useState(() => {});

  React.useEffect(() => {});

  return <p>{hello}</p>;
};

const another: MyTypeInAnotherPackage = { msg: "nice" };

const m = merge({}, {});

// Type level bubble sort algorithm
// https://twitter.com/anuraghazra

type BubbleSort<
  A extends any[],
  Curr extends number = A["length"]
> = Curr extends 1
  ? A
  : A extends [infer F, infer S, ...infer Rest]
  ? BubbleSort<
      [
        ...(M.Comparator<M.Num<F>, M.Num<S>> extends true
          ? [S, ...BubbleSort<[F, ...Rest], M.Sub<Curr, 1>>]
          : [F, ...BubbleSort<[S, ...Rest], M.Sub<Curr, 1>>])
      ],
      M.Sub<Curr, 1>
    >
  : never;

type Demo1 = BubbleSort<[9, 8, 2, 6, 5, 4, 1]>;
//   ^?
type Demo2 = BubbleSort<[234, 43, 55, 63, 5, 6, 235, 547]>;
//   ^?

// Math Utils
namespace M {
  export type Num<T> = Extract<T, number>;
  type Length<T extends any[]> = T["length"];
  type Push<T extends any[], Val> = [...T, Val];
  type NTuple<N extends number, T extends any[] = []> = T["length"] extends N
    ? T
    : NTuple<N, Push<T, any>>;

  export type Add<A extends number, B extends number> = Length<
    [...NTuple<A>, ...NTuple<B>]
  >;
  export type Sub<A extends number, B extends number> = NTuple<A> extends [
    ...infer U,
    ...NTuple<B>
  ]
    ? Length<U>
    : never;

  export type Comparator<N1 extends number, N2 extends number> = N1 extends N2
    ? false
    : [Sub<N2, N1>] extends [never]
    ? true
    : false;
}

/**
 * Bubble sort
 *
 * Sorts elements like a dummy
 *
 * @example
 *
 * ```ts
 * bubbleSort([234, 43, 55, 63, 5, 6, 235, 547]);
 * ```
 */
function bubbleSort(input: number[], curr: number = 0): number[] {
  if (curr == input.length) {
    return input;
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] > input[i + 1]) {
      let newvar = input[i];
      input[i] = input[i + 1];
      input[i + 1] = newvar;
    }
  }
  return bubbleSort(input, curr + 1);
}

bubbleSort([234, 43, 55, 63, 5, 6, 235, 547]);

type Children = {
  msg: string;
  from: string;
};

type FooWithBar = {
  a: {
    b: {
      c: number;
    };
  };
};

declare function sayHello(arg: FooWithBar): void;
const fail = {
  a: {
    b: {
      c: "string",
    },
  },
};

const jsx = <MyComponentIDontKnowWhereItIs hello={"1"} />;

sayHello(fail);
