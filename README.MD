# common-tags for deno: deno_tags

🔖 A set of well-tested, commonly used template literal tag functions for use in ES2015+.

🌟 Plus some extra goodies for easily making your own tags.

## Getting Started

To start using this module import it like so:

```ts
// import namespaces
import { Tags } from "https://deno.land/x/deno_tags/mod.ts";

// or import directly
import { stripIndent } from "https://deno.land/x/deno_tags/tags.ts";
// or
import { stripIndent } from "https://deno.land/x/deno_tags/tags/stripIndent.ts";
```

## Module Structure

This module is structured for deno and therefore it differs from common-tags.


### folders:

- /tags/*.ts - every tag as single file
- /transformers/*.ts - every transformer as single file

### files:

- /mod.ts - main module
- /tags.ts - tags indexed
- /types.ts - type interfaces to create custom transforms
- /transformers.ts - transformers indexed
- /utils.ts - utility methods provided by common-tags
