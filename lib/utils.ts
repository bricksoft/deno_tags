import { createTag as _createTag } from "https://cdn.esm.sh/common-tags@1.8.0";
import { TemplateTransformer, TemplateTag, PluginFunction } from "./types.ts";

/**
 * New Tag factory
 */
export const createTag:
  | ((transformers?: Array<TemplateTransformer<any>>) => TemplateTag)
  | ((...transformers: Array<TemplateTransformer<any>>) => TemplateTag)
  | ((...pluginFunctions: PluginFunction<any>[]) => TemplateTag) = _createTag;
