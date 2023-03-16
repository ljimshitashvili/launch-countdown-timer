const days = document.querySelector('#day');
const hours = document.querySelector('#hour');
const mins = document.querySelector('#min');
const secs = document.querySelector('#sec');

const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7);


const calculateTime = setInterval(()=>{
    
    const currentTime = new Date().getTime();

    const timeRange = futureDate.getTime() - currentTime;

    const dayQuantity = Math.floor(timeRange / (1000 * 60 * 60 * 24));
    const hourQuantity = Math.floor((timeRange % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minQuantity = Math.floor((timeRange % (1000 * 60 * 60)) / (1000 * 60));
    const secQuantity = Math.floor((timeRange % (1000 * 60)) / 1000);
    
    days.textContent = dayQuantity.toString().padStart(2,"0");
    hours.textContent = hourQuantity.toString().padStart(2,"0");
    mins.textContent = minQuantity.toString().padStart(2,"0");
    secs.textContent = secQuantity.toString().padStart(2,"0");

},1000);

