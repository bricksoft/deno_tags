import { createTag as _createTag } from "https://cdn.esm.sh/common-tags@1.8.2";
import { TemplateTransformer, TemplateTag, PluginFunction } from "./types.ts";

/**
 * New Tag factory
 */
export const createTag:
  | (<T>(transformers?: Array<TemplateTransformer<T>>) => TemplateTag)
  | (<T>(...transformers: Array<TemplateTransformer<T>>) => TemplateTag)
  | (<T>(...pluginFunctions: PluginFunction<T>[]) => TemplateTag) = _createTag;
