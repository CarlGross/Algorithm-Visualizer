import { drawStep } from "../../utils/drawStep";
import { useEffect, useState, useRef } from "react";
import styles from "./CanvasVisualizer.module.css";
const CanvasVisualizer = ({steps, interval, width=300, height=200, text=""})=>{
    const ref = useRef();
    const [currStep, setCurrStep] = useState(0);
//     useEffect(() => {
//     setCurrStep(0);
//     clearTimeout(timerRef.current);
//   }, [steps]);


    useEffect(() => {
        if (!steps || steps.length == 0){
            return;
        }
        if (currStep > steps.length - 1){
            return;
        }
        const ctx = ref.current.getContext('2d');
        drawStep(ctx, steps[currStep], width, height);
    }, [currStep, steps])
    useEffect(() => {
        if (currStep > steps.length - 1){
            return;
        }
        const timer = setTimeout(() => {
            setCurrStep(s => s + 1);
        }, interval)

        return () => clearTimeout(timer);
    }, [currStep, steps, interval])
    return <div className={styles.wrapper}><h1>{text}</h1><canvas ref={ref} className={styles.canvas}width={width} height={height} /></div>
}

export default CanvasVisualizer;