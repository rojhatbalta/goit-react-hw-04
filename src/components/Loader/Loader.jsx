import { ColorRing } from "react-loader-spinner";
import Styles from "./Loader.module.css";

export default function Loader() {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperClass={Styles.loaderContainer}
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
}