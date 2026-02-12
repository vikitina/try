import { useDispatch, useSelector } from "react-redux"
import { selectTheme } from "../../store/settings-process/settings-process.selector";
import styles from "./thema-toggler.module.scss";
import { THEMES } from "../../constants";
import { changeThema } from "../../store/settings-process/settings-process.slice";

export default function ThemaToggler() {
  const dispatch = useDispatch()
  const thema = useSelector(selectTheme)
  const handleChangeThema = ({ currentTarget }) => {
    const currentThema = currentTarget.dataset.thema;
    dispatch(changeThema(currentThema));
    currentTarget.blur()
  }

  return (
    <div className={styles.toggler}>
      <button
        className={styles.current}
      >
        <span className="visually-hidden">{thema}</span>
      </button>
      <div className={styles.list}>
        <div className={styles["list-container"]}>
          {THEMES.map((item) =>
            <button
              className={`${styles.thema} ${item.name === thema ? styles.active : ''}`}
              onClick={handleChangeThema}
              data-thema={item.name}
              key={item.name}
            >
              <span className={styles.color} style={{ background: item.color }}></span>
              {item.name}
            </button>)}
        </div>
      </div>
    </div>
  )
};