//your JS code here. If required.
const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.querySelector('#name');
  const ageInput = document.querySelector('#age');
  
  // check if inputs are empty
  if (nameInput.value === '' || ageInput.value === '') {
    alert('Please fill out all fields.');
    return;
  }
  
  const age = parseInt(ageInput.value);
  const name = nameInput.value;
	const promise = new Promise((resolve,reject)=>{
		if(age>18){
			setTimeout(()=>{
				resolve();
			},4000);
		}
		else{
			reject();
		}
	});

	promise.then(()=>{
		alert(`Welcome, ${name}. You can vote.`);
	}).catch(()=>{
		alert(`Oh sorry ${name}. You aren't old enough.`);
	})
	form.reset();
});
