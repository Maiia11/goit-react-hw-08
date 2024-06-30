import css from "./HomePage.module.css"
import { MdOutlineContactPhone } from "react-icons/md";

const HomePage = () => {
  return (
    <div>
      <h1 className={css.text}>Contact meneger welcome page</h1>
      <MdOutlineContactPhone />
    </div>
  )
}

export default HomePage