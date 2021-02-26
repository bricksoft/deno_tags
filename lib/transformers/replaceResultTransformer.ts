import { replaceResultTransformer as _replaceResultTransformer } from "https://cdn.esm.sh/common-tags@1.8.0";
import { TemplateTransformer } from "../types.ts";

export const replaceResultTransformer = _replaceResultTransformer as (
  replaceWhat: string | RegExp,
  replaceWith: string | ((substring: string, ...args: any[]) => string)
) => TemplateTransformer;
