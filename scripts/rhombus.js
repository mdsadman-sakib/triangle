function rhombusCalculator(){
   const rhombusInput = document.getElementById('rhombus-d');
   const rhombusText = rhombusInput.value;
   const b1 = parseFloat(rhombusText);
   console.log(b1);

   const rhombusB2Input = document.getElementById('rhombus-d2');
   const rhombusB2Text = rhombusB2Input.value;
   const b2 = parseFloat(rhombusB2Text);
   console.log(rhombusB2Text);


 const area = 0.5 * b1 * b2 ;
 const base = area;
 console.log(base);

 const diSpley = document.getElementById('areSpan');
 diSpley.innerText = area;

}