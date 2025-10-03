const calculateFormEl = document.getElementById('calculateForm');
const calculateButtonEl = document.querySelector('.Calculate-button');

const totalMarksEl = document.getElementById('totalMarks');
const totalPercentageEl = document.getElementById('percentage');
const gradeEl = document.getElementById('grade');

const calculateMarks = () => {
    maxMarks = 400;
    fullMarks = 100;
    totalMarks = 0;
    totalPercentage = '';
    totalGrade = '';
    event.preventDefault();

    const formData = new FormData(calculateFormEl);

    const data= {};
    formData.forEach((value,key)=>{
        data[key] = +value;
    });

    totalMarks = data.Maths + data.Science + data.English + data.History;
    totalPercentage = (totalMarks / maxMarks) * 100;

    console.log({data})
    console.log(totalMarks);

    totalMarksEl.innerHTML = `Total Marks: ${totalMarks} / ${maxMarks} `;
    totalPercentageEl.innerHTML = `Percentage: ${totalPercentage.toFixed(2)}%`;

    if (totalPercentage >= 90) {
        totalGrade = 'A+';
    } else if (totalPercentage >= 80) {
        totalGrade = 'A';
    } else if (totalPercentage >= 70) {
        totalGrade = 'B+';
    } else if (totalPercentage >= 60) {
        totalGrade = 'B';
    } else if (totalPercentage >= 50) {
        totalGrade = 'C';
    } else {
        totalGrade = 'F';
    }
    gradeEl.innerHTML = `${totalGrade}`;
}

calculateButtonEl.addEventListener('click', calculateMarks);
