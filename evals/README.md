# Copywise evals

Each folder here is one test case in the layout that `claude plugin eval` reads. The cases turn the briefs in [practice cases](../docs/practice-cases.md) into prompts with checkable statements, and add grammar checks for Russian, Ukrainian, German, French, and Polish: address, gender, substitutions, plurals, and typography.

| File | Purpose |
| --- | --- |
| `prompt.md` | Run settings, then the prompt exactly as a person would type it |
| `case.yaml` | The case name and a description of a good result |
| `graders/` | One verifiable statement per file |
| `files/` | Input files, copied into the run by `place-files.sh` |

The folder sits outside `skills/copywise` so that installing the skill does not copy the tests into a person’s project.

## Run them with Claude Code

Claude Code 2.1.269 or later can run every case with and without the skill and report the difference. From the repository root, which carries the plugin manifest:

```sh
claude plugin eval . --scaffold --allow-tools Write,Edit --runs 1
```

Every run is a real, billed model call. Narrow a first run with `--case 'ru-*'`, and drop `--runs 1` to use the default of three runs per case. `--scaffold` lets the cases with input files copy them into place.

## Run one by hand

Start a clean session with Copywise installed. Paste the prompt from `prompt.md`, without the settings block, and copy any files from the case’s `files/` folder into the session’s project first. Read the result against each statement in `graders/`. Many phrasings can pass, so judge the meaning rather than the exact words.

## Cases

| Case | What it guards |
| --- | --- |
| `music-purchase-timeout` | Review and payment labels differ, the charge is named, a timeout keeps the uncertainty |
| `contractor-landing-no-fake-claims` | The headline explains the mechanism and declines an unsupported “3x” claim |
| `en-gb-importer-russian-request` | A Russian request about an en-GB interface keeps English strings, keys, and plural branches |
| `import-rejected-rows-key` | The count and the download label use one term for one set of rows |
| `recording-retention-disclosure` | Each retention rule stays attached to the right object |
| `ru-cooking-collection-states` | «ты» throughout, no guess about the reader’s gender, one collection name across states |
| `ru-bakery-pickup-notification` | «вы» throughout, a real pickup landmark and order number, no invented facts |
| `ru-booking-punctuation` | Decorative separators go, the range and the hyphen stay |
| `ru-locale-audit-gender-plurals` | A real `ru.json` audit: keys, variables, all four plural forms, gender, address, канцелярит |
| `ru-notifications-unknown-gender` | Templates with `{actorName}` avoid gendered verbs and oblique cases |
| `ru-editor-button-trace` | Labels follow the handlers: «Сохранить» that publishes and emails subscribers, «Отмена» that deletes a draft for good |
| `ru-transfer-substitutions` | A bank’s transfer strings keep the recipient’s name in the nominative, guess no gender, and do not inflect a weekday after «до» |
| `ru-android-plurals` | An Android `plurals` resource gets one, few, many, and other with matching noun and verb forms |
| `ru-paywall-no-dark-patterns` | A trial paywall declines a fake countdown and a shaming decline button, and shows price and renewal by the main action |
| `uk-locale-audit-russisms` | A real `uk.json` audit: the vocative trap in a greeting, gender, Russian calques, «проєкт», and four plural forms |
| `uk-cooking-collection-states` | «ти» throughout, no guess about the reader's gender, no Russian words in Ukrainian copy |
| `de-checkout-sie` | Sie throughout, «24,90 €» on the paying button, a timeout that keeps the uncertainty |
| `fr-typography-vous` | vous throughout, non-breaking spaces before high punctuation, a welcome without the point médian |
| `pl-gender-impersonal` | Impersonal -no/-to forms instead of gendered past tense, four plural branches |
