import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          const color = randomColor();
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: `${color}` }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
