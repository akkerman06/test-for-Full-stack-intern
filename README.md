

## Содержание
  - [Содержание](#содержание)
  - [Скриншоты проекта](#скриншоты-проекта)
  - [Технологии](#технологии)
  - [Примечание](#Примечание)
  - [DataJson](#DataJson)

## Скриншоты
![image](https://github.com/akkerman06/test-for-Full-stack-intern/assets/138283291/caa38020-c1d0-4795-b267-7f57b320839b)
![image](https://github.com/akkerman06/test-for-Full-stack-intern/assets/138283291/c50e666b-1316-4516-808e-134771576a3d)

## Стек задания
-React
-Typescript
-Css
-Node.js Express
-Mongodb

## Примечание
-Вход для пользователя: login: admin , password: admin
-В репозиторие в .env есть ссылка на бд Mongodb, для тестирования нужно установить зависимости frontend,backend папок и  запустить с помощью npm start для каждой папки(fronend,backend)

## DataJson (данные которые есть в Базе данных)
- clients -> {
   "_id":"6671b409a22e61e0d2f75e5a",
   "accountNumber": "123456789",
   "surname": "Иванов",
   "name": "Иван",
   "patronymic": "Иванович",
   "dateOfBirth": "1990-01-01",
   "inn": "1234567890",
   "fullnameUser": "Ilon Musk Ivanov",
   "status": "Сделка закрыта"
},
{
   "_id":"6671f527f3aac94f2c08b86e",
   "accountNumber": "777767680",
   "surname": "Великий",
   "name": "Петр",
   "patronymic": "Алексеевич",
   "dateOfBirth": "1672-06-09",
   "inn": "1010101010",
   "fullnameUser": "Ilon Musk Ivanov",
   "status": "В работе"
},
{
   "_id":"6671f5f3f3aac94f2c08b86f",
   "surname": "Санчез",
   "name": "Рик",
   "patronymic": "Иванов",
   "dateOfBirth": "1999-09-09",
   "inn": "9910101010",
   "fullnameUser": "Ilon Musk Ivanov",
   "status": "Не в работе",
   "accountNumber": "564123444"
}
-users ->
{
   "_id":"66719506a22e61e0d2f75e59",
   "login": "admin",
   "password": "admin",
   "fullname": "Ilon Musk Ivanov"
}




