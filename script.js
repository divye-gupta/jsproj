// 
// let board =['0', '1', '2', '3', '4' , '5', '6', '7', '8', '9'];


// // Initialize a fuction for checking winning condition

//      function checkWin(){
//       //   Horizontal conditions
//         if(board[1]==board[2] && board[2]==board[3]){
//            return 1;
//         }
//         else if(board[4]==board[5] && board[5]==board[6]){
//            return 1;
//         }
//         else if(board[7]==board[8] && board[8]==board[9]){
//            return 1;
//         }
//       //   Vertical Conditions
//         else if(board[1]==board[4] && board[4]==board[7]){
//            return 1;
//         }
//         else if(board[2]==board[5] && board[5]==board[8]){
//            return 1;
//         }
//         else if(board[3]==board[6] && board[6]==board[9]){
//            return 1;
//         }
//       //   Diagonal Conditions
//         else if(board[1]==board[5] && board[5]==board[9]){
//            return 1;
//         }
//         else if(board[3]==board[5] && board[5]==board[7]){
//            return 1;
//         }
//       //   Check if any position is empty
//         else if (board[1]!='1' && board[2]!='2' && board[3]!='3' && board[4]!='4' && board[5]!='5' && board[6]!='6' && board[7]!='7' && board[8]!='8' && board[9]!='9')
//         {
//            return 0;
//         }
//       //   Game is still on
//         else{
//            return -1;
//         }
        
//      }

// // Initialize a function for drawing the board

//      function drawBoard(){
//         system("clear");
//         console.log("\n\n Tic Tac Toe \n\n");
//         console.log("Player 1-(X) |  Player 2-(O)\n");
//         console.log("    |    |    \n");
//         console.log(" %c  | %c  | %c   \n", board[1], board[2], board[3]);
//         console.log("____|____|____\n");
//         console.log("    |    |    \n");
//         console.log(" %c  | %c  | %c  \n", board[4], board[5], board[6]);
//         console.log("____|____|____\n");
//         console.log("    |    |    \n");
//         console.log(" %c  | %c  | %c  \n", board[7], board[8], board[9]);
//         console.log("    |    |    \n");
//      }

//     let i/*checks continuity of game*/, player=1, choice;
//     let mark; // X or O

//    //  loop for executing same game repeatedly.
//      do  
//      {
//         drawBoard();
//         player = (player%2)?1:2;
//         console.log(Player `${player}` Enter your board square choice:);
//         choice = prompt(Player `${player}` Enter your board square choice:);
//         mark= (player==1)?'X': 'O';

//       //   check choice and fill the position entered by the user
//         if(choice==1 && board[1]=='1'){
//            board[1]=mark;
//         }
//         else if(choice==2 && board[2]=='2'){
//            board[2]=mark;
//         }
//         else if(choice==3 && board[3]=='3'){
//            board[3]=mark;
//         }
//         else if(choice==4 && board[4]=='4'){
//            board[4]=mark;
//         }
//         else if(choice==5 && board[5]=='5'){
//            board[5]=mark;
//         }
//         else if(choice==6 && board[6]=='6'){
//            board[6]=mark;
//         }
//         else if(choice==7 && board[7]=='7'){
//            board[7]=mark;
//         }
//         else if(choice==8 && board[8]=='8'){
//            board[8]=mark;
//         }
//         else if(choice==9 && board[9]=='9'){
//            board[9]=mark;
//         }
//         else{
//             console.log("Error! Invalid Option!");
//            player--;
//         }
//          // Check whether game should be continued
//         i=checkWin();
//         player++;
//      } while (i == -1);

//      if(i==1){
//         console.log("Player %d has won.😎", --player);
//      } else if(i==0){
//         console.log("The game is draw."); 
//      }
// } 
let counting = (a,b,c)=>{
  console.log(`${a} : ${b} : ${c}`)
};

let a=00, b=00, c=00;

  for(let k=0; k<60; k++){

   for(let j=0; j<60; j++){
    
   for(let i=0; i<60; i++){
      setTimeout(counting, 1000);
   }
   c=0;
   b++;
   console.log(`${a} : ${b} : ${c}`);
  }

  a++;
  console.log(`${a} : ${b} : ${c}`);
}