export function drawStep(ctx, step, width, height){
    const barWidth = width / step.array.length;
    const maxValue = Math.max(...step.array);
    ctx.clearRect(0, 0, width, height);
    step.array.forEach((value, index) => {
        const x = index * barWidth;
        const barHeight = (value/maxValue) * height;
        const y = height - barHeight;
        ctx.fillStyle = step.compared.includes(index) ? "red": "green";
        ctx.fillRect(x, y, barWidth - 2, barHeight);
    }); 
}