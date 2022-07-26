// <!-- Bài 1 : Tìm số nguyên dương nhỏ nhất -->
document.getElementById('btnNT').onclick = function() {
  //input
  var number = document.getElementById('number').value * 1;
  var i = 0;
  var check=0; 
  var result ="";
  //process
  while (i < number) {
      check = testSNT(i);
      if( check == 1 ) { 
          result += i + " ";
      }
      ++i;
  }
  //output
  document.getElementById('showInfo').innerHTML =result;
}

function testSNT(n){
  var SNT = 1;
  if (n <2){
      return SNT = 0;
  }
  let i = 2;
  while(i < n){
      if(n % i == 0) {
          SNT = 0;
          break; 
      }
      i++;
  }
  return SNT;
}

