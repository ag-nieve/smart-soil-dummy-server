
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

async function test(){
    console.log("test!");

    const base_url = "https://smart-soil-8e708-default-rtdb.asia-southeast1.firebasedatabase.app/arduino_sensors.json";



    var interval = setInterval(function(){
        setTimeout(async function() {

            const humidity = getRndInteger(20, 30);
            const temperature = getRndInteger(20, 34);

            const options = {
                method: 'POST',
                body: JSON.stringify({
                    "humidity": humidity,
                    "temperature": temperature
                })
            }
            const response = await fetch(base_url, options);

            const result = await response.json();

            console.log("result: ", result);
        }, 10000);
    }, 5000);


}

test();
