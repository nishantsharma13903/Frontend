box_fill = [0,0,0,0,0,0,0,0,0];
cw = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
player = 0;
bool = true;

function displayOX(box){

    if(bool){
        if(box == 1 && box_fill[0] == 0){
            if(player%2 == 0){
                document.getElementById("b1-player1").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 2";
                cw[0] = 0;
            }
            else{
                document.getElementById("b1-player2").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 1";
                cw[0] = 1;
            }
            box_fill[0] = 1;
            player++;
        }
        else if(box == 2 && box_fill[1] == 0){
            if(player%2 == 0){
                document.getElementById("b2-player1").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 2";
                cw[1] = 0;
            }
            else{
                document.getElementById("b2-player2").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 1";
                cw[1] = 1;
            }
            box_fill[1] = 1;
            player++;
        }
        else if(box == 3 && box_fill[2] == 0){
            if(player%2 == 0){
                document.getElementById("b3-player1").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 2";
                cw[2] = 0;
            }
            else{
                document.getElementById("b3-player2").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 1";
                cw[2] = 1;
            }
            box_fill[2] = 1;
            player++;
        }
        else if(box == 4 && box_fill[3] == 0){
            if(player%2 == 0){
                document.getElementById("b4-player1").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 2";
                cw[3] = 0;
            }
            else{
                document.getElementById("b4-player2").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 1";
                cw[3] = 1;
            }
            box_fill[3] = 1;
            player++;
        }
        else if(box == 5 && box_fill[4] == 0){
            if(player%2 == 0){
                document.getElementById("b5-player1").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 2";
                cw[4] = 0;
            }
            else{
                document.getElementById("b5-player2").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 1";
                cw[4] = 1;
            }
            box_fill[4] = 1;
            player++;
        }
        else if(box == 6 && box_fill[5] == 0){
            if(player%2 == 0){
                document.getElementById("b6-player1").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 2";
                cw[5] = 0;
            }
            else{
                document.getElementById("b6-player2").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 1";
                cw[5] = 1;
            }
            box_fill[5] = 1;
            player++;
        }
        else if(box == 7 && box_fill[6] == 0){
            if(player%2 == 0){
                document.getElementById("b7-player1").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 2";
                cw[6] = 0;
            }
            else{
                document.getElementById("b7-player2").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 1";
                cw[6] = 1;
            }
            box_fill[6] = 1;
            player++;
        }
        else if(box == 8 && box_fill[7] == 0){
            if(player%2 == 0){
                document.getElementById("b8-player1").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 2";
                cw[7] = 0;
            }
            else{
                document.getElementById("b8-player2").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 1";
                cw[7] = 1;
            }
            box_fill[7] = 1;
            player++;
        }
        else if(box == 9 && box_fill[8] == 0){
            if(player%2 == 0){
                document.getElementById("b9-player1").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 2";
                cw[8] = 0;
            }
            else{
                document.getElementById("b9-player2").style.display = "block";
                document.getElementById("whowin").innerHTML = "Turn - Player 1";
                cw[8] = 1;
            }
            box_fill[8] = 1;
            player++;
        }
                
        checkWin();
    }

    if(player == 9 && bool){
        document.getElementById("whowin").innerHTML = "Draw";
    }
}

function checkWin(){
    check_hor_p1 = (cw[0]==0 && cw[1]==0 && cw[2]==0) || (cw[3]==0 && cw[4]==0 && cw[5]==0) || (cw[6]==0 && cw[7]==0 && cw[8]==0)
    check_ver_p1 = (cw[0]==0 && cw[3]==0 && cw[6]==0) || (cw[1]==0 && cw[4]==0 && cw[7]==0) || (cw[2]==0 && cw[5]==0 && cw[8]==0)
    check_main_dia_p1 = (cw[0]==0 && cw[4]==0 && cw[8]==0)
    check_other_dia_p1 = (cw[2]==0 && cw[4]==0 && cw[6]==0)

    check_hor_p2 = (cw[0]==1 && cw[1]==1 && cw[2]==1) || (cw[3]==1 && cw[4]==1 && cw[5]==1) || (cw[6]==1 && cw[7]==1 && cw[8]==1)
    check_ver_p2 = (cw[0]==1 && cw[3]==1 && cw[6]==1) || (cw[1]==1 && cw[4]==1 && cw[7]==1) || (cw[2]==1 && cw[5]==1 && cw[8]==1)
    check_main_dia_p2 = (cw[0]==1 && cw[4]==1 && cw[8]==1)
    check_other_dia_p2 = (cw[2]==1 && cw[4]==1 && cw[6]==1)

    if(check_hor_p1 || check_ver_p1 || check_main_dia_p1 || check_other_dia_p1){
        winner = player % 2 ;
        bool = false;
        console.log("Player " + winner + " wins");
        document.getElementById("whowin").innerHTML = "Player " + winner + " wins";
    }

    if(check_hor_p2 || check_ver_p2 || check_main_dia_p2 || check_other_dia_p2){
        winner = player % 2 + 2;
        bool = false;
        console.log("Player " + winner + " wins");
        document.getElementById("whowin").innerHTML = "Player " + winner + " wins";
    }
}
