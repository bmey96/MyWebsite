const image = document.getElementById('SmallHand');
const image1 = document.getElementById('LargeHand');

let minute = 0;
let seconds = 0;

function UpdateSmallHandRotation(n){
    let result = 6 * n;

    if(result >= 360){
        result = 0;

    }

    image.style.transform(result);
}

function UpdateLargeHandRotation(){

}

function HandleTime(){
    seconds += 1;

    UpdateSmallHandRotation(seconds);

    if(seconds >= 60){
        minute += 1;
    }
}