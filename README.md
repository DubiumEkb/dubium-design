# Dubium Design

## Синхранизация пакетов в проектах, в рамках монорепозитория

### Посмотреть версии пакетов

```bash
npx syncpack list
```

### Показать детализированный список несоответствий версий

```bash
npx syncpack list-mismatches
```

### Автоматически исправить расхождения версий

```bash
npx syncpack fix-mismatches
```

### Отсортировать и отформатировать файлы package.json

```bash
npx syncpack format
```

### Выбрать обновления из npm-реестра

```bash
npx syncpack update
```

### Показать все доступные команды

```bash
npx syncpack --help
```
