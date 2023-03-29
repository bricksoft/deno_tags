import { splitStringTransformer as _splitStringTransformer } from "https://cdn.esm.sh/common-tags@1.8.2";
import { TemplateTransformer } from "../types.ts";

export const splitStringTransformer = _splitStringTransformer as (
  splitBy: string
) => TemplateTransformer;
