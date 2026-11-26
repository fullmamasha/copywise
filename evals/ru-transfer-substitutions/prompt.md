---
tags: [copywise]
max_turns: 20
timeout_seconds: 600
allowed_tools: [Read, Glob, Grep, Skill, Write, Edit]
---

Используй Copywise. Банковское приложение, обращаемся на «вы». Проверь строки переводов в locales/ru.json и сразу исправь файл. Контекст: {recipientName} это имя и фамилия получателя, пол неизвестен. {amount} и {limit} приходят уже отформатированными, например «5 000 ₽». {weekday} отдаёт Intl.DateTimeFormat с weekday: "long", то есть «пятница». transfer.success показываем, когда наш банк принял перевод в обработку, а не когда деньги дошли. Строки рендерятся через ICU MessageFormat. Ключи не меняй. Переменные можно переставлять, а если какая-то не подходит, скажи, что нужно от разработки.

Input files: locales/ru.json
