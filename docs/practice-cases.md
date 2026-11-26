# Practice cases

Run a brief in a clean conversation with the skill available. For an automatic discovery test, omit its name from the brief and inspect the tool’s activity if it exposes skill use. For a writing test, explicitly request Copywise. Judge the words against the behavior and brief. Many phrasings can pass. The same briefs, with checkable statements, live in [evals](../evals/README.md).

| Brief | What to check |
| --- | --- |
| A playful music app sells a one-off $18 item. A first button opens a summary. A second submits the purchase. A timeout leaves the charge unknown. The order page can check its status. | Review and payment have distinct labels. The final commitment makes the $18 clear. The timeout preserves uncertainty, offers a status check, and avoids humor or another charge. |
| A Russian cooking app uses «ты». Its empty saved-recipes collection opens a catalog. Saving «Паста с печёным перцем» fills the collection. A filtered dinner search has zero results and a reset control. | First use leads to browsing. Success acknowledges the first save. The search message accounts for the filter and offers a reset. Use the same Russian collection name across states. |
| A contractor marketplace matches homeowner requests by trade and ZIP code. Its main action opens an application for later sales review. Someone proposes a headline promising three times the jobs, with no data. | Explain the matching mechanism. The CTA begins an application. No fabricated performance lift, approval, volume, or immediate access. |
| The task is written in Russian. An en-GB CSV importer has a success key with an ICU plural for the count of imported contacts and a CTA key linking to those contacts. Improve both strings. | Keep en-GB, both keys, the count variable, and the plural branches. Make the destination legible. Check singular and plural values. |

## Russian copy across two states

A bakery uses «вы». A customer builds a box of two pastries, pays, and later receives a pickup notification. The shop marks bags with an order number and keeps them at the till. Draft the bakery card, the first selection prompt, and the ready notification for order 18. Check that the card tells the shopper what they can assemble, the selection prompt matches the choice, and the notification gives a physical landmark and the correct order number. The notification fires only after the bakery marks the order ready.

## Regression checks for access and status wording

| Brief | What to check |
| --- | --- |
| A photo editor offers a selected photo or a sample. Only the first action opens the system picker. One photo is enough to do the job. | Both paths are clear. Any statement about the app's permissions needs separate evidence. |
| A CSV import reports rejected rows. Its stable message key is `import.skipped`. The action exports those rejected rows. | Keep the key and plural branches. Use the same term for rejected rows in the count and download label. |
| Location-based search works with approximate location and also supports manual district selection. | Keep both routes. Distinguish the location needed for the task from what the device grants. |
| A parcel dashboard counts returns and parcels awaiting collection. The export contains only returns. | Keep the counts and the export scope distinct even if the component has a generic failure name. |
| The product team has verified a recording is deleted 24 hours after upload. The transcript stays until its owner deletes it. | Disclose both facts before upload and attach each retention rule to the correct object. |

## Russian grammar checks

| Brief | What to check |
| --- | --- |
| A cooking app on «ты» shows a toast after the first saved recipe. The reader’s gender is unknown. | No string says «сохранил», «сохранила», or «готов» about the reader. The line is built around the recipe. |
| A Russian locale file has plurals with only one and other, «Мои Заказы», «Осуществить оплату · {amount}», and `{authorName} оставил комментарий`. | Plurals gain few and many. Keys and variables survive. No string guesses anyone’s gender. The address stays «ты». |
| A task tracker on «вы» sends pushes with `{actorName}`, whose gender is unknown, and user-entered task titles. | No past-tense verb agrees with the name. The name stays in the nominative case. Each title gets a generic noun or quotes. |

## A quick review with the team

For a punctuation check, review a whole Russian booking screen with the heading «Мастер-класс · по керамике», the duration «45–60 минут» and a final payment button «Оплатить — 900 ₽». The screen passes when the heading reads naturally, the action names the charge, and the duration retains both endpoints. Check the heading and the button together for repeated decorative pauses.

Hide the body text and ask someone what the primary action will do. Then show the body and ask what they expect to pay, share, lose, or receive. Record the expectation that differs from the actual behavior. Change the smallest part of the flow that would resolve it.

A clean writing result verifies the chosen scenario. Test automatic discovery and rendering separately in the host and project where the skill will ship.
