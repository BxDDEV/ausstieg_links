import Link from 'next/link';
import styles from './button.module.css'

export default function Button(param:any)
{
    let path = param.path;
    let text = param.text

    return (<Link className={styles.redirectButton} href={path}>{text}</Link>)
}