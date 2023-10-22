# Estructura de carpetas

```txt{4}
src/
├── config/
├── core/
└── stack/
```

```txt{5,6}
src/
├── config/
├── core/
├── stack/
|   ├── my-backend/
|   └── my-frontend/
```

```txt{6,7,8,9,10,11,13,14,15,16,17}
src/
├── config/
├── core/
├── stack/
|   ├── my-backend/
|   |   ├── templates/
|   |   |   ├── foo
|   |   |   ├── bar
|   |   |   └── baz
|   |   ├──process.ts
|   |   └──renderings.ts
|   ├── my-frontend/
|   |   ├── templates/
|   |   |   ├── foo
|   |   |   └── bar
|   |   ├──process.ts
|   |   └──renderings.ts
```
