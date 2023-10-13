import style from "./loader.module.css";
import { LoaderSvg } from "./loader.svg";

const loaderSizes = {
  small: 16,
  medium: 24,
  large: 40,
};

interface ILoaderProps {
  size: number;
  inverse: boolean;
}

function Loader({ size, inverse = false }: ILoaderProps): JSX.Element {
  const loaderColor = inverse ? "#fff" : "#3C39EC";

  const wrapperStyleKey = "wrapper_" + size;
  return (
    <div className={style[wrapperStyleKey]}>
      <LoaderSvg color={loaderColor} size={loaderSizes[size]} />
    </div>
  );
}
