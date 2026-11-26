# Reading, typography, and localization

## Design the reading order

- Scan just the headings. Each should identify its section well enough for someone to find a price, limit, or next step without reading the whole page.
- Put qualifiers next to the thing they qualify. Keep the amount, currency, and billing period together where possible. Make repeated options parallel so the differing words stand out.
- Use a list for real options or steps, a table for comparisons with shared attributes, and a sentence for a single idea. Choose semantic headings and lists when implementing.
- Follow existing type tokens and capitalization. Sentence case is a practical default for English UI. Short labels usually need no period. Use a question mark for an actual question. An ellipsis can signal ongoing work when that is the product convention.
- Let labels wrap in a narrow layout. Keep essential terms and consequences visible. Avoid hard-coded line breaks for a pleasing desktop headline. If the complete text still cannot fit, propose a component change instead of cutting the detail that makes the decision safe.
- Keep hierarchy legible with existing heading levels, weight, spacing, and meaningful order. Avoid depending on all caps, color, a particular screen position, or decorative punctuation to explain meaning.
- When the layout is in scope, align multi-line instructions to the reading edge of the language, and use a comfortable text column for paragraphs. Check the smallest supported screen and enlarged text. Move amount and cadence to their own line if a crowded price card visually separates them. Do not shrink the type just to preserve a one-line button.

## Edit decorative separators

Use a comma where the language calls for one, a period between complete thoughts, and a conjunction to show how actions relate. Decide whether a second phrase earns its place before choosing punctuation. If a button needs a price, keep it with the action. If it needs a condition, put that condition where the person can read it before acting.

| Surface | Draft | Edited copy |
| --- | --- | --- |
| Recipe heading | «Ужин · за 20 минут» | «Ужин за 20 минут» |
| Purchase button that charges the displayed amount | «Оплатить · 490 ₽» | «Оплатить 490 ₽» |
| Notification after an export | «Отчёт готов — скачайте его до пятницы» | «Отчёт готов. Скачайте его до пятницы.» |
| Landing headline for a meal planner | “Pick dinners. Make a list. Shop.” | “Build a shopping list from the dinners you pick” |

Keep meaningful typography, including a range such as «10–15 минут», a hyphen in «Т-Банк», a decimal comma in «4,5 кг», and the currency symbol in a price. Preserve a localized formatter’s output. Use semantic lists for real lists. When a card already has separate fields for duration and servings, keep those fields and let the layout separate them.

## Check the actual reading experience

Read the page in DOM order and tab through its controls. A visible label should be included in its accessible name. Give an icon-only action a name that explains its effect. Repeated links in a list may need the item name for context. Keep form hints and errors associated with their field. Use existing status-announcement patterns for updates a user might miss. Avoid duplicate announcements.

For a responsive web surface, inspect ordinary text at a 320 CSS px viewport and with increased text spacing. Check for missing content, overlap, and actions hidden by truncation. Data grids or maps may require two-dimensional space. Test real component constraints. A copy-only review can flag a layout risk but cannot establish that the rendered screen passes.

## Localize the intent

1. Read the project glossary and existing locale files. Preserve the project’s form of address. In Russian, use established «ты» or «вы» consistently. In an unfamiliar brand, a neutral infinitive often works well on controls.
2. Give each translatable message enough context to stand alone. Keep full sentences together. Pass named values through the existing formatter. Reordering fragments can break grammar. A value inserted into a sentence may need a case or gender that the variable cannot supply. For Russian, follow the substitution rules in [Russian interface writing](russian-product-writing.md).
3. Use the project’s plural, number, date, currency, and directionality formatters. Keep tokens and markup untouched unless the implementation change explicitly includes a coordinated update across locales.
4. Give each plural message every category its locale uses, and test a value from each. Russian uses one, few, many, and other: «1 рецепт», «2 рецепта», «5 рецептов», «11 рецептов», «21 рецепт», «1,5 рецепта». Eleven through fourteen take the many form, so a rule based on the last digit alone fails. A catalog copied from English with only one and other renders «5 рецепта». ICU MessageFormat, Android `plurals`, and iOS string catalogs all use these category names. Test a long item name and a long translation. For bidirectional interfaces, also inspect embedded names, codes, and amounts.
5. Translate the action in context. “Save” on a recipe can be «Сохранить рецепт». In a promotion about price it may mean «Сэкономить». A failed save can say «Не удалось сохранить рецепт». Add «Попробовать ещё раз» only if retry is available and appropriate.

## Place the currency symbol

Format the price using the display locale and the transaction's ISO 4217 currency code. Keep the billed currency when the user changes the interface language. For web UI, reuse the product formatter or call `new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount)` with the amount in major units. Insert the formatted price as one translation argument. Keep its spacing, decimal separator, and currency precision intact. When several dollar currencies appear together, use the formatter's currency-code display to distinguish them.

| Display locale | Billed currency | Formatted price |
| --- | --- | --- |
| en-US | USD | $12.50 |
| en-GB | GBP | £12.50 |
| en-IE | EUR | €12.50 |
| de-DE, fr-FR, lv-LV | EUR | 12,50 € |
| cs-CZ | CZK | 12,50 Kč |
| pl-PL | PLN | 12,50 zł |
| uk-UA | UAH | 12,50 ₴ |
| ru-RU | RUB | 12,50 ₽ |
| ru-RU | USD | 12,50 $ |
| en-CA | CAD | $12.50 |
| fr-CA | CAD | 12,50 $ |

Use the locale data for additional language and currency pairs. [Unicode currency patterns](https://cldr.unicode.org/translation/number-currency-formats/number-and-currency-patterns)

## One editing pass

Draft: “Discover an effortless way to seamlessly manage all of your upcoming bookings in one place.”

For a page listing bookings, the heading “Upcoming bookings” already tells readers where they are. Drop the sentence. For a landing page, find the actual advantage first. If the product lets reception staff reschedule by dragging a booking, “Move a booking to a new time on the calendar” explains something a buyer can picture.
