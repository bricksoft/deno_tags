export type JSTag = (
  literals: TemplateStringsArray,
  ...placeholders: any[]
) => string;
export interface TemplateTag {
  (str: string): string;
  (tag: JSTag): TemplateTag;
  (literals: TemplateStringsArray, ...placeholders: any[]): string;
}

export interface TemplateTransformer<TCtx = { [key: string]: any }> {
  /**
   * Called before everything else.
   * The result of this hook will be passed to other hooks as `context`.
   * If omitted, `context` will be an empty object.
   */
  getInitialContext?: () => TCtx;
  /**
   * Called when the tag encounters a string.
   * (a string is whatever's not inside "${}" in your template literal)
   * `str` is the value of the current string
   */
  onString?: (str: string, context: TCtx) => string;
  /**
   * Called when the tag encounters a substitution.
   * (a substitution is whatever's inside "${}" in your template literal)
   * `substitution` is the value of the current substitution
   * `resultSoFar` is the end result up to the point of this substitution
   */
  onSubstitution?: (
    substitution: string,
    resultSoFar: string,
    context: TCtx
  ) => string;
  /**
   * Called when all substitutions have been parsed
   * `endResult` is the final value.
   */
  onEndResult?: (endResult: string, context: TCtx) => string;
}

export type PluginFunction<T> = (
  oldValue: string,
  newValue: string
) => TemplateTransformer<T>;
