---
tags: [copywise]
max_turns: 20
timeout_seconds: 600
allowed_tools: [Read, Glob, Grep, Skill, Write, Edit]
---

Используй Copywise. Проведи ревью русской локали нашего кулинарного приложения: locales/ru.json. К пользователю обращаемся на «ты», пол пользователя и авторов комментариев не знаем. Кнопка checkout.pay сразу списывает деньги. checkout.error показывается, когда банк отклонил платёж, рядом есть кнопка выбора другой карты. Строки рендерятся через ICU MessageFormat. Дай таблицу правок и сразу исправь файл, ключи и переменные не трогай.

Input files: locales/ru.json
