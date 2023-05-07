'use client';
import Center from "@/components/Center";
import Showcase from "@/components/showcase";
import style from "./button.module.css";
import { useState } from "react";

export default function OurButton() {
  const [value, setValue] = useState(0)
  const handleClick = () => {
    alert("OchirooRick@gmail.com")
    setValue(value + 1);
  }

  return (
    <Showcase>
      <Center>
      <div  className={style.profile}> </div>
        <button onClick={(e) => handleClick()} className={style.ourButton}>
          <section className={style.animation}>
            <div className={style.first}><div>Hello</div></div>
            <div className={style.second}><div>Ochiroo's button</div></div>
          </section>
        </button>
      </Center>
    </Showcase>

  )
}
