# NextPizza

Frontend пиццерии на Next.js. Backend живёт отдельно: [Pizza](https://github.com/grindelwald098-cyber/Pizza).

Основная ветка: `frontend-dev` (изменения только через pull request).

## Структура

```text
.
├── public/                    # статика (иконки, картинки, шрифты)
├── src/
│   ├── app/                   # роутинг (App Router)
│   │   ├── (auth)/            # route group — не влияет на URL
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── (main)/
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   └── loading.tsx
│   │   │   └── settings/
│   │   │       └── page.tsx
│   │   ├── api/               # API routes
│   │   │   └── users/
│   │   │       └── route.ts
│   │   ├── layout.tsx         # root layout
│   │   ├── page.tsx           # главная
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── ui/                # переиспользуемые примитивы (Button, Input, Modal)
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── index.ts
│   │   │   └── Input/
│   │   ├── layout/            # Header, Footer, Sidebar
│   │   │   ├── Header/
│   │   │   └── Footer/
│   │   └── features/          # компоненты конкретной фичи
│   │       └── auth/
│   │           └── LoginForm/
│   │
│   ├── lib/                   # утилиты, хелперы, конфиги
│   │   ├── api.ts             # fetch-обёртки
│   │   ├── utils.ts           # cn(), formatDate() и т.п.
│   │   └── constants.ts
│   │
│   ├── hooks/                 # кастомные хуки
│   │   ├── useAuth.ts
│   │   └── useDebounce.ts
│   │
│   ├── store/                 # глобальный стейт
│   │   └── authStore.ts
│   │
│   ├── types/                 # общие типы
│   │   ├── user.ts
│   │   └── api.ts
│   │
│   ├── services/              # слой работы с API
│   │   ├── authService.ts
│   │   └── userService.ts
│   │
│   ├── config/                # конфиги (env, роуты, темы)
│   │   ├── routes.ts
│   │   └── env.ts
│   │
│   └── styles/                # глобальные стили, переменные
│       ├── variables.css
│       └── mixins.css
│
├── .env.local
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Запуск

```bash
pnpm install
cp .env.local.example .env.local
pnpm dev
```

Открой [http://localhost:3000](http://localhost:3000).
