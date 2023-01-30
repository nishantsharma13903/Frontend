var score = 0;
var attempt = [0,0,0,0,0];
var nameofuser = document.getElementById("username").value;
var que_count = 0;
const max_question = 5;


function displayAnswer(num){
        if(num == 1){
            document.getElementById("Answer1").style.display = "block";
            document.getElementById("dpdhideimage1").style.display = "block";
            document.getElementById("dpdshowimage1").style.display = "none";
        }
        else if(num == 2){
            document.getElementById("Answer2").style.display = "block";
            document.getElementById("dpdhideimage2").style.display = "block";
            document.getElementById("dpdshowimage2").style.display = "none";
        }
        else if(num == 3){
            document.getElementById("Answer3").style.display = "block";
            document.getElementById("dpdhideimage3").style.display = "block";
            document.getElementById("dpdshowimage3").style.display = "none";
        }
        else if(num == 4){
            document.getElementById("Answer4").style.display = "block";
            document.getElementById("dpdhideimage4").style.display = "block";
            document.getElementById("dpdshowimage4").style.display = "none";
        }
}

function hideAnswer(num){
   if(num == 1){
       document.getElementById("Answer1").style.display = "none";
       document.getElementById("dpdhideimage1").style.display = "none";
       document.getElementById("dpdshowimage1").style.display = "block";
   }
   else if(num == 2){
       document.getElementById("Answer2").style.display = "none";
       document.getElementById("dpdhideimage2").style.display = "none";
       document.getElementById("dpdshowimage2").style.display = "block";
   }
   else if(num == 3){
       document.getElementById("Answer3").style.display = "none";
       document.getElementById("dpdhideimage3").style.display = "none";
       document.getElementById("dpdshowimage3").style.display = "block";
   }
   else if(num == 4){
       document.getElementById("Answer4").style.display = "none";
       document.getElementById("dpdhideimage4").style.display = "none";
       document.getElementById("dpdshowimage4").style.display = "block";
   }
}

function showUserName(){
    nameofuser = document.getElementById("username").value;
   if(nameofuser){
        document.getElementById("greeting").innerHTML = "Hii, " + nameofuser;
        document.getElementById("user-details-section").style.display = "none";
        document.getElementById("done-section").style.display = "block";
        document.getElementById("givedetails").style.display = "none";
   }
   else{
       document.getElementById("labelname").style.transform = "rotatex(360deg)";
       document.getElementById("labelname").style.transitionProperty = "transform";
       document.getElementById("labelname").style.transitionDuration = "1s";
       document.getElementById("labelcontact").style.transform = "rotatex(360deg)";
       document.getElementById("labelcontact").style.transitionProperty = "transform";
       document.getElementById("labelcontact").style.transitionDuration = "1s";
       document.getElementById("requiredinputname").innerHTML = "(must)";
       document.getElementById("requiredinputcno").innerHTML = "(optional)";
   }
}

function showtest(test){
    if(nameofuser){
        if(test == 1){
            document.getElementById("html-test").style.display = "block";
            document.getElementById("rulesoftest-html").style.display = "block";
        }
        else if(test == 2){
            document.getElementById("css-test").style.display = "block";
            document.getElementById("rulesoftest-css").style.display = "block";
        }
        else if(test == 3){
            document.getElementById("javascript-test").style.display = "block";
            document.getElementById("rulesoftest-javascript").style.display = "block";
        }
        else if(test == 4){
            document.getElementById("clanguage-test").style.display = "block";
            document.getElementById("rulesoftest-clanguage").style.display = "block";
        }
        else if(test == 5){
            document.getElementById("python-test").style.display = "block";
            document.getElementById("rulesoftest-python").style.display = "block";
        }
        else if(test == 6){
            document.getElementById("corejava-test").style.display = "block";
            document.getElementById("rulesoftest-corejava").style.display = "block";
        }
        document.getElementById("homepage-section").style.display = "none";
        document.getElementById("givedetails").style.display = "none";
        document.getElementById("userscore").style.display = "block";
    }
    else{
        if(test == 1)
            window.location.href="#user-details-section";
        else if(test == 2)
            window.location.href="#user-details-section";
        else if(test == 3)
            window.location.href="#user-details-section";
        else if(test == 4)
            window.location.href="#user-details-section";
        else if(test == 5)
            window.location.href="#user-details-section";
        else if(test == 6)
            window.location.href="#user-details-section";        
    }
}
            
function displayTest(num){
   if(num == 1){
       document.getElementById("html-test-mcq").style.display = "block";
       document.getElementById("html-q1").style.display = "block";
       document.getElementById("rulesoftest-html").style.display = "none";
   }
   else if(num == 2){
       document.getElementById("css-test-mcq").style.display = "block";
       document.getElementById("css-q1").style.display = "block";
       document.getElementById("rulesoftest-css").style.display = "none";
   }
   else if(num == 3){
       document.getElementById("javascript-test-mcq").style.display = "block";
       document.getElementById("javascript-q1").style.display = "block";
       document.getElementById("rulesoftest-javascript").style.display = "none";
   }
   else if(num == 4){
       document.getElementById("clanguage-test-mcq").style.display = "block";
       document.getElementById("clanguage-q1").style.display = "block";
       document.getElementById("rulesoftest-clanguage").style.display = "none";
   }
   else if(num == 5){
       document.getElementById("python-test-mcq").style.display = "block";
       document.getElementById("python-q1").style.display = "block";
       document.getElementById("rulesoftest-python").style.display = "none";
   }
   else if(num == 6){
       document.getElementById("corejava-test-mcq").style.display = "block";
       document.getElementById("corejava-q1").style.display = "block";
       document.getElementById("rulesoftest-corejava").style.display = "none";
   }
   
}

function showNextQuestion(test,num){
   if(test == 1){
       if(num == 1){
           if(document.querySelector('input[name="html-q1"]:checked') != null){
                document.getElementById("mcq-question-no-html").innerHTML = "2 / 5";
                document.getElementById("prog-html").value = ++que_count;
                document.getElementById("html-q1").style.display = "none";
                document.getElementById("html-q2").style.display = "block";
                if(document.querySelector('input[name="html-q1"]:checked').value == "opt1" && attempt[0] == 0){
                    score++;
                }
                attempt[0] = 1;
           }
           else{
                document.getElementById("selectoption1-html").style.display = "block";
                document.getElementById("selectoption1-html").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 2){
           if(document.querySelector('input[name="html-q2"]:checked') != null){
                document.getElementById("mcq-question-no-html").innerHTML = "3 / 5";
                document.getElementById("prog-html").value = ++que_count;
                document.getElementById("html-q2").style.display = "none";
                document.getElementById("html-q3").style.display = "block";
                if(document.querySelector('input[name="html-q2"]:checked').value == "opt4" && attempt[1] == 0){
                    score++;
                }
                attempt[1] = 1;
           }
           else{
                document.getElementById("selectoption2-html").style.display = "block";
                document.getElementById("selectoption2-html").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 3){
           if(document.querySelector('input[name="html-q3"]:checked') != null){
                document.getElementById("mcq-question-no-html").innerHTML = "4 / 5";
                document.getElementById("prog-html").value = ++que_count;
                document.getElementById("html-q3").style.display = "none";
                document.getElementById("html-q4").style.display = "block";
                if(document.querySelector('input[name="html-q3"]:checked').value == "opt3" && attempt[2] == 0){
                    score++;
                }
                attempt[2] = 1;
           }
           else{
                document.getElementById("selectoption3-html").style.display = "block";
                document.getElementById("selectoption3-html").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 4){
           if(document.querySelector('input[name="html-q4"]:checked') != null){
                document.getElementById("mcq-question-no-html").innerHTML = "5 / 5";
                document.getElementById("prog-html").value = ++que_count;
                document.getElementById("html-q4").style.display = "none";
                document.getElementById("html-q5").style.display = "block";
                document.getElementById("lasthtmlquestionbtn").style.display = "none";
                document.getElementById("endhtmltestbtn").style.display = "block";
                if(document.querySelector('input[name="html-q4"]:checked').value == "opt3" && attempt[3] == 0){
                    score++;
                }
                attempt[3] = 1;
           }
           else{
                document.getElementById("selectoption4-html").style.display = "block";
                document.getElementById("selectoption4-html").innerHTML = "Please Select An Option";
           }
       }
   }
   else if(test == 2){
       if(num == 1){
           if(document.querySelector('input[name="css-q1"]:checked') != null){
                document.getElementById("mcq-question-no-css").innerHTML = "2 / 5";
                document.getElementById("prog-css").value = ++que_count;
                document.getElementById("css-q1").style.display = "none";
                document.getElementById("css-q2").style.display = "block";
                if(document.querySelector('input[name="css-q1"]:checked').value == "opt4" && attempt[0] == 0){
                    score++;
                }
                attempt[0] = 1;
           }
           else{
                document.getElementById("selectoption1-css").style.display = "block";
                document.getElementById("selectoption1-css").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 2){
           if(document.querySelector('input[name="css-q2"]:checked') != null){
            document.getElementById("mcq-question-no-css").innerHTML = "3 / 5";
            document.getElementById("prog-css").value = ++que_count;
                document.getElementById("css-q2").style.display = "none";
                document.getElementById("css-q3").style.display = "block";
                if(document.querySelector('input[name="css-q2"]:checked').value == "opt2" && attempt[1] == 0){
                    score++;
                }
                attempt[1] = 1;
           }
           else{
                document.getElementById("selectoption2-css").style.display = "block";
                document.getElementById("selectoption2-css").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 3){
           if(document.querySelector('input[name="css-q3"]:checked') != null){
                document.getElementById("mcq-question-no-css").innerHTML = "4 / 5";
                document.getElementById("prog-css").value = ++que_count;
                document.getElementById("css-q3").style.display = "none";
                document.getElementById("css-q4").style.display = "block";
                if(document.querySelector('input[name="css-q3"]:checked').value == "opt4" && attempt[2] == 0){
                    score++;
                }
                attempt[2] = 1;
           }
           else{
                document.getElementById("selectoption3-css").style.display = "block";
                document.getElementById("selectoption3-css").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 4){
           if(document.querySelector('input[name="css-q4"]:checked') != null){
                document.getElementById("mcq-question-no-css").innerHTML = "5 / 5";
                document.getElementById("prog-css").value = ++que_count;
                document.getElementById("css-q4").style.display = "none";
                document.getElementById("css-q5").style.display = "block";
                document.getElementById("lastcssquestionbtn").style.display = "none";
                document.getElementById("endcsstestbtn").style.display = "block";
                if(document.querySelector('input[name="css-q4"]:checked').value == "opt3" && attempt[3] == 0){
                    score++;
                }
                attempt[3] = 1;
           }
           else{
                document.getElementById("selectoption4-css").style.display = "block";
                document.getElementById("selectoption4-css").innerHTML = "Please Select An Option";
           }
       }
   }
   else if(test == 3){
       if(num == 1){
           if(document.querySelector('input[name="javascript-q1"]:checked') != null){
                document.getElementById("mcq-question-no-javascript").innerHTML = "2 / 5";
                document.getElementById("prog-javascript").value = ++que_count;
                document.getElementById("javascript-q1").style.display = "none";
                document.getElementById("javascript-q2").style.display = "block";
                if(document.querySelector('input[name="javascript-q1"]:checked').value == "opt1" && attempt[0] == 0){
                    score++;
                }
                attempt[0] = 1;
           }
           else{
                    document.getElementById("selectoption1-javascript").style.display = "block";
                    document.getElementById("selectoption1-javascript").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 2){
           if(document.querySelector('input[name="javascript-q2"]:checked') != null){
                document.getElementById("mcq-question-no-javascript").innerHTML = "3 / 5";
                document.getElementById("prog-javascript").value = ++que_count;
                document.getElementById("javascript-q2").style.display = "none";
                document.getElementById("javascript-q3").style.display = "block";
                if(document.querySelector('input[name="javascript-q2"]:checked').value == "opt1" && attempt[1] == 0){
                    score++;
                }
                attempt[1] = 1;
           }
           else{
                    document.getElementById("selectoption2-javascript").style.display = "block";
                    document.getElementById("selectoption2-javascript").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 3){
           if(document.querySelector('input[name="javascript-q3"]:checked') != null){
                document.getElementById("mcq-question-no-javascript").innerHTML = "4 / 5";
                document.getElementById("prog-javascript").value = ++que_count;
                document.getElementById("javascript-q3").style.display = "none";
                document.getElementById("javascript-q4").style.display = "block";
                if(document.querySelector('input[name="javascript-q3"]:checked').value == "opt4" && attempt[2] == 0){
                    score++;
                }
                attempt[2] = 1;
           }
           else{
                document.getElementById("selectoption3-javascript").style.display = "block";
                document.getElementById("selectoption3-javascript").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 4){
           if(document.querySelector('input[name="javascript-q4"]:checked') != null){
                document.getElementById("mcq-question-no-javascript").innerHTML = "5 / 5";
                document.getElementById("prog-javascript").value = ++que_count;
                document.getElementById("javascript-q4").style.display = "none";
                document.getElementById("javascript-q5").style.display = "block";
                document.getElementById("lastjavascriptquestionbtn").style.display = "none";
                document.getElementById("endjavascripttestbtn").style.display = "block";
                if(document.querySelector('input[name="javascript-q4"]:checked').value == "opt2" && attempt[3] == 0){
                    score++;
                }
                attempt[3] = 1;
           }
           else{
                document.getElementById("selectoption4-javascript").style.display = "block";
                document.getElementById("selectoption4-javascript").innerHTML = "Please Select An Option";
           }
       }
   }
   else if(test == 4){
       if(num == 1){
           if(document.querySelector('input[name="clanguage-q1"]:checked') != null){
                document.getElementById("mcq-question-no-clanguage").innerHTML = "2 / 5";
                document.getElementById("prog-clanguage").value = ++que_count;
                document.getElementById("clanguage-q1").style.display = "none";
                document.getElementById("clanguage-q2").style.display = "block";
                if(document.querySelector('input[name="clanguage-q1"]:checked').value == "opt4" && attempt[0] == 0){
                    score++;
                }
                attempt[0] = 1;
           }
           else{
                document.getElementById("selectoption1-clanguage").style.display = "block";
                document.getElementById("selectoption1-clanguage").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 2){
           if(document.querySelector('input[name="clanguage-q2"]:checked') != null){
                document.getElementById("mcq-question-no-clanguage").innerHTML = "3 / 5";
                document.getElementById("prog-clanguage").value = ++que_count;
                document.getElementById("clanguage-q2").style.display = "none";
                document.getElementById("clanguage-q3").style.display = "block";
                if(document.querySelector('input[name="clanguage-q2"]:checked').value == "opt2" && attempt[1] == 0){
                    score++;
                }
                attempt[1] = 1;
           }
           else{
                document.getElementById("selectoption2-clanguage").style.display = "block";
                document.getElementById("selectoption2-clanguage").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 3){
           if(document.querySelector('input[name="clanguage-q3"]:checked') != null){
                document.getElementById("mcq-question-no-clanguage").innerHTML = "4 / 5";
                document.getElementById("prog-clanguage").value = ++que_count;
                document.getElementById("clanguage-q3").style.display = "none";
                document.getElementById("clanguage-q4").style.display = "block";
                if(document.querySelector('input[name="clanguage-q3"]:checked').value == "opt4" && attempt[2] == 0){
                    score++;
                }
                attempt[2] = 1;
           }
           else{
                document.getElementById("selectoption3-clanguage").style.display = "block";
                document.getElementById("selectoption3-clanguage").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 4){
           if(document.querySelector('input[name="clanguage-q4"]:checked') != null){
                document.getElementById("mcq-question-no-clanguage").innerHTML = "5 / 5";
                document.getElementById("prog-clanguage").value = ++que_count;
                document.getElementById("clanguage-q4").style.display = "none";
                document.getElementById("clanguage-q5").style.display = "block";
                document.getElementById("lastclanguagequestionbtn").style.display = "none";
                document.getElementById("endclanguagetestbtn").style.display = "block";
                if(document.querySelector('input[name="clanguage-q4"]:checked').value == "opt3" && attempt[3] == 0){
                    score++;
                }
                attempt[3] = 1;
           }
           else{
                document.getElementById("selectoption4-clanguage").style.display = "block";
                document.getElementById("selectoption4-clanguage").innerHTML = "Please Select An Option";
           }
       }

   }
   else if(test == 5){
       if(num == 1){
           if(document.querySelector('input[name="python-q1"]:checked') != null){
                document.getElementById("mcq-question-no-python").innerHTML = "2 / 5";
                document.getElementById("prog-python").value = ++que_count;
                document.getElementById("python-q1").style.display = "none";
                document.getElementById("python-q2").style.display = "block";
                if(document.querySelector('input[name="python-q1"]:checked').value == "opt4" && attempt[0] == 0){
                    score++;
                }
                attempt[0] = 1;
           }
           else{
                document.getElementById("selectoption1-python").style.display = "block";
                document.getElementById("selectoption1-python").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 2){
           if(document.querySelector('input[name="python-q2"]:checked') != null){
                document.getElementById("mcq-question-no-python").innerHTML = "3 / 5";
                document.getElementById("prog-python").value = ++que_count;
                document.getElementById("python-q2").style.display = "none";
                document.getElementById("python-q3").style.display = "block";
                if(document.querySelector('input[name="python-q2"]:checked').value == "opt2" && attempt[1] == 0){
                    score++;
                }
                attempt[1] = 1;
           }
           else{
                document.getElementById("selectoption2-python").style.display = "block";
                document.getElementById("selectoption2-python").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 3){
           if(document.querySelector('input[name="python-q3"]:checked') != null){
                document.getElementById("mcq-question-no-python").innerHTML = "4 / 5";
                document.getElementById("prog-python").value = ++que_count;
                document.getElementById("python-q3").style.display = "none";
                document.getElementById("python-q4").style.display = "block";
                if(document.querySelector('input[name="python-q3"]:checked').value == "opt2" && attempt[2] == 0){
                    score++;
                }
                attempt[2] = 1;
           }
           else{
                document.getElementById("selectoption3-python").style.display = "block";
                document.getElementById("selectoption3-python").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 4){
           if(document.querySelector('input[name="python-q4"]:checked') != null){
                document.getElementById("mcq-question-no-python").innerHTML = "5 / 5";
                document.getElementById("prog-python").value = ++que_count;
                document.getElementById("python-q4").style.display = "none";
                document.getElementById("python-q5").style.display = "block";
                document.getElementById("lastpythonquestionbtn").style.display = "none";
                document.getElementById("endpythontestbtn").style.display = "block";
                if(document.querySelector('input[name="python-q4"]:checked').value == "opt1" && attempt[3] == 0){
                    score++;
                }
                attempt[3] = 1;
           }
           else{
                document.getElementById("selectoption4-python").style.display = "block";
                document.getElementById("selectoption4-python").innerHTML = "Please Select An Option";
           }
       }

   }
   else if(test == 6){
       if(num == 1){
           if(document.querySelector('input[name="corejava-q1"]:checked') != null){
                document.getElementById("mcq-question-no-corejava").innerHTML = "2 / 5";
                document.getElementById("prog-corejava").value = ++que_count;
                document.getElementById("corejava-q1").style.display = "none";
                document.getElementById("corejava-q2").style.display = "block";
                if(document.querySelector('input[name="corejava-q1"]:checked').value == "opt1" && attempt[0] == 0){
                    score++;
                }
                attempt[0] = 1;
           }
           else{
                document.getElementById("selectoption1-corejava").style.display = "block";
                document.getElementById("selectoption1-corejava").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 2){
           if(document.querySelector('input[name="corejava-q2"]:checked') != null){
                document.getElementById("mcq-question-no-corejava").innerHTML = "3 / 5";
                document.getElementById("prog-corejava").value = ++que_count;
                document.getElementById("corejava-q2").style.display = "none";
                document.getElementById("corejava-q3").style.display = "block";
                if(document.querySelector('input[name="corejava-q2"]:checked').value == "opt1" && attempt[1] == 0){
                    score++;
                }
                attempt[1] = 1;
           }
           else{
                document.getElementById("selectoption2-corejava").style.display = "block";
                document.getElementById("selectoption2-corejava").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 3){
           if(document.querySelector('input[name="corejava-q3"]:checked') != null){
                document.getElementById("mcq-question-no-corejava").innerHTML = "4 / 5";
                document.getElementById("prog-corejava").value = ++que_count;
                document.getElementById("corejava-q3").style.display = "none";
                document.getElementById("corejava-q4").style.display = "block";
                if(document.querySelector('input[name="corejava-q3"]:checked').value == "opt2" && attempt[2] == 0){
                    score++;
                }
                attempt[2] = 1;
           }
           else{
                document.getElementById("selectoption3-corejava").style.display = "block";
                document.getElementById("selectoption3-corejava").innerHTML = "Please Select An Option";
           }
       }
       else if(num == 4){
           if(document.querySelector('input[name="corejava-q4"]:checked') != null){
                document.getElementById("mcq-question-no-corejava").innerHTML = "5 / 5";
                document.getElementById("prog-corejava").value = ++que_count;
                document.getElementById("corejava-q4").style.display = "none";
                document.getElementById("corejava-q5").style.display = "block";
                document.getElementById("lastcorejavaquestionbtn").style.display = "none";
                document.getElementById("endcorejavatestbtn").style.display = "block";
                if(document.querySelector('input[name="corejava-q4"]:checked').value == "opt2" && attempt[3] == 0){
                    score++;
                }
                attempt[3] = 1;
           }
           else{
                document.getElementById("selectoption4-corejava").style.display = "block";
                document.getElementById("selectoption4-corejava").innerHTML = "Please Select An Option";
           }
       }

   }
   document.getElementById("userscore").innerHTML = "Score : " + score;
}

function showPreviousQuestion(test,num){
   if(test == 1){
       if(num == 1){
           return;
       }
       else if(num == 2){
           document.getElementById("mcq-question-no-html").innerHTML = "1 / 5";
           document.getElementById("html-q2").style.display = "none";
           document.getElementById("html-q1").style.display = "block";
       }
       else if(num == 3){
           document.getElementById("mcq-question-no-html").innerHTML = "2 / 5";
           document.getElementById("html-q3").style.display = "none";
           document.getElementById("html-q2").style.display = "block";
       }
       else if(num == 4){
           document.getElementById("mcq-question-no-html").innerHTML = "3 / 5";
           document.getElementById("html-q4").style.display = "none";
           document.getElementById("html-q3").style.display = "block";
       }
       else if(num == 5){
           document.getElementById("mcq-question-no-html").innerHTML = "4 / 5";
           document.getElementById("html-q5").style.display = "none";
           document.getElementById("html-q4").style.display = "block";
       }
   }
   else if(test == 2){
       if(num == 1){
           return;
       }
       else if(num == 2){
           document.getElementById("mcq-question-no-css").innerHTML = "1 / 5";
           document.getElementById("css-q2").style.display = "none";
           document.getElementById("css-q1").style.display = "block";
       }
       else if(num == 3){
           document.getElementById("mcq-question-no-css").innerHTML = "2 / 5";
           document.getElementById("css-q3").style.display = "none";
           document.getElementById("css-q2").style.display = "block";
       }
       else if(num == 4){
           document.getElementById("mcq-question-no-css").innerHTML = "3 / 5";
           document.getElementById("css-q4").style.display = "none";
           document.getElementById("css-q3").style.display = "block";
       }
       else if(num == 5){
           document.getElementById("mcq-question-no-css").innerHTML = "4 / 5";
           document.getElementById("css-q5").style.display = "none";
           document.getElementById("css-q4").style.display = "block";
       }
   }
   else if(test == 3){
       if(num == 1){
           return;
       }
       else if(num == 2){
           document.getElementById("mcq-question-no-javascript").innerHTML = "1 / 5";
           document.getElementById("javascript-q2").style.display = "none";
           document.getElementById("javascript-q1").style.display = "block";
       }
       else if(num == 3){
           document.getElementById("mcq-question-no-javascript").innerHTML = "2 / 5";
           document.getElementById("javascript-q3").style.display = "none";
           document.getElementById("javascript-q2").style.display = "block";
       }
       else if(num == 4){
           document.getElementById("mcq-question-no-javascript").innerHTML = "3 / 5";
           document.getElementById("javascript-q4").style.display = "none";
           document.getElementById("javascript-q3").style.display = "block";
       }
       else if(num == 5){
           document.getElementById("mcq-question-no-javascript").innerHTML = "4 / 5";
           document.getElementById("javascript-q5").style.display = "none";
           document.getElementById("javascript-q4").style.display = "block";
       }
   }
   else if(test == 4){
       if(num == 1){
           return;
       }
       else if(num == 2){
           document.getElementById("mcq-question-no-clanguage").innerHTML = "1 / 5";
           document.getElementById("clanguage-q2").style.display = "none";
           document.getElementById("clanguage-q1").style.display = "block";
       }
       else if(num == 3){
           document.getElementById("mcq-question-no-clanguage").innerHTML = "2 / 5";
           document.getElementById("clanguage-q3").style.display = "none";
           document.getElementById("clanguage-q2").style.display = "block";
       }
       else if(num == 4){
           document.getElementById("mcq-question-no-clanguage").innerHTML = "3 / 5";
           document.getElementById("clanguage-q4").style.display = "none";
           document.getElementById("clanguage-q3").style.display = "block";
       }
       else if(num == 5){
           document.getElementById("mcq-question-no-clanguage").innerHTML = "4 / 5";
           document.getElementById("clanguage-q5").style.display = "none";
           document.getElementById("clanguage-q4").style.display = "block";
       }
   }
   else if(test == 5){
       if(num == 1){
           return;
       }
       else if(num == 2){
           document.getElementById("mcq-question-no-python").innerHTML = "1 / 5";
           document.getElementById("python-q2").style.display = "none";
           document.getElementById("python-q1").style.display = "block";
       }
       else if(num == 3){
           document.getElementById("mcq-question-no-python").innerHTML = "2 / 5";
           document.getElementById("python-q3").style.display = "none";
           document.getElementById("python-q2").style.display = "block";
       }
       else if(num == 4){
           document.getElementById("mcq-question-no-python").innerHTML = "3 / 5";
           document.getElementById("python-q4").style.display = "none";
           document.getElementById("python-q3").style.display = "block";
       }
       else if(num == 5){
           document.getElementById("mcq-question-no-python").innerHTML = "4 / 5";
           document.getElementById("python-q5").style.display = "none";
           document.getElementById("python-q4").style.display = "block";
       }
   }
   else if(test == 6){
       if(num == 1){
           return;
       }
       else if(num == 2){
           document.getElementById("mcq-question-no-corejava").innerHTML = "1 / 5";
           document.getElementById("corejava-q2").style.display = "none";
           document.getElementById("corejava-q1").style.display = "block";
       }
       else if(num == 3){
           document.getElementById("mcq-question-no-corejava").innerHTML = "2 / 5";
           document.getElementById("corejava-q3").style.display = "none";
           document.getElementById("corejava-q2").style.display = "block";
       }
       else if(num == 4){
           document.getElementById("mcq-question-no-corejava").innerHTML = "3 / 5";
           document.getElementById("corejava-q4").style.display = "none";
           document.getElementById("corejava-q3").style.display = "block";
       }
       else if(num == 5){
           document.getElementById("mcq-question-no-corejava").innerHTML = "4 / 5";
           document.getElementById("corejava-q5").style.display = "none";
           document.getElementById("corejava-q4").style.display = "block";
       }
   }
}

function endTest(test){
    que_count = 0;
   if(test == 1){
       if(document.querySelector('input[name="html-q5"]:checked') != null){
           document.getElementById("html-test-mcq").style.display = "none";
           document.getElementById("end-test-html").style.display = "block";
           document.getElementById("prog-html").value = que_count;
           document.getElementById("mcq-question-no-html").innerHTML = "1 / 5";
            if(document.querySelector('input[name="html-q5"]:checked').value == "opt2" && attempt[4] == 0){
                score++;
            }
            attempt[4] = 1;
       }
       else{
           document.getElementById("selectoption5-html").style.display = "block";
           document.getElementById("selectoption5-html").innerHTML = "Please Select An Option";
       }
       if(score <= 2){
           document.getElementById("showuserstatus-html").innerHTML = " Need Practice";
       }
       else if(score <= 4){
           document.getElementById("showuserstatus-html").innerHTML = " Well Tried";
       }
       else if(score == 5){
           document.getElementById("showuserstatus-html").innerHTML = " Excellent";
       }
       document.getElementById("correct-html").innerHTML = score;
       document.getElementById("incorrect-html").innerHTML = (max_question - score);
       document.getElementById("showusername-html").innerHTML = nameofuser;
   }
   else if(test == 2){
       if(document.querySelector('input[name="css-q5"]:checked') != null){
           document.getElementById("css-test-mcq").style.display = "none";
           document.getElementById("end-test-css").style.display = "block";
           document.getElementById("prog-css").value = que_count;
           document.getElementById("mcq-question-no-css").innerHTML = "1 / 5";
            if(document.querySelector('input[name="css-q5"]:checked').value == "opt4" && attempt[4] == 0){
                score++;
            }
            attempt[4] = 1;
       }
       else{
           document.getElementById("selectoption5-css").style.display = "block";
           document.getElementById("selectoption5-css").innerHTML = "Please Select An Option";
       }
       if(score <= 2){
           document.getElementById("showuserstatus-css").innerHTML = " Need Practice";
       }
       else if(score <= 4){
           document.getElementById("showuserstatus-css").innerHTML = " Well Tried";
       }
       else if(score == 5){
           document.getElementById("showuserstatus-css").innerHTML = " Excellent";
       }
       document.getElementById("correct-css").innerHTML = score;
       document.getElementById("incorrect-css").innerHTML = (max_question - score);
       document.getElementById("showusername-css").innerHTML = nameofuser;

   }
   else if(test == 3){
       if(document.querySelector('input[name="javascript-q5"]:checked') != null){
           document.getElementById("javascript-test-mcq").style.display = "none";
           document.getElementById("end-test-javascript").style.display = "block";
           document.getElementById("prog-javascript").value = que_count;
           document.getElementById("mcq-question-no-javascript").innerHTML = "1 / 5";
            if(document.querySelector('input[name="javascript-q5"]:checked').value == "opt1" && attempt[4] == 0){
                score++;
            }
            attempt[4] = 1;
       }
       else{
           document.getElementById("selectoption5-javascript").style.display = "block";
           document.getElementById("selectoption5-javascript").innerHTML = "Please Select An Option";
       }
       if(score <= 2){
           document.getElementById("showuserstatus-javascript").innerHTML = " Need Practice";
       }
       else if(score <= 4){
           document.getElementById("showuserstatus-javascript").innerHTML = " Well Tried";
       }
       else if(score == 5){
           document.getElementById("showuserstatus-javascript").innerHTML = " Excellent";
       }
       document.getElementById("correct-javascript").innerHTML = score;
       document.getElementById("incorrect-javascript").innerHTML = (max_question - score);
       document.getElementById("showusername-javascript").innerHTML = nameofuser;
   }
   else if(test == 4){
       if(document.querySelector('input[name="clanguage-q5"]:checked') != null){
           document.getElementById("clanguage-test-mcq").style.display = "none";
           document.getElementById("end-test-clanguage").style.display = "block";
           document.getElementById("prog-clanguage").value = que_count;
           document.getElementById("mcq-question-no-clanguage").innerHTML = "1 / 5";
            if(document.querySelector('input[name="clanguage-q5"]:checked').value == "opt2" && attempt[4] == 0){
                score++;
            }
            attempt[4] = 1;
       }
       else{
           document.getElementById("selectoption5-clanguage").style.display = "block";
           document.getElementById("selectoption5-clanguage").innerHTML = "Please Select An Option";
       }
       if(score <= 2){
           document.getElementById("showuserstatus-clanguage").innerHTML = " Need Practice";
       }
       else if(score <= 4){
           document.getElementById("showuserstatus-clanguage").innerHTML = " Well Tried";
       }
       else if(score == 5){
           document.getElementById("showuserstatus-clanguage").innerHTML = " Excellent";
       }
       document.getElementById("correct-clanguage").innerHTML = score;
       document.getElementById("incorrect-clanguage").innerHTML = (max_question - score);
       document.getElementById("showusername-clanguage").innerHTML = nameofuser;
   }
   else if(test == 5){
       if(document.querySelector('input[name="python-q5"]:checked') != null){
           document.getElementById("python-test-mcq").style.display = "none";
           document.getElementById("end-test-python").style.display = "block";
           document.getElementById("prog-python").value = que_count;
           document.getElementById("mcq-question-no-python").innerHTML = "1 / 5";
            if(document.querySelector('input[name="python-q5"]:checked').value == "opt1" && attempt[4] == 0){
                score++;
            }
            attempt[4] = 1;
       }
       else{
           document.getElementById("selectoption5-python").style.display = "block";
           document.getElementById("selectoption5-python").innerHTML = "Please Select An Option";
       }
       if(score <= 2){
           document.getElementById("showuserstatus-python").innerHTML = " Need Practice";
       }
       else if(score <= 4){
           document.getElementById("showuserstatus-python").innerHTML = " Good"
       }
       else if(score == 5){
           document.getElementById("showuserstatus-python").innerHTML = " Excellent";
       }
       document.getElementById("correct-python").innerHTML = score;
       document.getElementById("incorrect-python").innerHTML = (max_question - score);
       document.getElementById("showusername-python").innerHTML = nameofuser;
   }
   else if(test == 6){
       if(document.querySelector('input[name="corejava-q5"]:checked') != null){
           document.getElementById("corejava-test-mcq").style.display = "none";
           document.getElementById("end-test-corejava").style.display = "block";
           document.getElementById("prog-corejava").value = que_count;
           document.getElementById("mcq-question-no-corejava").innerHTML = "1 / 5";
            if(document.querySelector('input[name="corejava-q5"]:checked').value == "opt3" && attempt[4] == 0){
                score++;
            }
            attempt[4] = 1;
       }
       else{
           document.getElementById("selectoption5-corejava").style.display = "block";
           document.getElementById("selectoption5-corejava").innerHTML = "Please Select An Option";
       }
       if(score <= 2){
           document.getElementById("showuserstatus-corejava").innerHTML = " Need Practice";
       }
       else if(score <= 4){
           document.getElementById("showuserstatus-corejava").innerHTML = " Good"
       }
       else if(score == 5){
           document.getElementById("showuserstatus-corejava").innerHTML = " Excellent";
       }
       document.getElementById("correct-corejava").innerHTML = score;
       document.getElementById("incorrect-corejava").innerHTML = (max_question - score);
       document.getElementById("showusername-corejava").innerHTML = nameofuser;
   }
   document.getElementById("userscore").innerHTML = "Score : " + score;           
}

function goToHome(test){
   score = 0;
   attempt = [0,0,0,0,0]
   document.getElementById("homepage-section").style.display = "block";
   document.getElementById("userscore").style.display = "none";
   document.getElementById("userscore").innerHTML = "Score : " + score;

    if(test == 1){
        document.querySelector('input[name="html-q1"]:checked').checked = false;
        document.querySelector('input[name="html-q2"]:checked').checked = false;
        document.querySelector('input[name="html-q3"]:checked').checked = false;
        document.querySelector('input[name="html-q4"]:checked').checked = false;
        document.querySelector('input[name="html-q5"]:checked').checked = false;
        document.getElementById("html-q5").style.display = "none";
        document.getElementById("end-test-html").style.display = "none";

        document.getElementById("selectoption1-html").style.display = "none";
        document.getElementById("selectoption2-html").style.display = "none";
        document.getElementById("selectoption3-html").style.display = "none";
        document.getElementById("selectoption4-html").style.display = "none";
        document.getElementById("selectoption5-html").style.display = "none";
    }
    else if(test == 2){
        document.querySelector('input[name="css-q1"]:checked').checked = false;
        document.querySelector('input[name="css-q2"]:checked').checked = false;
        document.querySelector('input[name="css-q3"]:checked').checked = false;
        document.querySelector('input[name="css-q4"]:checked').checked = false;
        document.querySelector('input[name="css-q5"]:checked').checked = false;
        document.getElementById("css-q5").style.display = "none";
        document.getElementById("end-test-css").style.display = "none";

        document.getElementById("selectoption1-css").style.display = "none";
        document.getElementById("selectoption2-css").style.display = "none";
        document.getElementById("selectoption3-css").style.display = "none";
        document.getElementById("selectoption4-css").style.display = "none";
        document.getElementById("selectoption5-css").style.display = "none";
    }
    else if(test == 3){
        document.querySelector('input[name="javascript-q1"]:checked').checked = false;
        document.querySelector('input[name="javascript-q2"]:checked').checked = false;
        document.querySelector('input[name="javascript-q3"]:checked').checked = false;
        document.querySelector('input[name="javascript-q4"]:checked').checked = false;
        document.querySelector('input[name="javascript-q5"]:checked').checked = false;
        document.getElementById("javascript-q5").style.display = "none";
        document.getElementById("end-test-javascript").style.display = "none";

        document.getElementById("selectoption1-javascript").style.display = "none";
        document.getElementById("selectoption2-javascript").style.display = "none";
        document.getElementById("selectoption3-javascript").style.display = "none";
        document.getElementById("selectoption4-javascript").style.display = "none";
        document.getElementById("selectoption5-javascript").style.display = "none";
    }
    else if(test == 4){
        document.querySelector('input[name="clanguage-q1"]:checked').checked = false;
        document.querySelector('input[name="clanguage-q2"]:checked').checked = false;
        document.querySelector('input[name="clanguage-q3"]:checked').checked = false;
        document.querySelector('input[name="clanguage-q4"]:checked').checked = false;
        document.querySelector('input[name="clanguage-q5"]:checked').checked = false;
        document.getElementById("clanguage-q5").style.display = "none";
        document.getElementById("end-test-clanguage").style.display = "none";

        document.getElementById("selectoption1-clanguage").style.display = "none";
        document.getElementById("selectoption2-clanguage").style.display = "none";
        document.getElementById("selectoption3-clanguage").style.display = "none";
        document.getElementById("selectoption4-clanguage").style.display = "none";
        document.getElementById("selectoption5-clanguage").style.display = "none";
    }
    else if(test == 5){
        document.querySelector('input[name="python-q1"]:checked').checked = false;
        document.querySelector('input[name="python-q2"]:checked').checked = false;
        document.querySelector('input[name="python-q3"]:checked').checked = false;
        document.querySelector('input[name="python-q4"]:checked').checked = false;
        document.querySelector('input[name="python-q5"]:checked').checked = false;
        document.getElementById("python-q5").style.display = "none";
        document.getElementById("end-test-python").style.display = "none";

        document.getElementById("selectoption1-python").style.display = "none";
        document.getElementById("selectoption2-python").style.display = "none";
        document.getElementById("selectoption3-python").style.display = "none";
        document.getElementById("selectoption4-python").style.display = "none";
        document.getElementById("selectoption5-python").style.display = "none";
    }
    else if(test == 6){
        document.querySelector('input[name="corejava-q2"]:checked').checked = false;
        document.querySelector('input[name="corejava-q1"]:checked').checked = false;
        document.querySelector('input[name="corejava-q3"]:checked').checked = false;
        document.querySelector('input[name="corejava-q4"]:checked').checked = false;
        document.querySelector('input[name="corejava-q5"]:checked').checked = false;
        document.getElementById("corejava-q5").style.display = "none";
        document.getElementById("end-test-corejava").style.display = "none";

        document.getElementById("selectoption1-corejava").style.display = "none";
        document.getElementById("selectoption2-corejava").style.display = "none";
        document.getElementById("selectoption3-corejava").style.display = "none";
        document.getElementById("selectoption4-corejava").style.display = "none";
        document.getElementById("selectoption5-corejava").style.display = "none";
    } 
}