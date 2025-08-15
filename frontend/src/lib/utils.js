import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...classes) => {
  //compine class names
  return twMerge(clsx(classes));
};
