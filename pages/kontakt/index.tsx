import Image from "next/image";
import styles from './style.module.css';
import Head from "next/head";
import Kontaktformular from "@/components/kontaktformular";

export default function _()
{

    return (
        <>
        <Head>
      <title>ExitLinks - Kontakt</title>
    </Head>
        <div className="block container">
           <Kontaktformular/>
        </div>
        </>
        )
}