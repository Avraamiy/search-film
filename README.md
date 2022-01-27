[Тестовое задание](https://www.notion.so/afddf57082f1408c8ab686a51f1c8f74)

Необходимо написать простое приложение с поиском фильмов.

**Макет в фигме**: [https://www.figma.com/file/slseyQP5BQGU7sYIdfJT0N/Тестовое-задание-–-Movies-Search](https://www.figma.com/file/slseyQP5BQGU7sYIdfJT0N/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%E2%80%93-Movies-Search)
**Шрифт**: [https://fonts.google.com/specimen/Ubuntu](https://fonts.google.com/specimen/Ubuntu)

Стилизовать можно, как хочется: css-modules, styled-components, emotion, etc.
Для хранения состояния можно использовать возможности самого React, либо MobX.

1. Форма поиска должна отправляться при нажатии на соответствующую кнопку и при нажатии клавиши “Enter”.
2. Необходимо обработать нажатие на клавишу “Escape” при активном фокусе на поле поиска, чтобы поисковая фраза возвращалась к предыдущему состоянию до фокуса.
3. При нажатии на крестик, страница должна приходить к исходному состоянию без результата поиска.
4. Бейджик с рейтингом на обложке должен работать по принципу:
   1-4 красный, 4-8 желтый, больше или равен 8 - зелёный.
5. Пагинация должна работать и отображаться только при наличии страниц.
   Кол-во фильмов на страницу: 20.

Готовое задание необходимо загрузить на GitHub в публичный репозиторий, либо же дать доступ к приватному репозиторию аккаунту [@ddjrn](https://github.com/ddjrn)

## API

### Поиск

**GET**  *https://movies-test.grapi.ru/search*

| GET-параметр |  |  |
| --- | --- | --- |
| q | string | Поисковая фраза. Название фильма |
| p | integer | Номер страницы |

Пример: *[https://movies-test.grapi.ru/search?q=Мстители&p=2](https://movies-test.grapi.ru/search?q=Мстители&p=2)*

❗️ Обрати внимание, что объекты отличаются в зависимости от media_type.

### Изображения

**GET**  *https://movies-test.grapi.ru/img*
Пример: [*https://movies-test.grapi.ru/img/aMEQICH4Kba1XAgWeMCuFPIUXgF.jpg*](https://movies-test.grapi.ru/img/aMEQICH4Kba1XAgWeMCuFPIUXgF.jpg)

---

> P.S.
Адрес [https://movies-test.grapi.ru/search](https://movies-test.grapi.ru/search?q=) был создан и используется только для этого тестового задания и может быть отключён в будущем.
Для поиска фильмов мы используем API TMDB. В дальнейшем, если ты захочешь сохранить работоспособность своего приложения, то можешь использовать URL из [официальной документации TMDB](https://developers.themoviedb.org/3/search/multi-search), предварительно получив API-ключ в их [личном кабинете](https://www.themoviedb.org/settings/api).
>