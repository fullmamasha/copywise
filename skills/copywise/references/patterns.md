# Interface patterns

Choose the row for the state that the implementation actually renders. Examples illustrate invented products. Adapt terms, routes, and facts to the project.

| Surface | Writing decision | Example |
| --- | --- | --- |
| Navigation and tabs | Name the destination. Keep sibling labels parallel and distinct when read in isolation. | “Upcoming” and “Past” under “Appointments” |
| Onboarding | Start at the first meaningful choice. Explain why you ask only when that changes the answer. | “How many dinners are you planning?” above a meal-count selector |
| Input and hint | Keep a persistent label. Put a constraint before entry if it prevents rework. Use placeholder text only as an example. | Label “Workspace address”, hint “Use lowercase letters and numbers.” |
| Validation | Identify the field or constraint and supply a correction the person can make. Keep their input when supported. | “Enter a year with 4 digits.” |
| First-use empty state | Name what belongs here. Offer the first meaningful action when the person has permission. | “No saved searches yet” / “Save this search” when a current search exists |
| Filtered or searched empty state | Name the filter or query. Offer a supported way to broaden the view. | “No invoices match these filters” / “Clear filters” |
| All caught up | Confirm the meaningful absence. Stop if there is no action. | “No invoices awaiting approval” |
| Loading and progress | Identify the work when waiting creates uncertainty. Show percent or time only from a reliable signal. | “Importing contacts…” / “18 of 40 imported” when counts are known |
| Partial success | Show completed and unresolved work, then target recovery to the unresolved items. | “18 contacts imported. Two rows need an email address.” / “Review 2 rows” |
| Service error | Describe what failed. Include retry only when available and safe for the actual operation. | “The report couldn’t load.” / “Reload report” |
| Permission | Explain who can act or who will see the result. Offer only routes available to this user. | “Only workspace owners can change billing details.” |
| Success and undo | Confirm the result that matters. Offer undo only for its actual availability window. | “Moved to archive” / “Undo” |
| Destructive dialog | Name the object, affected people or data, and reversibility if known. Make both choices unambiguous. | “Delete the Spring catalog?” / “Its public link will stop working.” / “Keep catalog” / “Delete catalog” |
| Notifications | Lead with the event. Limit lock-screen detail to the product’s privacy setting. Link to the affected object when available. | “New comment on your draft” / “View comment” |
| Toggles | Name what the on state enables. If switching changes the audience, explain who gains access. | “Public link” / “Anyone with the link can view this board.” |
| Tooltips and icon actions | Give the control an accessible name. Use a tooltip for unfamiliar meaning. Keep essential conditions in the main UI. | Icon action “Download invoice”, row-specific accessible name “Download invoice 1042” |

## Follow the action before naming it

| What the handler does | Suitable label |
| --- | --- |
| Opens a list of available appointment times | View available times |
| Opens a summary of the selected appointment | Review appointment |
| Confirms the appointment with the provider | Book appointment |
| Sends a request the provider may decline | Request appointment |

For irreversible actions, spell out the consequence before the control. For a reversible edit in a familiar context, “Save” may say enough. If a button needs a paragraph to explain it, check whether the flow combines two separate decisions.

## When the outcome is unknown

A request timed out after someone submitted a payment. The app can reopen the order and fetch its current status. A suitable message is “We couldn’t confirm your payment.” The action is “Check payment status”. A decline from the processor is a different event. If the processor confirms a decline and a card selector is available, “Your card was declined” with “Choose another card” fits. A network error alone supports neither that diagnosis nor an invitation to pay again.
