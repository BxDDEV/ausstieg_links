import Image from "next/image";

import styles from './link.module.css';

export default function LinkBlock(param: any) {
    let left = param.left as boolean;
    let image = param.image;
    let children = param.children;
    let link = param.link;


    if (left) {
        return (
            <div className={styles.linkLeft + ' row'}>
                <div className="col-xl-3">
                    <Image src={'/' + image} width={0} height={0} sizes="100vw" alt="" className={styles.image}/>
                </div>
                <div className="col-xl-9">
                    {children}
                    <a href={link}>{link}</a>
                </div>
            </div>
        )
    }
        return (
            <div className={styles.link + ' row'}>
            <div className="col-xl-9">
                {children}
                <a href={link} style={{}}>{link}</a>
            </div>
            <div className="col-xl-3">
                <Image src={'/' + image} width={0} height={0} sizes="100vw" alt="" className={styles.image}/>
            </div>
        </div>
        )
}