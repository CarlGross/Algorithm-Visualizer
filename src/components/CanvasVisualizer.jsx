import { drawStep } from "../utils/drawStep";
import { useEffect, useState, useRef } from "react";
const CanvasVisualizer = ({steps, interval=300, width=600, height=400})=>{
    const ref = useRef();
    const [currStep, setCurrStep] = useState(0);
    useEffect(() => {
        if (!steps || steps.length == 0){
            return;
        }
        if (currStep > steps.length - 1){
            return;
        }
        const ctx = ref.current.getContext('2d');
        drawStep(ctx, steps[currStep], width, height);
    }, [currStep])
    useEffect(() => {
        if (currStep > steps.length - 1){
            return;
        }
        const timer = setTimeout(() => {
            setCurrStep(s => s + 1);
        }, interval)

        return () => clearTimeout(timer);
    }, [currStep])
    return <canvas ref={ref} width={width} height={height} />
}
export default CanvasVisualizer;