function ParallelogramCalculator(){
 const ParallelogramInput = document.getElementById('parallelogram-base');
 const parallelogramText = ParallelogramInput.value;
 const base = parseFloat(parallelogramText);
 console.log(base);

 //////////

 const parallelogramHeightInput = document.getElementById('parallelogram-height');
 const parallelogramHeightText = parallelogramHeightInput.value;
 const height = parseFloat(parallelogramHeightText);
 console.log(height);


 const area = base * height;
 console.log(area);

 const parallelogramArea = document.getElementById('parallelogram-area');
 parallelogramArea.innerText = area;
}