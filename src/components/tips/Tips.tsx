import { SlQuestion } from 'react-icons/sl';

function Tips() {
  return (
    <div className="app__tips">
      <SlQuestion className="app__tips-icon" />
      <p className="app__tips-text">
        - в режиме конструктора можно собирать интерфейс, калькулятор не
        работает <br /> - в режиме runtime работает калькулятор , но нельзя
        собирать интерфейс <br />- двойной клик по элементу удаляет его из
        конструктора
      </p>
    </div>
  );
}

export default Tips;
