var inp=document.getElementById('name');
var hd=document.getElementById('newchk');
var fm=document.getElementById('frm');
var sname=document.getElementById('stdname')
var div_res=document.getElementById('result_div');
var tq=document.getElementById('tquest')
var cqu=document.getElementById('cquest')
var WANS=document.getElementById('wans')
var PERC=document.getElementById('per')


var arr=[
    {
        'Q ' :' CSS stand for??',
        'opt ' : ['Computer Style Sheet',' Casecading Style Sheet',  'Colourful Style Sheet' ,  'Creative Style Sheet'],
        'cans' : '2'
        
    },
    {
        'Q ' :'Which HTML tag is used to define an internal css?:',
        'opt ' : ['<css>','<stylesheet>','<style>','<script>'],
        'cans' : '3'

    },
    {
        'Q ' :'Which HTML attribute is used to define inline styles?:',
        'opt ' : ['styles','style','font','css'],
        'cans' : '2'

    },
    {
        'Q ' :'Which is the correct CSS syntax?:',
        'opt ' : ['{body:color="red;"}','{body;color="red;"}','body:color="red;"','body{color:red;}'],
        'cans' : '4'

    },
    {
        'Q ' :'Which property is used to change the font color?:',
        'opt ' : ['color','background-color','bgcolor','background'],
        'cans' : '1'

    },
   
    {
        'Q ' :'Which CSS property controls the text size?:',
        'opt ' : ['font-style','text-style','font-size','text-size'],
        'cans' : '3'

    },
    {
        'Q ' :'How do you display hyperlinks without an underline?:',
        'opt ' : ['a{text-decoration:no-underline;}','a{underline:none;}','a{text-decoration:none}','a{decoration:no-nderline}'],
        'cans' : '3'

    },
    {
        'Q ' :'Which property is used to change the font of an element?:',
        'opt ' : ['font-style','font-family','font-size','font-weight'],
        'cans' : '2'

    },
    {
        'Q ' :'How do you make the text bold?:',
        'opt ' : ['font-weight', 'font-style','font-family','font-size'],
        'cans' : '1'

    },

    {
        'Q ' :'Which property is used to change the background color?:',
        'opt ' : ['color','bgcolor', 'background-color','background'],
        'cans' : '3'

    },
]

main_c=document.getElementById('main_div')
quest=document.getElementById('question')
var qno=document.getElementById('qof')
var p1=document.getElementById('option1')
var p2=document.getElementById('option2')
var p3=document.getElementById('option3')
var p4=document.getElementById('option4')
var result=document.getElementById('res')
var heading=document.getElementById('head')
var dp=document.getElementById('dp')
var agnbtn=document.getElementById('again')
var cquestion = 0
var score=0
var tQ=arr.length
var atmp=1




function questionget(num){
    var q=arr[num]
    quest.textContent=(num+1) +' ).' + arr[num]['Q ']
    p1.textContent=q['opt '][0]
    p2.textContent=q['opt '][1]
    p3.textContent=q['opt '][2]
    p4.textContent=q['opt '][3]
    qno.textContent="Question "+(num+1) +" of 10"

}
function nextques(){
    var sOption = document.querySelector('input[type=radio]:checked');
  if (sOption == null) {
      alert('Please select your answer!');
      return;
  }
  var answer = sOption.value;
  console.log('CORRECT ANSWER :',arr[cquestion].cans)
  console.log("YOUR ANSWER :",answer)
  if (arr[cquestion].cans  == answer) {
      score += 1;
  }
 console.log('score :', score)

sOption.checked = false;
cquestion++;
if (cquestion == tQ) {
    
    
    console.log("total question ",tQ)
    console.log('Name :',inp.value)
    console.log('score :', score)

   
   main_c.style.display='none'
   div_res.style.display=''
   result.style.display=''
   result.textContent='Your Total Score : '+score+'/ 10'
   agnbtn.style.display='block'
   sname.style.display=''
   tq.style.display=''
   tq.textContent="Total Question : "+  tQ
    sname.textContent="Student name : "+ inp.value
   dp.style.display='block'
   cqu.style.display=''
   cqu.textContent='Correct Answer : '+score
   WANS.style.display=''
   WANS.textContent='Wrong Answer : '+(10-score)
   heading.style.display=''
   heading.textContent='CSS QUIZ'
   PERC.style.display=''
   PERC.textContent='Percentage : '+((score*100)/10) +"%"


   

    if(score>=8){

    
    dp.innerHTML="<b>'Result : Excellent Good Job  Congratulation You Passed'</b>"

        }
    else if(score<=7 && score>=5){
        dp.innerHTML="<b>'Result : Congratulation You Passed'</b>"
    }
    else{
    dp.innerHTML="<b>'Result : fail'</b>"
}



   
   return
}





questionget(cquestion)

}
questionget(cquestion)

function restart(){
    location = 'cssq.html';

}



function getdata(){
    console.log(inp.value)
    if(inp.value==''){
        alert("Please Enter Your Name ")
    }
    else{
        console.log(fm)
        fm.style.display='none'
        main_c.style.display=''
        questionget(cquestion)

    }
}