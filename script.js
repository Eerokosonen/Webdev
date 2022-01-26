// Logiikka navigointiin
async function fetchhtml(url) {
    return await (await fetch(url)).text();
}

async function load(file) {
    const contentDiv = document.getElementById('root');
    contentDiv.innerHTML = await fetchhtml(file);

    if(file=='home.html'){
        initindex();
        initbtn();
        setTimeout(()=>getWorkouts(),100);  
    }
       
};


// Etusivun treenikalenterin sisältö
const workouts = [
    { date: 'Lauantai 06.02.2021', header: 'Metcon (reps)', info: 'AMRAP in 15 minutes of: 5 Deadlifts 10 Hang power cleans 15 Shoulder to overhead 20 Sit-ups M: 50kg N: 35kg' },
    { date: 'Sunnuntai 07.02.2021', header: 'Metcon (time)', info: 'With partner 3 rounds (each) for time: 1000m row *Active recovery on bike erg after each row. YGIG. Timecap: 28 minutes.' },
    { date: 'Maanantai 08.02.2021', header: 'Metcon (quality)', info: '20 minutes for quality and unbroken reps: 10 KBS 36/28kg 10 “2-for-1” wallball shots 20/14lb 10 DB Squat cleans 20/15kg DB’s *Goal is to do every set unbroken so rest as needed. ' },
    { date: 'Tiistai 09.02.2021', header: 'Metcon (reps)', info: 'With partner AMRAP in 16 minutes of: ME calories standing bike erg. *30 Burpee box jump overs every 4:00. Start the workout with burpee box jumps overs. 24/20”. **Split BBJO anyhow.' },
    { date: 'Keskiviikko 10.02.2021', header: 'Strength (load)', info: 'Shoulder press, 4 sets of 3 @RPE9 + 1 set for max reps. ' + '<br>' + ' Lift every 2:30' },
    { date: 'Torstai 11.02.2021', header: 'Metcon (time)', info: 'For time: ' + '<br>' + ' 1000/800m Bike 500/400m Row 200 Double-unders Timecap: 7 minutes.' },
    { date: 'Perjantai 12.02.2021', header: 'Strength (load)', info: 'Front squat, 4 x 3 @RPE9 + 1 set for max reps.  ' + '<br>' + ' Lift every 3:00' }
];

// Treenikalenterin kuvat
var p1 = new Image().src = "Kuvasisältö/kalenterikuva1.jpg";
var p2 = new Image().src = "Kuvasisältö/kalenterikuva2.jpg";
var p3 = new Image().src = "Kuvasisältö/kalenterikuva3.jpg";
var p4 = new Image().src = "Kuvasisältö/kalenterikuva4.jpg";
var p5 = new Image().src = "Kuvasisältö/kalenterikuva5.jpg";
var p6 = new Image().src = "Kuvasisältö/kalenterikuva6.jpg";
var p7 = new Image().src = "Kuvasisältö/kalenterikuva7.jpg";
var p8 = new Image().src = "Kuvasisältö/kalenterikuva8.jpg";

const pics = [p1, p2, p3, p4, p5, p6, p7, p8];


var index = workouts.length - 1;

function initindex(){
    index == workouts.length - 1;
}

/// Treenikalenterin käyttö nuolinäppäimillä
$(window).keyup(function (e) {
    var key = e.which;    
    if (key == 39 && !$('#nextbtn').hasClass('disabled')) { // oikea nuolinäppäin
        toggle(1);        
    } else if (key == 37 && !$('#prevbtn').hasClass('disabled')) { // vasen nuolinäppäin
        toggle(-1);
    }
});


function initbtn(){
    if (index <= 6) {
        $("#nextbtn").removeClass("disabled");
    }
    if (index == 6) {
        $("#nextbtn").addClass("disabled");
    }
    if (index <= 1) {
        $("#prevbtn").addClass("disabled");        
    }
    if (index > 2) {
        $("#prevbtn").removeClass("disabled");
    }
}


// Treenikalenterin päivän vaihtaminen
function toggle(p) {
    index += p;

    initbtn();

    getWorkouts();
}

// Treenien haku taulukosta
function getWorkouts() {
    $('#pic').attr('src',pics[index]);
    $('#header').html(workouts[index].header);
    $('#date').html(workouts[index].date);
    $('#info').html(workouts[index].info);
}



