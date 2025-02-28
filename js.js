const form = document.querySelector('form');
// const height =  parseInt(document.querySelector('#height').value)
//  const weight =  parseInt(document.querySelector('#weight').value)
// if this above code will be there then the empty value of height and weight will stored

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please enter valid height';
  }else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please enter valid weight';
  }
  else {
    const BMI = (weight / ((height / 100) ** 2)).toFixed(2)
    const neww = document.createElement('h3')
    if(BMI < 18.6){
      
      results.innerHTML=`<span>${BMI}</span>`
       const lineBreak = document.createElement('br');
       results.append(lineBreak)
       results.appendChild(document.createTextNode(" which is under weight"))
    }
     if(BMI > 24.9){

      results.innerHTML=`<span>${BMI}</span>`
      const lineBreak = document.createElement('br');
      results.append(lineBreak)
      results.appendChild(document.createTextNode(" which is over weight"))

    }
     if(BMI >= 18.6 && BMI <= 24.9){

       results.innerHTML=`<span>${BMI}</span>`
       const lineBreak = document.createElement('br');
       results.append(lineBreak)
       results.appendChild(document.createTextNode(" which is normal weight"))

    }
    // const neww=document.createElement('h1')
    // neww.textContent = `Your BMI is ${BMI}`
    // results.replaceWith(neww)
  }

});
 