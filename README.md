# Copywise

Copywise is a portable UX writing skill for people who build interfaces. It helps turn a feature brief into the words someone actually sees, from the first heading to the message after they press a button.

| A vague starting point | What the interface can say | When it fits |
| --- | --- | --- |
| Get started | Browse dinners | The button opens the recipe gallery. |
| Something went wrong | We couldn’t confirm your payment | The request timed out and the charge status is unknown. |
| Unlock powerful collaboration | Invite a teammate to review this draft | The invited teammate can actually open the draft. |

## Install Copywise

From the project where you want to use Copywise, run this command with Node.js 22.20 or later:

```sh
npx skills@1.9.0 add fullmamasha/copywise --skill copywise --copy
```

Select the tools you use when prompted. The default scope is the current project. Add `--global` to use Copywise across your projects.

If you already downloaded this repository, you can install from disk. Run the following from the destination project and replace the path with the location of your download:

```sh
npx skills@1.9.0 add "/path/to/copywise" --skill copywise --copy
```

## Use it in a project

1. After installation, open the tool’s skills list and look for `copywise`. For a manual install, copy the entire [copywise folder](skills/copywise) into the skills directory your tool supports. Keep its references alongside `SKILL.md`.
2. For consistent use on feature work, add this line to your project instructions: **Use Copywise whenever you create or change text that a person sees in the interface.** If your environment reads ordinary files but has no skill discovery, give that instruction the explicit path to [SKILL.md](skills/copywise/SKILL.md) in your copy of the project.
3. Give it a real task. Set the voice or UI language in the brief when either differs from the project defaults.

**Build from an idea**

> Build a saved-recipes screen for a cooking app. The first recipe is saved from the recipe browser. Use Copywise. Keep it playful and write the interface in Russian.

**Edit a real flow**

> Use Copywise to review our checkout. Trace both buttons on the review screen. Rewrite anything that leaves shoppers unsure when they will be charged. Keep the existing locale keys.

**Write a landing page**

> Use Copywise for a contractor lead service. Contractors choose trades and ZIP codes. The main action opens a partner application. Use a business voice and only the claims in this brief.

Copywise uses the product’s existing language and terms. Its four voice profiles cover playful, modern and youthful, business, and financial writing. A playful product can still handle a billing problem plainly.

## Inside

For Russian interfaces, the [Russian product writing guide](skills/copywise/references/russian-product-writing.md) pairs excerpts from travel, finance, and food products with original examples you can adapt to another screen.

The [skill](skills/copywise/SKILL.md) holds the workflow and links to the relevant writing patterns. The [research notes](docs/research.md) connect the editorial decisions to published guidance and product examples. The [practice cases](docs/practice-cases.md) provide short briefs and observable checks for evaluating changes.

Maintained by [@fullmamasha](https://github.com/fullmamasha). Available under the [MIT License](LICENSE).
