---
name: copywise
description: UX writing and microcopy for product interfaces in English, Russian, Ukrainian, and other European languages («тексты интерфейса», «UX-редактура», «тексти інтерфейсу»). Use whenever you write, implement, review, or localize text a person sees in a product, even when the request only says to build a feature. Covers buttons, headings, forms, validation and error messages, empty states, onboarding, notifications and SMS, checkout, pricing, paywalls, landing pages, and locale files. Traces what each control actually does and matches the product's voice, terms, layout, and locale, including the form of address (ты/вы, ти/ви, du/Sie, tu/vous), gender-neutral phrasing, plural forms, and each language's typography. Not for long-form articles, blog posts, or technical documentation.
---

# Copywise

Help a person recognize where they are, make a decision, and tell what happened. Spend words where a wrong guess costs them time, money, privacy, or work.

## Start from the product

1. Read the brief and relevant UI. Follow the action through its handler, route, or documented flow. For a greenfield design, use the capabilities in the brief. Identify who is here, what brought them here, what they can do, and what the system knows at this moment.
2. Find the product’s terms and locale in nearby screens, its string catalog, and its editorial guide. Keep established object names and approved wording. A request written in Russian can describe an English-language interface. Follow the requested UI language, then the existing locale, then the brief’s language. Write each string natively in that language instead of translating an English or Russian draft line by line, and open the reference for that language below.
3. Use an explicit voice preference first, then the product’s established voice, then the category defaults in [Voice and product categories](references/voice.md). For a new product, choose a voice once for the flow. Reduce playfulness when money, access, privacy, loss, or recovery is involved. In Russian, the voice also settles the form of address, so keep the product’s «ты» or «вы» in every state.
4. Decide which pieces of text earn a place. An icon may need an accessible name. A familiar, labeled control may need no explanation at all. Preserve well-written strings in an audit and untouched surfaces during implementation.

## Write the screen

- Put the distinguishing information first. “April invoices” helps someone scan a list. “Here are your invoices for April” makes them read further for the same answer.
- Give each element a job. The heading orients. Supporting text supplies a consequence, constraint, or reason. The action names the next step. Omit a layer when it repeats another.
- Trace every primary action. If it opens a review, say “Review order”. If it places the order, say “Place order”. Use a conventional short label when the destination is obvious and the choice is reversible.
- Describe the user's action and its purpose. A feature that uses one selected item establishes what the user chooses. Claims about everything the app can access, retain, share, or delete need separate evidence from the brief or implementation. If the scope is unknown, let the action label do the work. If that scope matters for consent, flag the missing fact to the product owner.
- Keep the meaning of each product state consistent across the count, status, action, and exported data. Follow the event or business definition even when an internal key has an older name. Use the same user-facing term for the same set of items and preserve distinctions between different sets.
- Use the language people use for the task. Prefer a concrete object and an ordinary verb. Remove ceremony, interchangeable claims, and false intimacy.
- Default to ordinary commas and periods in prose. Generated copy leans on decorative dashes (—, –), dot separators (·, •), and chains of clipped fragments. They give the text a telegraphic rhythm and leave the reader to guess how the parts relate. Keep one thought in one sentence and use a conjunction when it clarifies the relationship. Two short complete sentences are fine. A short action label usually needs no punctuation. Preserve marks required by grammar, names, values, or an established format, such as the range «10–15 минут» or the Russian dash between subject and predicate in «Цель — 10 000 шагов».
- For implementation, put the text where the project already stores it. Preserve keys, placeholders, escape rules, markup, plural branches, accessible names, and component contracts. Give each plural message every category its locale uses. Change copy within scope. Flag a missing UI capability separately instead of promising it in the text.

## Choose the reference for the task

| Task | Read |
| --- | --- |
| Set a voice, choose a category, or adapt tone across states | [Voice and product categories](references/voice.md) |
| Write product flows, buttons, forms, dialogs, or messages | [Interface patterns](references/patterns.md) |
| Turn a feature into a landing page, offer, or purchase decision | [Conversion writing](references/conversion.md) |
| Fit text to real layouts, check accessibility, or adapt text across languages and locale files | [Reading, typography, and localization](references/reading.md) |
| Write, edit, or review any Russian interface text | [Russian interface writing](references/russian-product-writing.md). Apply its rules on address, gender, substitutions, plurals, and typography to every Russian string. Use its casebook to see how products handle a similar decision, then write a fresh line in the target product’s voice. |
| Write, edit, or review any Ukrainian interface text | [Ukrainian interface writing](references/ukrainian-product-writing.md). Apply its rules on address, the vocative, gender, substitutions, plurals, Russian calques, and spelling to every Ukrainian string. |
| Write, edit, or review German, French, Spanish, Italian, Portuguese, Polish, Czech, Dutch, or Swedish interface text | [European languages](references/european-languages.md). Use its defaults for address, button form, plural categories, and typography unless the product already decided otherwise. |

## Review and deliver

Read the heading and primary action alone. Predict what happens. Compare that prediction with the next screen. Then read the full flow looking for an unsupported claim, an unexplained state, a repeated thought, or a missing consequence. Try the narrow layout and a longer supported translation when a preview is available.

Read the visible strings together. If several lines use the same “claim — payoff” or “action · detail” pattern, rewrite each around its actual purpose. Replacing every separator with a comma leaves the underlying rhythm intact.

Never infer that a payment failed from a network timeout, an email arrived from a send request, or a draft survived from an error alone. With missing facts, write the strongest accurate line available. If a missing fact prevents an informed commitment, flag that exact decision outside the UI before shipping the commitment copy.

When building, implement one coherent version in the requested surface. When drafting, return paste-ready text grouped by actual component. When auditing, show the current string, the proposed change or removal, and the reader’s reason. For more than a few strings, a table with the key or location, current text, proposal, and reason is easiest to act on. After the strings, list the facts you could not confirm as questions for the product owner. Write your explanation in the language of the request and the strings in the language of the interface. Give variants only when requested or when they represent a decision the owner actually needs to make.
