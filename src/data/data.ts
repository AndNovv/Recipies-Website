import { RecipeType } from "@/types";

export const recipes: RecipeType[] = [
    {
        title: "Спагетти Карбонара",
        description: "Классическое итальянское пастное блюдо из яиц, сыра, бекона и черного перца.",
        time: 30,
        difficulty: 'hard',
        country: "italy",
        foodType: ["pasta", "dinner"]
    },
    {
        title: "Курица Тикка Масала",
        description: "Популярное индийское блюдо, состоящее из курицы, маринованной в специях и йогурте, приготовленной в кремовом томатном соусе.",
        time: 45,
        difficulty: 'hard',
        country: "india",
        foodType: ["curry", "dinner"]
    },
    {
        title: "Такос аль Пастьор",
        description: "Традиционные мексиканские уличные такос с маринованной свининой, ананасом и луком.",
        time: 40,
        difficulty: 'medium',
        country: "mexico",
        foodType: ["tacos", "dinner"]
    },
    {
        title: "Суши Роллы",
        description: "Японские суши-роллы с рисом, морепродуктами, овощами и обернутые в водоросли.",
        time: 60,
        difficulty: 'medium',
        country: "japan",
        foodType: ["sushi", "dinner"]
    },
    {
        title: "Мусака",
        description: "Греческое запеканное блюдо из баклажанов, мяса и бешамельного соуса.",
        time: 75,
        difficulty: 'hard',
        country: "greece",
        foodType: ["casserole", "dinner"]
    },
    {
        title: "Пад Тай",
        description: "Тайское блюдо из обжаренной лапши, приготовленной с рисовыми лапшами, курицей, тахиной и соусом тамаринда.",
        time: 50,
        difficulty: 'hard',
        country: "tailand",
        foodType: ["pasta", "dinner"]
    },
    {
        title: "Борщ",
        description: "Традиционный украинский суп с свеклой, капустой, картофелем, мясом и сметаной.",
        time: 60,
        difficulty: 'easy',
        country: "ukraine",
        foodType: ["soup", "lunch"]
    },
    {
        title: "Шашлык",
        description: "Популярное блюдо кавказской кухни, состоящее из кусков маринованного мяса, обычно жаренных на гриле.",
        time: 90,
        difficulty: 'medium',
        country: "caucasus",
        foodType: ["kebab", "dinner"]
    },
    {
        title: "Рататуй",
        description: "Французское овощное блюдо, приготовленное из тонко нарезанных овощей, таких как баклажаны, кабачки, помидоры, лук и перец.",
        time: 45,
        difficulty: 'hard',
        country: "france",
        foodType: ["vegetables", "lunch"]
    },
    {
        title: "Солянка",
        description: "Традиционный русский суп, приготовленный с мясом, колбасой, картошкой, маринованными огурцами и лимоном.",
        time: 70,
        difficulty: 'easy',
        country: "russia",
        foodType: ["soup", "lunch"]
    }
];

export const cousineGroupedOptions = [
    {
        groupTitle: 'Африка',
        countries: new Map<string, string>([
            ['egypt', 'Египетская кухня'],
            ['nigeria', 'Нигерийская кухня'],
            ['southafrica', 'Южноафриканская кухня'],
        ])
    },
    {
        groupTitle: 'Азия',
        countries: new Map<string, string>([
            ['china', 'Китайская кухня'],
            ['india', 'Индийская кухня'],
            ['japan', 'Японская кухня'],
            ['tailand', 'Тайская кухня'],
        ])
    },
    {
        groupTitle: 'Европа',
        countries: new Map<string, string>([
            ['france', 'Французская кухня'],
            ['italy', 'Итальянская кухня'],
            ['russia', 'Русская кухня'],
            ['ukraine', 'Украинская кухня'],
            ['caucasus', 'Кавказская кухня'],
            ['germany', 'Немецкая кухня'],
            ['uk', 'Британская кухня'],
            ['greece', 'Греческая кухня'],
        ])
    },
    {
        groupTitle: 'Северная Америка',
        countries: new Map<string, string>([
            ['usa', 'Американская кухня'],
            ['canada', 'Канадская кухня'],
            ['mexico', 'Мексиканская кухня'],
        ])
    },
    {
        groupTitle: 'Южная Америка',
        countries: new Map<string, string>([
            ['brazil', 'Бразильская кухня'],
            ['argentina', 'Аргентинская кухня'],
            ['colombia', 'Колумбийская кухня'],
        ])
    },
    {
        groupTitle: 'Океания',
        countries: new Map<string, string>([
            ['australia', 'Австралийская кухня'],
            ['newzealand', 'Новозеландская кухня'],
        ])
    },
]

export const cousineOptions = new Map<string, string>([
    ['egypt', 'Египетская кухня'],
    ['nigeria', 'Нигерийская кухня'],
    ['southafrica', 'Южноафриканская кухня'],

    ['china', 'Китайская кухня'],
    ['india', 'Индийская кухня'],
    ['japan', 'Японская кухня'],
    ['tailand', 'Тайская кухня'],

    ['france', 'Французская кухня'],
    ['italy', 'Итальянская кухня'],
    ['russia', 'Русская кухня'],
    ['ukraine', 'Украинская кухня'],
    ['caucasus', 'Кавказская кухня'],
    ['germany', 'Немецкая кухня'],
    ['uk', 'Британская кухня'],
    ['greece', 'Греческая кухня'],

    ['usa', 'Американская кухня'],
    ['canada', 'Канадская кухня'],
    ['mexico', 'Мексиканская кухня'],

    ['brazil', 'Бразильская кухня'],
    ['argentina', 'Аргентинская кухня'],
    ['colombia', 'Колумбийская кухня'],

    ['australia', 'Австралийская кухня'],
    ['newzealand', 'Новозеландская кухня'],

]);

export const foodTypeGroupedOptions = [
    {
        groupTitle: 'Время',
        foodTypes: new Map<string, string>([
            ['breakfast', 'Завтрак'],
            ['lunch', 'Обед'],
            ['dinner', 'Ужин'],
            ['dessert', 'Десерт'],
        ])
    },
    {
        groupTitle: 'Основные блюда',
        foodTypes: new Map<string, string>([
            ['pasta', 'Паста'],
            ['curry', 'Карри'],
            ['tacos', 'Такос'],
            ['sushi', 'Суши'],
            ['casserole', 'Запеканка'],
            ['noodles', 'Лапша'],
            ['kebab', 'Шашлык'],
            ['salad', 'Салаты'],
            ['steak', 'Стейки'],
            ['vegetables', 'Овощи'],
            ['soup', 'Суп'],
            ['nuts', 'Орехи'],
            ['cake', 'Торты'],
            ['icecream', 'Мороженое'],
            ['cookies', 'Печенье'],
        ])
    },
];

export const foodTypeOptions = new Map<string, string>([
    ['breakfast', 'Завтрак'],
    ['lunch', 'Обед'],
    ['dinner', 'Ужин'],
    ['dessert', 'Десерт'],

    ['pasta', 'Паста'],
    ['curry', 'Карри'],
    ['tacos', 'Такос'],
    ['sushi', 'Суши'],
    ['casserole', 'Запеканка'],
    ['noodles', 'Лапша'],
    ['kebab', 'Шашлык'],
    ['salad', 'Салаты'],
    ['steak', 'Стейки'],
    ['vegetables', 'Овощи'],
    ['soup', 'Суп'],
    ['nuts', 'Орехи'],
    ['cake', 'Торты'],
    ['icecream', 'Мороженое'],
    ['cookies', 'Печенье'],
]);

export const difficultyOptions = new Map<string, string>([
    ['any', 'Любая'],
    ['easy', 'Низкая'],
    ['medium', 'Средняя'],
    ['hard', 'Высокая'],
]);
