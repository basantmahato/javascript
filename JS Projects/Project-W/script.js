
  function printDiv(divId) {
    const printContents = document.getElementById(divId).innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }


  fetch('data.json')
  .then(response => response.json())
  .then(data => {

    const featureData=data[" feature"]
    const mondayData = data[" monday"]; 
    const tuesdayData = data[" tuesday"]; 
    const wednesdayData = data[" wednesday"];
    const thursdayData = data[" thursday"];
    const fridayData = data[" friday"];
    const saturdayData = data[" saturday"];
    const sundayData = data[" sunday"];


    ///---- Fetching Vlaues For Feature

    document.getElementById('fe-temp').textContent = featureData.temperature;
    document.getElementById('fe-rain').textContent = featureData.rain;
    document.getElementById('fe-wind').textContent = featureData.wind;

///---- Fetching Vlaues For Week
    document.getElementById('mon-night').textContent = mondayData.night;
    document.getElementById('mon-morning').textContent = mondayData.morning;
    document.getElementById('mon-afternoon').textContent = mondayData.afternoon;
    document.getElementById('mon-evening').textContent = mondayData.evening;
    document.getElementById('mon-temperature').textContent = mondayData.temperature;
    document.getElementById('mon-uvindex').textContent = mondayData.uvindex;
    document.getElementById('mon-wind').textContent = mondayData.wind;

    document.getElementById('tue-night').textContent = tuesdayData.night;
    document.getElementById('tue-morning').textContent = tuesdayData.morning;
    document.getElementById('tue-afternoon').textContent = tuesdayData.afternoon;
    document.getElementById('tue-evening').textContent = tuesdayData.evening;
    document.getElementById('tue-temperature').textContent = tuesdayData.temperature;
    document.getElementById('tue-uvindex').textContent = tuesdayData.uvindex;
    document.getElementById('tue-wind').textContent = tuesdayData.wind;

    document.getElementById('wed-night').textContent = wednesdayData.night;
    document.getElementById('wed-morning').textContent = wednesdayData.morning;
    document.getElementById('wed-afternoon').textContent = wednesdayData.afternoon;
    document.getElementById('wed-evening').textContent = wednesdayData.evening;
    document.getElementById('wed-temperature').textContent = wednesdayData.temperature;
    document.getElementById('wed-uvindex').textContent = wednesdayData.uvindex;
    document.getElementById('wed-wind').textContent = wednesdayData.wind;

    document.getElementById('thu-night').textContent = thursdayData.night;
    document.getElementById('thu-morning').textContent = thursdayData.morning;
    document.getElementById('thu-afternoon').textContent = thursdayData.afternoon;
    document.getElementById('thu-evening').textContent = thursdayData.evening;
    document.getElementById('thu-temperature').textContent = thursdayData.temperature;
    document.getElementById('thu-uvindex').textContent = thursdayData.uvindex;
    document.getElementById('thu-wind').textContent = thursdayData.wind;

    document.getElementById('fri-night').textContent = fridayData.night;
    document.getElementById('fri-morning').textContent = fridayData.morning;
    document.getElementById('fri-afternoon').textContent = fridayData.afternoon;
    document.getElementById('fri-evening').textContent = fridayData.evening;
    document.getElementById('fri-temperature').textContent = fridayData.temperature;
    document.getElementById('fri-uvindex').textContent = fridayData.uvindex;
    document.getElementById('fri-wind').textContent = fridayData.wind;

    document.getElementById('sat-night').textContent = saturdayData.night;
    document.getElementById('sat-morning').textContent = saturdayData.morning;
    document.getElementById('sat-afternoon').textContent = saturdayData.afternoon;
    document.getElementById('sat-evening').textContent = saturdayData.evening;
    document.getElementById('sat-temperature').textContent = saturdayData.temperature;
    document.getElementById('sat-uvindex').textContent = saturdayData.uvindex;
    document.getElementById('sat-wind').textContent = saturdayData.wind;

    document.getElementById('sun-night').textContent = sundayData.night;
    document.getElementById('sun-morning').textContent = sundayData.morning;
    document.getElementById('sun-afternoon').textContent = sundayData.afternoon;
    document.getElementById('sun-evening').textContent = sundayData.evening;
    document.getElementById('sun-temperature').textContent = sundayData.temperature;
    document.getElementById('sun-uvindex').textContent = sundayData.uvindex;
    document.getElementById('sun-wind').textContent = sundayData.wind;



  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });





  let originalContent = document.getElementById("print-section").innerHTML;


  function revertDiv() {
    document.getElementById("print-section").innerHTML = originalContent;
  }

  function replacew() {
    const div = document.getElementById("print-section");
    div.innerHTML = '<img src="Images/wind.png" alt="Weather Forecast" style="width: 100%; max-width: 400px;">';
  }

  function replaceuv() {
    const div = document.getElementById("print-section");
    div.innerHTML = '<img src="Images/uvindex.png" alt="Weather Forecast" style="width: 100%; max-width: 400px;">';
  }



