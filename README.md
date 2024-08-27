# Проект 00747

## 1.Постановка ТЗ

## 2. Подходк реализации

## 3.Настройка проекта - пакета:

- npm i -g json-server
- npm i styled-components prop-types react-hook-form yup react-router redux redux-thunk react-redux
- иконочные шрифты ()

# 4.Структура данных приложения:

### Обласи хранения данных:

- база данных JSON-server
- BFF
- релакс сторе

### Сущности приложения: // ИСПРАВИТЬ !!!

- _пользователь_: БД (списокпользователей), BFF(сессия текущего пользователя), стор (отображение в браузере)
- _Счета_: БД (Accounts),BFF(сессия текущего пользователя), стор (отображение в браузере)
- _Транзакции_: БД (Transactions),BFF(сессия текущего пользователя), стор (отображение в браузере)

### Таблицы БД

- _Таблица пользователей (Users)_: user_id / email / password_hash / updated_at
- _Таблица счетов (Accounts)_: account_id / user_id / name / account_type / balance / created_at / updated_at

- _Таблица категорий (Categories)_: category_id / user_id / name / type / icon / created_at / updated_at

- _Таблица транзакций (Transactions)_: transaction_id / user_id / account_id / category_id / amount / comment / date / created_at / updated_at

### Схема состояний BFF ???

- сессия текущего пользователя: login / password / Accounts_user / Categories_user / Transactions_user

### Схема для redux store (на клиенте/ отображение)

- user: id / login / email
- Accouts: массов счетов => id / type / name / icon / comment / balance / created_at
- Accout: id / type / name / icon / comment / balance / created_at
- Transactions: массив транзакций => id / type / name / icon / comment / amount / created_at
- Transaction: id / type / name / icon / comment / amount / created_at

## 5.Сделать набросок дизайн экранов

## 6.Подготовка JSON Server и базы данных

## 7. Первичная реализация BFF

- Создание утилиты
- Реализация ручек длявхода и регистрации
