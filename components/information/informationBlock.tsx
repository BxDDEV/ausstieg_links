import Image from "next/image";
import styles from './information.module.css';

export default function InformationBlock(param: any) {
  let imageRight = param.imageRight;
  let image = param.image;
  let w = param.width;
  let child = param.children;


  if (imageRight) {
    return (
      <div className={styles.row +' '+ styles.right}>
        <div className="col-text">
          {child}
        </div>
        {image && (<div className="col-image">
          <Image src={`/${image}`} height={0} width={0} sizes="100vw" className={styles.icon} alt="" style={{ width: w, height: 'auto' }}></Image>
        </div>)}
        
        </div>
    )
  }

  return (
    <div className={styles.row +' '+ styles.left}>
      {image && (<div className="col-image">
        <Image src={`/${image}`} height={0} width={0} sizes="100vw" className={styles.icon} alt="" style={{ width: w, height: 'auto' }}></Image>
      </div>)}
      <div className="col-text">
      {child}
      </div>
    </div>
  )

}