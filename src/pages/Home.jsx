import styles from "./Home.module.css";

export default function Home(){
    return <div className={styles.home}><div className={styles.title}>Algorithm Visualizer</div>
    <br></br>
     <div className={styles.heading}>About:</div>
     <p>
      This application is intended to teach or remind users of how different algorithms work.
      Currently, only certain sorting algorithms are visualized, but there are plans to add many
      other types of algorithms.  
     </p>   
    </div>;
}