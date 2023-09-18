import { TextareaAutosize } from "@mui/material";
import styles from "./autoresize-textarea.module.css"

const AutoresizeTextarea = ({ value, onChange, ...restProps }) => {
  return <TextareaAutosize
    className={styles.autoresize}
    value={value}
    onChange={onChange}
    {...restProps}
  />
}

export default AutoresizeTextarea;