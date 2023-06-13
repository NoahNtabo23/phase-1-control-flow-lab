function scuberGreetingForFeet(a){
  let answer;
  if(a<=400){
    return 'This one is on me !'
  }else if(a>2000 && a<2500){
    return 'I will gladly take your thirty bucks.'
  }else{
    return 'No can do.'
  }
}

function ternaryCheckCity(a){
  let result;
  if(a=='NYC'){
    return 'Ok, sounds good'
  }else{
    return 'No go.'
  }
}
  


function switchOnCharmFromTip(a){
  let answer;
  switch(a){
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    case 'thanks for everything':
      return 'Bye.'
     
  }

}

