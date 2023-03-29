import { inlineArrayTransformer as _inlineArrayTransformer } from "https://cdn.esm.sh/common-tags@1.8.2";
import { TemplateTransformer } from "../types.ts";

export const inlineArrayTransformer = _inlineArrayTransformer as (opts?: {
  separator?: string;
  conjunction?: string;
  serial?: boolean;
}) => TemplateTransformer;
