import css from './FriendList.module.css';

export const FriendItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={
          css.status + ' ' + (isOnline ? css.statusGreen : css.statusRed)
        }
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
