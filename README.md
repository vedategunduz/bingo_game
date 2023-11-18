# Tombala Oyunu


Bu basit bir tombala oyunudur.

![](https://cdn.discordapp.com/attachments/782786159612919879/1175443330318991410/bingo.png)
# CDN

### CSS
```html
<link rel="stylesheet" href="https://cdn.discordapp.com/attachments/1175449786565009490/1175452103880233121/style.css">
```
### JS
```html
<script src="https://cdn.discordapp.com/attachments/1175449786565009490/1175453044150911036/app.js"></script>
```

## Başlarken
1. Javascript ve CSS dosyasını dahil edin.
```html
<head>
    .
    ..
    ...
    <!-- Bingo Card Style -->
    <link rel="stylesheet" href="style.css">
</head>

<body>
    .
    ..
    ...
    <!-- Bingo Container -->
    <div id="wrapper"></div>
    <!-- Game Settings -->
    <script src="app.js"></script>
</body>
```
2. Ardından kartları oluşturmak için kullanın
```js
BINGO("Player 1", "Player 2");
// Daha fazla oyuncu eklemek için kullanıcının adını parametre olarak ekleyin.
// example -> BINGO("Player 1", "Player 2", "Player 3");
```
### Özellikler
- 9 Kullanıcıya kadar oyuncu desteği ve kart tasarımı
- Her kart'a ait farklı kullanıcı isimleri

## Kullanılan kart renkleri

- `#0d6efd`
- `#6610f2`
- `#d63384`
- `#dc3545`
- `#fd7e14`
- `#ffc107`
- `#198754`
- `#20c997`
- `#0dcaf0`
