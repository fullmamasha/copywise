---
tags: [copywise]
max_turns: 20
timeout_seconds: 600
allowed_tools: [Read, Glob, Grep, Skill, Write, Edit]
---

Use Copywise. Our CSV import shows a message when some rows are rejected. The message key is import.skipped and uses an ICU plural over {count}. The button next to it downloads a CSV of exactly those rejected rows. Current English strings: import.skipped = "{count, plural, one {# row skipped} other {# rows skipped}}", import.skipped.cta = "Export". Improve both strings without changing the keys.
