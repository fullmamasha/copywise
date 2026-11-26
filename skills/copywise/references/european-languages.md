# European languages

Use this reference for German, French, Spanish, Italian, Portuguese, Polish, Czech, Dutch, and Swedish interfaces. Russian and Ukrainian have their own references. The defaults below come from Microsoft's per-language localization style guides and the CLDR plural rules. A product's own glossary, voice, and established form of address always take precedence.

## Write in the language, not from English

Start from the intent of the screen and write each string the way a native product team would. A line translated phrase by phrase keeps English word order, English rhythm, and English idioms, and readers recognize it as translated.

- Rebuild the sentence around the language's natural order. Keep the distinguishing information early when the language allows it.
- Choose one form of address for the product and check every state against it: errors, paywalls, and legal screens are where the wrong form usually slips in.
- Avoid guessing the reader's gender. Past participles and adjectives agree with gender in most of these languages. Build the line around the object or result, or use a construction that does not agree with the reader.
- Give each plural message every category its locale uses, and write the whole phrase in each branch so nearby verbs and adjectives agree. `other` is always required.
- Expect longer text than English. Microsoft's Dutch guide expects text 20–30% longer, and German, French, and Polish strings often grow too. Check the narrowest layout in the target language.
- Use the project's number, date, and currency formatter. Never hand-assemble a price or a date. See [Reading, typography, and localization](reading.md).

## Defaults by language

| Language | Default address | Commands and buttons | Plural categories |
| --- | --- | --- | --- |
| German (de) | Sie for adults. du only for products aimed at children or with an established du voice. | Infinitive: “Speichern”, “Abbrechen” | one, other |
| French (fr-FR) | vous. tu for an established informal brand. | Infinitive: “Enregistrer”, “Annuler” | one (0 and 1), many (millions), other |
| French (fr-CA) | vous | Infinitive | as fr |
| Spanish (es-ES, es-MX) | tú. usted for some banking and public services in Latin America. vos in Rioplatense (es-AR, es-UY) products. | Infinitive: “Guardar”, “Cancelar” | one, many (millions), other |
| Italian (it) | tu in conversational UI. Procedures and instructions often use an impersonal infinitive: “Selezionare un file”. | Short imperative-style forms: “Salva”, “Annulla”, “Elimina” | one, many (millions), other |
| Portuguese (pt-BR) | você | Infinitive for commands, imperative for instructions | one (0 and 1), many, other |
| Portuguese (pt-PT) | Avoid você. Drop the pronoun and use the third person: “Pretende continuar?” | Infinitive: “Abrir ficheiro”. Imperative for instructions: “Abra o ficheiro”. | one (1 only), many, other |
| Polish (pl) | Informal second person with the pronoun dropped: “Możesz zmienić”. If written, Ty and Twój take a capital letter. Avoid Pan/Pani, which forces gendered forms. | Imperative: “Zapisz”, “Anuluj”, “Usuń” | one, few, many, other |
| Czech (cs) | vykání. Microsoft's guide uses plural participles for neutrality: “Ujistěte se, že jste zavřeli…” | Infinitive or imperative per the product; keep one model | one, few, many (fractions), other |
| Dutch (nl) | u by default. je is increasingly common in consumer products; pick one per product. | Infinitive: “Opslaan”, “Annuleren” | one, other |
| Swedish (sv) | du | Infinitive or imperative per the product | one, other |

The `many` category in French, Spanish, Italian, and Portuguese covers exact multiples of a million, in full or compact notation, such as “1 million de vues” or “2 000 000 de vues”. Most UI counts only need `one` and `other`, but provide `many` when a count can reach millions.

## German

- Keep Sie and its capital letter in every state, including possessives: “Ihr Konto”, “Ihre Bestellung”. A du product writes “dein” in lowercase in UI text.
- Gender-inclusive characters inside words (Genderstern, colon, underscore) are not part of the official orthography according to the Rat für deutsche Rechtschreibung. Follow the product's guide if it uses one. Otherwise prefer neutral forms: “Teammitglieder”, “Lehrende”, “alle, die teilnehmen”.
- Capitalize nouns and write compounds as one word or with a hyphen: “Kontoeinstellungen”, “E-Mail-Adresse”. Long compounds need room to wrap. Allow hyphenation instead of shrinking the type.
- Quotes: „…“ by default. Numbers: “1.234,56”. Prices: “12,50 €”.
- Prefer the established German or English term the audience actually uses. Many products say “Download” and “Login”. Follow the glossary and stay consistent.
- German consumer law requires the button that places a paid order to state the payment obligation unambiguously, as in “Zahlungspflichtig bestellen” or “Jetzt kaufen”. The legal owner approves that label. Show the amount next to it rather than relying on the button alone.
- Error messages: “Die Zahlung konnte nicht bestätigt werden.” works for an unknown outcome. Avoid “Ein Fehler ist aufgetreten” without saying what failed.

## French

- Put a non-breaking space before “:” and a narrow non-breaking space (U+202F) before “;”, “!”, and “?”, and inside guillemets: « Mes commandes ». In fr-CA, the OQLF uses no space before “;”, “!”, and “?”, and keeps the non-breaking space before “:”. A plain space lets the mark wrap to its own line.
- Quotes: « … » with those spaces. Numbers: “1 234,56” with a narrow non-breaking space for thousands. Prices: “12,50 €”.
- Sentence case for titles and buttons: “Mes commandes”, not “Mes Commandes”.
- The point médian (“utilisateur·rice·s”) is banned in official French government texts and hurts screen readers. Prefer epicene nouns and rephrasing: “Bienvenue” instead of “Bienvenu(e)”, “l'équipe” instead of “les collaborateurs”.
- Watch English calques: “supporter” for “support” (use “prendre en charge”), “réaliser” for “realize” (use “se rendre compte”), “adresser un problème” (use “résoudre” or “traiter”), “Cliquez ici”.
- Stacked politeness (“Veuillez…”, “Nous vous prions de…”) reads like a form letter. A direct infinitive or imperative is usually enough.

## Spanish

- Choose the variety first: es-ES, es-MX or es-419, es-AR. Vocabulary differs: “ordenador” and “móvil” in Spain, “computadora” and “celular” in most of Latin America.
- Open questions and exclamations with ¿ and ¡.
- The RAE rejects “@”, “x”, and “-e” as gender markers. Prefer neutral phrasing: “Te damos la bienvenida” instead of “Bienvenido/a”, “¿Empezamos?” instead of “¿Estás listo?”, “Se inició la sesión” instead of “Estás conectado”. Compound tenses with haber stay neutral: “Has guardado la receta” is fine.
- Avoid passive voice copied from English (“El archivo fue eliminado”). “Se eliminó el archivo” or “Archivo eliminado” sounds native.
- Prefer neutral, widely understood verbs: “solicitar” for “apply for”, “quitar” or “eliminar” for “remove”.
- Numbers: “12.345,67” in Spain, where four-digit numbers stay ungrouped (“1234,56”), and “1,234.56” in Mexico. Use the formatter.

## Italian

- Buttons use short forms: “Salva”, “Annulla”, “Invia”. Keep one model across the product.
- Replace “Benvenuto/a” with “Ti diamo il benvenuto” or a line about the task.
- Avoid English calques such as “realizzare” for “realize” and “supportare” for “support” in the sense of compatibility (use “è compatibile con” or “funziona con”).
- Numbers: “1.234,56”. Prices: “12,50 €”.

## Portuguese

- Keep pt-BR and pt-PT separate. Vocabulary: pt-BR “tela”, “arquivo”, “usuário”, “celular”, “baixar”. pt-PT “ecrã”, “ficheiro”, “utilizador”, “telemóvel”, “transferir”.
- In pt-PT, write without “você”: “Pretende eliminar esta lista?”. In pt-BR, “Você quer excluir esta lista?” or simply “Excluir esta lista?”.
- Adjectives about the reader agree with gender. Replace “Bem-vindo/a” with “Damos as boas-vindas” in pt-BR or “Damos-lhe as boas-vindas” in pt-PT.

## Polish

- Past-tense verbs reveal gender: “zapisałeś” or “zapisałaś”. Build the line around the result with the impersonal -no/-to form: “Zapisano zmiany”, “Usunięto plik”, “Wysłano link”. It is short and natural.
- Plurals need four branches and agreement in each: “1 plik”, “2 pliki”, “5 plików”, “12 plików”, “22 pliki”, “1,5 pliku”. A label with a colon avoids the branches: “Liczba plików: %d”.
- For another person's action, use the present tense, which does not show gender: “{name} udostępnia Ci folder” instead of “{name} udostępnił Ci folder”.
- Substituted names arrive in the nominative. Place them where the nominative fits: “Odbiorca: {name}”.
- Quotes: „…”. Numbers: “12 345,67”, with four-digit numbers ungrouped (“1234,56”). Prices: “12,50 zł”.

## Czech

- Past participles reveal gender even with vykání: standard grammar gives “Uložil jste” or “Uložila jste” for one reader. Microsoft's convention uses the plural “Uložili jste”, which some editors consider non-standard. The safest choice is to avoid the participle: “Soubor je uložen”, “Přihlášení proběhlo”.
- Plurals: “1 soubor”, “2 soubory”, “5 souborů”, “1,5 souboru”. The `many` category covers decimals.
- Quotes: „…“. Prices: “12,50 Kč”.

## Dutch

- Write compounds as one word: “accountinstellingen”, not “account instellingen”. Splitting them is a common sign of English influence.
- Keep u or je consistent, including possessives: “uw” or “je/jouw”.
- Prices: “€ 12,50”.

## Swedish

- Write compounds as one word. Splitting them (särskrivning) changes or blurs the meaning: “sjuksköterska”, not “sjuk sköterska”.
- du is universal. Skip honorifics and impersonal passives where a direct sentence works.

## Words that make copy sound generated

No style guide lists these, so treat them as an editorial check rather than a rule. Each phrase below promises a feeling without describing the product. If one appears, replace it with the concrete action or result, or delete it.

| Language | Phrases to question |
| --- | --- |
| English | seamless, effortless, unlock, elevate, empower, supercharge, dive in, game-changer, all in one place |
| German | nahtlos, mühelos, ganz einfach, im Handumdrehen, revolutionär |
| French | sans effort, en toute simplicité, en un clin d'œil, révolutionnaire |
| Spanish | sin esfuerzo, de forma sencilla, en un abrir y cerrar de ojos, revolucionario |
| Italian | senza sforzo, in modo semplice, in un attimo, rivoluzionario |
| Portuguese | sem esforço, de forma simples, num piscar de olhos, revolucionário |
| Polish | bezproblemowo, bez wysiłku, w mgnieniu oka, rewolucyjny |

Russian and Ukrainian equivalents, such as «уникальный», «широкий спектр», «за кілька кліків», follow the same test: keep the phrase only if the brief proves it and nothing more specific fits.
