# Тестове завдання

## Опис

Створити застосунок для компанії, що надає послуги надання в Україні автомобілів
в оренду. Застосунок складається з 3х сторінок:

- домашня сторінка з загальним описом послуг, що надає компанія. Стилізація та
  оформлення на ваш розсуд.
- сторінка, що містить каталог автівок різної комплектації, які користувач може
  фільтрувати за маркою, ціною за годину оренди авто та кількістю кілометрів,
  яку подолав автомобіль під час його експлуатації (пробіг).
- сторінка з оголошеннями, які були додані користувачем в улюблені Зовнішній
  вигляд програми повинен складатися з cайдбару та області перегляду!

  ![Page](./assets/1.jpg) ![Page](./assets/2.jpg) ![Page](./assets/3.jpg)

## Технічне завдання

1. Відповідно до
   [макету](https://www.figma.com/file/XhC8FSCfAkraEF5l7Hx4fL/Test?type=design&node-id=0-1&mode=design&t=Ed3b0heFOmE2LSXU-0)
   реалізувати картку оголошення про здачу авто в оренду.
2. На першій сторінці каталогу має рендеритися 8 оголошень, а їх решта - по
   кліку на кнопку `Load more`.
3. У разі кліку по кнопці у вигляді “серця” на картці оголошення воно має
   додаватися до списку улюблених, а колір кнопки змінюватися.
4. При оновленні сторінки має фіксуватись кінцевий результат дій користувача.
   Тобто, якщо додати оголошення в улюблені та оновити сторінку - то кнопка все
   одно залишається в стані “улюбленого оголошення” із відповідним кольором.
5. У разі повторного кліку по кнопці у вигляді “серця” оголошення повинно бути
   видалене зі списку улюблених, а колір кнопки змінитись до початкового стану.
6. У разі кліку по кнопці Learn more має відкриватись модальне вікно з детальною
   інформацією про авто та умови його оренди.
7. Модальне вікно повинно закриватись по кліку на кнопку у вигляді “хрестика”,
   по кліку на `backdrop` або натисканню на клавішу `Esc`.
8. В коді пробіг авто має бути прописаний одним значенням (наприклад, 4500). В
   UI - виведено через кому (4,500).
9. Кнопку `Rental car` слід реалізувати як посилання, що надаватиме можливість
   користувачу зʼєднатись з компанією за номером телефону +380730000000.

Створи маршрутизацію, використовуючи `React Router`. У застосунку повинні бути
такі маршрути:

- `“/”` - домашня сторінка з загальним описом послуг, що надає компанія
- `“/catalog”` - сторінка, що містить каталог автівок різної комплектації
- `“/favorites”` - сторінка з оголошеннями, які були додані користувачем в
  улюблені Якщо користувач зайшов за маршрутом, якого не існує, його необхідно
  перенаправляти на домашню сторінку. Для роботи зі списком оголошень створи
  свій персональний бекенд для розробки за допомогою UI-сервісу
  https://mockapi.io/. Створи ресурс adverts. Використай конструктор ресурсу та
  опиши об'єкт оголошення, як описано нижче.

Advert

1. Створіть `advert` в **Mockapi** з наступними полями: `id`, `year`, `make`,
   `model`, `type`, `img`, `description`, `fuelConsumption`, `engineSize`,
   `accessories`, `functionalities`, `rentalPrice`, `rentalCompany`, `address`,
   `rentalConditions`, `mileage` (див. скріншот нижче). Для наповнення колекції
   можна взяти
   [adverts.json](https://drive.google.com/file/d/1sDtZQX4awbRiqa5mSagngqKBZeMMRUMO/view)
   ![Page](./assets/4.png)
2. Зображення авто можете підібрати самостійно.
3. В базі має бути від 32 оголошень з різними значеннями (на ваш розсуд).
   Реалізована пагінація, де одна сторінка пагінації повинна вміщати 8
   оголошень.

## Додаткове завдання

Додай фільтрацію:

1. `dropdown` із марками автомобіля
   [makes.json](https://drive.google.com/file/d/1ywi6jdoqq0llsd2yDcRKwuLhuL3ds_5z/view) -
   показати оголошення з автівками відповідної марки
2. `dropdown` із цінами за годину оренди авто (крок 10$) - показати оголошення з
   автівками, ціна за оренду яких належить до діапазону цін, обраних
   користувачем
3. група `input` для визначення діапазону пробігу, в межах якого користувач
   шукатиме оголошення

## Критерії виконання

- Верстка фіксована в `рх`, семантична та валідна.
- Немає помилок в консолі браузера.
- Інтерактивність працює відповідно до технічного завдання.
- Код відформатований та без коментарів.
- В репозиторії має бути описаний **README.md**.
- Проєкт задеплоїний на **github pages** або **netlify.com**
