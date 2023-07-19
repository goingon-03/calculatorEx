
let input = document.getElementById('formula');
let reult = document.getElementById('result');

//1

//function b1(){

//input.value +='1';
//}

//function b2(){

   // input.value +='2';
   // }

    //2
  //  function inputNum(num){
  //       input.value +=num;
   // }
    

     //3
function inputNum2(obj){
        input.value+=obj.innerHTML;
}

//c 버튼 구현
function clearInput(){
  input.value='';
  result.value='';
}
//한 글자씩 지우기

function backspace(){
  let str=input.value;
  if(str !=''){
  input.value= str.substring(0,str.length-1)//전체 길이에서 한 글자만 뺀 것 만큼 분리
  }
}  

//계산
function formulaReult(){
    //수식으로서 문자열을 계산하는 함수
    result.value=eval(input.value);
}

//부호 바꾸기
function plusMinus(){
  input.value= '-(' +input.value+ ')';
}