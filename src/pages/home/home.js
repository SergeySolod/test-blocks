import React from 'react'

const Home = () => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">Тестовое задание для программистов</h1>
                <p className="lead">
                    <b>Моё решение:</b> https://github.com/SergeySolod/TestBlocks<br/>
                    <b>Технологии:</b> React.js, React Router, Redux, Bootstrap (в задании сказано любой фраемворк, я
                    подавал резюме как React.js разработчик, делал соответственно на React`е)<br/>
                    <b>Видео-обзор:</b> https://youtu.be/W4Ayww9P3qg<br/>
                </p>

                <h1 className="display-4">Задание</h1>
                <p className="lead">
                    1. Необходимо реализовать одностраничное приложение, представляющее
                    из себя список текстовых блоков с дополнительной функциональностью.
                </p>
                <p className="lead">
                    2. Текстовые блоки могут быть двух видов: простые и сложные.
                    Простой текстовый блок содержит:<br/>
                    * текст,<br/>
                    * элемент управления "крестик", по нажатию на который выполняется
                    удаление данного блока.
                </p>
                <p className="lead">
                    3. Кроме того, текстовый блок может быть выделен при помощи одиночного
                    нажатия кнопки мышки на блоке.
                    Сложный текстовый блок расширяет функциональность простого блока. Помимо
                    всего вышеперечисленного он может быть красным или зеленым. Красное
                    состояние может быть переключено в зеленое и наоборот при помощи
                    двойного нажатия кнопки мышки на блоке.
                </p>
                <p className="lead">
                    4. При удалении сложного блока должно выводиться всплывающее сообщение,
                    запрашивающее у пользователя подтвреждение совершаемого действия.
                </p>
                <p className="lead">
                    5. Контент текстовых блоков генерируется случайным образом.
                </p>
                <p className="lead">
                    6. Помимо этого, в приложении должны присутствовать следующие элементы
                    управления:<br/>
                    * кнопка, осуществляющая добавление новых текстовых блоков,<br/>
                    * панель состояния, отражающая информацию:<br/>
                    ** общее количество текстовых блоков в настоящий момент времени,<br/>
                    ** количество выделенных блоков,<br/>
                    ** из выделенных -- количество красных и зеленых.
                </p>
                <p className="lead">
                    7. Стилевое оформление оставляется на усмотрение разработчика. Внешний вид
                    блоков должен репрезентативно отражать их состояние.
                </p>
                <p className="lead">
                    Некоторые дополнения: <br/>
                    * EcmaScript5,<br/>
                    * MV*-архитектура,<br/>
                    * Допустимо использовать любой фреймворк, однако, желательно, чтобы он
                    был низкоуровневым.
                </p>
            </div>
        </div>
    )
}

export default Home;