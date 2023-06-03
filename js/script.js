let button = document.querySelector('button');

var date = new Date();
    year = date.getFullYear(),
    month = String(date.getMonth()+1).padStart(2,'0'),
    todayDate = String(date.getDate()).padStart(2,'0'),
    datePattern = year + '-' + month + '-' + todayDate,
document.getElementById("date1").value = datePattern;

button.addEventListener('click' , function(event){
    event.preventDefault(); 
    let date2 = new Date(document.getElementById('date2').value),
        date1 = new Date(document.getElementById('date1').value),
        spring = document.getElementById('spring'),
        summer = document.getElementById('summer'),
        autumn = document.getElementById('autumn'),
        winter = document.getElementById('winter'),
        daysOutput = document.querySelector('span');

    if(date1.getTime() && date2.getTime()){
        let different = date2.getTime() - date1.getTime(),
            day = different / (1000 * 60 * 60 * 24);
        daysOutput.innerText = day;
    }

    season = date2.getMonth()+1;
    switch(parseInt(season)){
        case 12:
        case 1:
        case 2:
            winter.classList.add('visible-img');
            spring.classList.remove('visible-img');
            summer.classList.remove('visible-img');
            autumn.classList.remove('visible-img');
        break;
        case 3:
        case 4:
        case 5:
            spring.classList.add('visible-img');
            winter.classList.remove('visible-img');
            summer.classList.remove('visible-img');
            autumn.classList.remove('visible-img');
        break;
        case 6:
        case 7:
        case 8:
            summer.classList.add('visible-img');
            winter.classList.remove('visible-img');
            spring.classList.remove('visible-img');
            autumn.classList.remove('visible-img');
        break;
        case 9:
        case 10:
        case 11:
            autumn.classList.add('visible-img');
            summer.classList.remove('visible-img');
            winter.classList.remove('visible-img');
            spring.classList.remove('visible-img');            
        break;
    }  
});
