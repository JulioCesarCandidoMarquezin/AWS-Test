"use client"

import { useSendMail } from "./hooks/useSendMail";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [email, setEmail] = useState("");
  const { mutate, isSuccess, isError } = useSendMail();

  useEffect(() => {
    if(!isSuccess) return;
    toast('Assinatura confirmada', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "dark",
      type: "success"
      });
  }, [isSuccess])

  useEffect(() => {
    if(!isError) return;
    toast('Assinatura inválida', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "dark",
      type: "error"
      });
  }, [isError])

  const submit = () => {
    console.log("test")
    mutate({
      email,
      name: "julio"
    })
  }

  return(
  <main className={styles.main}>
    <div>
      <input onChange={e => setEmail(e.target.value)}></input>
      <button onClick={submit}>Submit</button>
    </div>
  </main>
  )
}
