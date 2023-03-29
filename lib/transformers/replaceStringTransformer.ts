import { replaceStringTransformer as _replaceStringTransformer } from "https://cdn.esm.sh/common-tags@1.8.2";
import { TemplateTransformer } from "../types.ts";

export const replaceStringTransformer = _replaceStringTransformer as (
  replaceWhat: string | RegExp,
  replaceWith: string | ((substring: string, ...args: any[]) => string)
) => TemplateTransformer;
