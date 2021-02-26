import { stripIndentTransformer as _stripIndentTransformer } from "https://cdn.esm.sh/common-tags@1.8.0";
import { TemplateTransformer } from "../types.ts";

export const stripIndentTransformer = _stripIndentTransformer as (
  type?: "initial" | "all"
) => TemplateTransformer;
