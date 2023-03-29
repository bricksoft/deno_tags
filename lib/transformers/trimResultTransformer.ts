import { trimResultTransformer as _trimResultTransformer } from "https://cdn.esm.sh/common-tags@1.8.2";
import { TemplateTransformer } from "../types.ts";

export const trimResultTransformer = _trimResultTransformer as (
  side?: "start" | "end" | "left" | "right" | ""
) => TemplateTransformer;
