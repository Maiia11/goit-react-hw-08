import css from "./HomePage.module.css"
import { MdOutlineContactPhone } from "react-icons/md";

const HomePage = () => {
  return (
    <div >
      <h1 className={css.text}>
        <span className={css.textWithIcon}>
          Contact manager welcome page
          <MdOutlineContactPhone className={css.icon} />
        </span>
      </h1>
      
    </div>
  )
}

export default HomePage