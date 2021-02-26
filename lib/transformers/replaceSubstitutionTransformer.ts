import { replaceSubstitutionTransformer as _replaceSubstitutionTransformer } from "https://cdn.esm.sh/common-tags@1.8.0";
import { TemplateTransformer } from "../types.ts";

export const replaceSubstitutionTransformer = _replaceSubstitutionTransformer as (
  replaceWhat: string | RegExp,
  replaceWith: string | ((substring: string, ...args: any[]) => string)
) => TemplateTransformer;
