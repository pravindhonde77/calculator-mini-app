let nums=document.querySelectorAll("#keyboard>div")
let bag=document.querySelector("#display")

for(let i=0;i<nums.length;i++){
    nums[i].addEventListener("click",myCalculator)
}
function myCalculator(){
    let targetNumber=event.target.innerText;
    switch(targetNumber){
        case "C":
            bag.innerText="";
            break;
            case "=":
                bag.innerText=eval(bag.innerText)
                break;
        default:
            bag.innerText += targetNumber
    }
}