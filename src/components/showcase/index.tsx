import style from "./showcase.module.css";

export default function Showcase({ children, ...props }: any) {
  return (
    <div {...props} className={style.showcase}>
      {children}
    </div>
  )
}