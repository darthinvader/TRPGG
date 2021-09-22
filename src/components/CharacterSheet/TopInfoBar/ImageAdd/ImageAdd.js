import { RiImageAddFill } from "react-icons/ri";
import FloatingInput from "../../../FloatingInput/FloatingInput";
import styles from "./ImageAdd.module.scss";

const ImageAdd = () => {
  return (
    <div className={styles.Container}>
      <RiImageAddFill className={styles.ImageAdd} />
      <FloatingInput />
    </div>
  );
};

export default ImageAdd;
