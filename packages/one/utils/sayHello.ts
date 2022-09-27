import isOdd from "is-odd";
import { MyTypeInAnotherPackage } from "another";
import { HelloFromAnotherFile } from "second-module";

type K = MyTypeInAnotherPackage | HelloFromAnotherFile;

export const checkOdd = (value: number) => {
  return isOdd(value);
};
