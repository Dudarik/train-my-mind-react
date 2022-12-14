import "./pagesStyles/Rulespage.scss";
export const Rulespage: React.FC = () => {
  return (
    <div className='rules-container'>
      <div className='author-remark'>
        <p>
          Эта игра - аналог настольной игры "Ничего человеческого?". Вроде как
          помогает тренировать память(но это не точно). Оригинал можно
          приобрести в магазинах настольных игр.
        </p>
      </div>
      <div className='rules'>
        <h1>Правила игры</h1>

        <h2>Цель игры</h2>
        <p>Наберите как можно больше очков!</p>
        <h2>Подготовка к игре</h2>
        <p>
          Игроку даётся 1 минута для того, чтобы запомнить жетоны, после чего
          жетоны переворачиваются рубашкой вверх.
        </p>
        <h2>Ход игры</h2>
        <p>Игра длится три раунда, каждый раунд проходит следующим образом:</p>
        <ol>
          <li>Игра подсвечивает жетон, который игрок должен отгадать.</li>
          <li>
            Игрок указывает хотя бы один признак жетона и нажимает "Проверить".
          </li>
          <li>За правильно отгаданные признаки игрок получает победные очки</li>
          <li>
            Раунд заканчивается, когда на столе остается 3(три) неоткрытых
            жетона.
          </li>
        </ol>

        <h2>Описание жетонов</h2>
        <p>
          На жетонах «Памяти» изображены символы разного цвета и количества.
          Таким образом, у каждого жетона есть три признака:
        </p>
        <ul>
          <li>
            <span> тип</span>: батарейка, шестерёнка, инструмент, лампочка;
          </li>
          <li>
            <span>цвет</span>: жёлтый, красный, синий, зелёный;
          </li>
          <li>
            <span>количество</span>: один, два, три, четыре.
          </li>
        </ul>

        <h2>Начисление очков</h2>
        <p>Очки начисляются за правильно названные признаки:</p>
        <ul>
          <li>1 очко за один признак (цвет/тип/количество).</li>
          <li>3 очка за два признака.</li>
          <li>6 очков за все три признака.</li>
        </ul>
        <p>
          Важно! Если игрок назвал несколько признаков, но ошибся хотя бы в
          одном из них, очки не начисляются.
        </p>
      </div>
    </div>
  );
};
