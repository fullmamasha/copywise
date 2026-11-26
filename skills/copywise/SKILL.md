---
name: copywise
description: Write, implement, and review user-facing product copy. Apply whenever creating or changing screens, components with visible strings, onboarding, forms, errors, notifications, checkout, pricing, landing pages, or translations, even when the request only says to build a feature. Match the product voice, actual behavior, reading context, and locale. Use for UX writing and copy audits.
---

# Copywise

Help a person recognize where they are, make a decision, and tell what happened. Spend words where a wrong guess costs them time, money, privacy, or work.

## Start from the product

1. Read the brief and relevant UI. Follow the action through its handler, route, or documented flow. For a greenfield design, use the capabilities in the brief. Identify who is here, what brought them here, what they can do, and what the system knows at this moment.
2. Find the product’s terms and locale in nearby screens, its string catalog, and its editorial guide. Keep established object names and approved wording. A request written in Russian can describe an English-language interface. Follow the requested UI language, then the existing locale, then the brief’s language.
3. Use an explicit voice preference first, then the product’s established voice, then the category defaults in [Voice and product categories](references/voice.md). For a new product, choose a voice once for the flow. Reduce playfulness when money, access, privacy, loss, or recovery is involved.
4. Decide which pieces of text earn a place. An icon may need an accessible name. A familiar, labeled control may need no explanation at all. Preserve well-written strings in an audit and untouched surfaces during implementation.

## Write the screen

- Put the distinguishing information first. “April invoices” helps someone scan a list. “Here are your invoices for April” makes them read further for the same answer.
- Give each element a job. The heading orients. Supporting text supplies a consequence, constraint, or reason. The action names the next step. Omit a layer when it repeats another.
- Trace every primary action. If it opens a review, say “Review order”. If it places the order, say “Place order”. Use a conventional short label when the destination is obvious and the choice is reversible.
- Describe the user's action and its purpose. A feature that uses one selected item establishes what the user chooses. Claims about everything the app can access, retain, share, or delete need separate evidence from the brief or implementation. If the scope is unknown, let the action label do the work. If that scope matters for consent, flag the missing fact to the product owner.
- Keep the meaning of each product state consistent across the count, status, action, and exported data. Follow the event or business definition even when an internal key has an older name. Use the same user-facing term for the same set of items and preserve distinctions between different sets.
- Use the language people use for the task. Prefer a concrete object and an ordinary verb. Remove ceremony, interchangeable claims, and false intimacy.
- Default to ordinary commas and periods in prose. Keep one thought together and use a conjunction when it clarifies the relationship. In headings, body copy, buttons, and notifications, avoid decorative dashes (—, –), dot separators (·, •), and strings of fragments split by periods. A short action label usually needs no punctuation. Preserve marks required by grammar, names, values, or an established format.
- For implementation, put the text where the project already stores it. Preserve keys, placeholders, escape rules, markup, plural branches, accessible names, and component contracts. Change copy within scope. Flag a missing UI capability separately instead of promising it in the text.

## Choose the reference for the task

| Task | Read |
| --- | --- |
| Set a voice, choose a category, or adapt tone across states | [Voice and product categories](references/voice.md) |
| Write product flows, buttons, forms, dialogs, or messages | [Interface patterns](references/patterns.md) |
| Turn a feature into a landing page, offer, or purchase decision | [Conversion writing](references/conversion.md) |
| Fit text to real layouts or adapt it across languages | [Reading, typography, and localization](references/reading.md) |
| Write or review an interface in Russian, or study how Russian-language products handle a similar decision | [Russian product writing](references/russian-product-writing.md). Choose a case by the user's situation and write a fresh line in the target product's voice. |

## Review and deliver

Read the heading and primary action alone. Predict what happens. Compare that prediction with the next screen. Then read the full flow looking for an unsupported claim, an unexplained state, a repeated thought, or a missing consequence. Try the narrow layout and a longer supported translation when a preview is available.

Read the visible strings together. If several lines use the same “claim — payoff” or “action · detail” pattern, rewrite each around its actual purpose. Replacing every separator with a comma leaves the underlying rhythm intact.

Never infer that a payment failed from a network timeout, an email arrived from a send request, or a draft survived from an error alone. With missing facts, write the strongest accurate line available. If a missing fact prevents an informed commitment, flag that exact decision outside the UI before shipping the commitment copy.

When building, implement one coherent version in the requested surface. When drafting, return paste-ready text grouped by actual component. When auditing, show the current string, proposed change or removal, and the reader’s reason. Give variants only when requested or when they represent a decision the owner actually needs to make.
