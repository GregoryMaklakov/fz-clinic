// Стоматологія price
export const priceDental = [
  // Професійна гігієна та відбілювання зубів
  {
    id: 0,
    name: "",
    items: [
      {
        id: 1,
        name: "Консультація",
        price: 400,
      },
      {
        id: 2,
        name: "Cкладання плану лікування та повне обстеження",
        price: 700,
        // description: " "
      },
    ],
  },
  {
    id: 1,
    name: "Професійна гігієна та відбілювання зубів",
    items: [
      {
        id: 1,
        name: "Професійна гігієна порожнини рота І рівня",
        price: 1300,
        description:
          "У вартість входить:скейлінг(зняття твердого зубного каменю),зняття м’якого зубного нальоту системою Air Flow,полірування зубів пастою,рекомендації лікаря по догляду за порожниною рота.",
      },
      {
        id: 2,
        name: "Професійна гігієна порожнини рота ІІ рівня",
        price: 1500,
      },
      {
        id: 3,
        name: "Професійна гігієна порожнини рота ІІІ  рівня",
        price: 2000,
      },
      {
        id: 4,
        name: "MAGIC SMILE",
        price: 2500,
      },
    ],
  },
  // Лікування карієсу,реставрація зубів
  {
    id: 2,
    name: "Лікування карієсу, реставрація зубів",
    items: [
      {
        id: 1,
        name: "Лікування карієсу I ступеня",
        price: 1100,
        description:
          "У вартість лікування входить: анестезія, ізоляція зуба системою кофердам, препарування каріозної порожнини, відновлення анатомічної форми композитом, полірування реставрації.",
      },
      {
        id: 2,
        name: "Лікування карієсу II ступеня",
        price: 1200,
        description:
          "У вартість лікування входить: анестезія, ізоляція зуба системою кофердам, препарування каріозної порожнини, відновлення анатомічної форми композитом, полірування реставрації.",
      },
      {
        id: 3,
        name: "Лікування карієсу III ступеня",
        price: 1300,
        description:
          "У вартість лікування входить: анестезія, ізоляція зуба системою кофердам, препарування каріозної порожнини, відновлення анатомічної форми композитом, полірування реставрації.",
      },
      {
        id: 4,
        name: "Відновлення культі зуба",
        price: 1000,
      },
      {
        id: 5,
        name: "Непряма керамічна реставрація",
        price: 3500,
      },
      {
        id: 6,
        name: "Реставрація фронтальної групи зубів",
        price: "1500-2000",
        description: "Ціни варіюються залежно від кількості зубів.",
      },
    ],
  },
  // Лікування кореневих каналів зубів(Первинне ендодонтичне лікування)
  {
    id: 3,
    name: "Лікування кореневих каналів зубів (Первинне ендодонтичне лікування)",
    items: [
      {
        id: 1,
        name: "Первинне ендодонтичне лікування 1-канального зуба",
        price: 900,
        description:
          "У вартість лікування входить: анестезія, ізоляція зуба системою кофердам, препарування, механічна та медикаментозна обробка кореневого каналу, пломбування кореневого каналу, тимчасове відновлення зуба, рентгенконтроль на кожному етапі лікування.",
      },
      {
        id: 2,
        name: "Первинне ендодонтичне лікування 2-канального зуба",
        price: 1000,
      },
      {
        id: 3,
        name: "Первинне ендодонтичне лікування 3-канального зуба",
        price: 1300,
      },
      {
        id: 4,
        name: "Первинне ендодонтичне лікування 4-канального зуба",
        price: 1400,
      },
      {
        id: 5,
        name: "Встановлення скловолоконного штифта",
        price: 700,
      },
    ],
  },
  // Лікування кореневих каналів зубів(Повторне)
  {
    id: 4,
    name: "Лікування кореневих каналів зубів (Повторне ендодонтичне лікування)",
    items: [
      {
        id: 1,
        name: "Повторне ендодонтичне лікування 1-канального зуба",
        price: 1000,
        description:
          "У вартість лікування входить: анестезія, ізоляція зуба системою кофердам, препарування, роспломбування кореневого каналу, механічна та медикаментозна обробка кореневого каналу, пломбування кореневого каналу, тимчасове відновлення зуба, рентгенконтроль на кожному етапі лікування.",
      },
      {
        id: 2,
        name: "Повторне ендодонтичне лікування 2-канального зуба",
        price: 1200,
      },
      {
        id: 3,
        name: "Повторне ендодонтичне лікування 3-канального зуба",
        price: 1500,
      },
      {
        id: 4,
        name: "Повторне ендодонтичне лікування 4-канального зуба",
        price: 1600,
      },
      {
        id: 5,
        name: "Видалення штифта",
        price: 500,
      },
      {
        id: 6,
        name: "Закриття перфорації",
        price: 600,
      },
    ],
  },
  // Ортопедичне лікування (Незнімне протезування)
  {
    id: 5,
    name: "Ортопедичне лікування (Незнімне протезування)",
    items: [
      {
        id: 1,
        name: "Металокерамічна коронка",
        price: 2800,
        description:
          "У вартість лікування входить: 1 візит - анестезія, ізоляція зуба системою кофердам (якщо потрібно), препарування зуба, зняття відбітків, тимчасове відновлення. 2 візит - анестезія, ізоляція зуба системою кофердам, фіксація ортопедичної конструкції, фінішна поліровка.",
      },
      {
        id: 2,
        name: "Керамічна коронка (Press)",
        price: 4500,
      },
      {
        id: 3,
        name: "Керамічна коронка (фрезерована)",
        price: 6500,
      },
      {
        id: 4,
        name: "Непряма керамічна реставрація (вкладка)",
        price: 3500,
      },
      {
        id: 5,
        name: "Цирконієва коронка",
        price: 4500,
      },
      {
        id: 6,
        name: "Вінір керамічний (Emax Press)",
        price: 7000,
      },
      {
        id: 7,
        name: "Металокерамічна коронка на імплантаті",
        price: 4000,
      },
      {
        id: 8,
        name: "Цирконієва коронка на імплантаті",
        price: 6000,
      },
      {
        id: 9,
        name: "Тимчасова коронка (лабораторна)",
        price: 400,
      },
      {
        id: 10,
        name: "Зняття коронки",
        price: 300,
      },
    ],
  },
  // Ортопедичне лікування (Знімне протезування)
  {
    id: 6,
    name: "Ортопедичне лікування (Знімне протезування)",
    items: [
      {
        id: 1,
        name: "Знімний протез простий",
        price: 4000,
      },
      {
        id: 2,
        name: "Бюгельний протез на нейлоновій основі",
        price: 6000,
      },
      {
        id: 3,
        name: "Бюгельний протез на атачменах",
        price: 10000,
      },
    ],
  },
  // Хірургічне лікування
  {
    id: 7,
    name: "Хірургічне лікування",
    items: [
      {
        id: 1,
        name: "Видалення однокореневого зуба",
        price: 800,
        description:
          "У вартість лікування входить: анестезія, використання OptraGate, гемостатична губка, рентгенконтроль (якщо потрібно).",
      },
      {
        id: 2,
        name: "Видалення багатокореневого зуба",
        price: 1000,
      },
      {
        id: 3,
        name: "Видалення зуба мудрості",
        price: 1200,
      },
      {
        id: 4,
        name: "Видалення зуба мудрості (напівретинованого)",
        price: 1500,
      },
      {
        id: 5,
        name: "Видалення зуба мудрості (ретинованого)",
        price: 2500,
      },
      {
        id: 6,
        name: "Накладання швів",
        price: 300,
      },
      {
        id: 7,
        name: "Зняття швів",
        price: 300,
      },
      {
        id: 8,
        name: "Лікування альвеоліту",
        price: 500,
      },
    ],
  },
  // Імланатція зубів
  {
    id: 8,
    name: "Імланатція зубів",
    items: [
      {
        id: 1,
        name: "Імплантат Neodent (Straumann Group)",
        price: 10000,
      },
      {
        id: 2,
        name: "Остеосинтез",
        price: 6000,
      },
      {
        id: 3,
        name: "Встановлення формувача ясен",
        price: 2500,
      },
      {
        id: 4,
        name: "Зняття відбитків під коронку на імплантаті",
        price: 1000,
      },
    ],
  },
];
