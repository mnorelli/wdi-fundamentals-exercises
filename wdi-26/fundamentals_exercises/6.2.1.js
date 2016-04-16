var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];

function setSquare(player, row, col) {
    checkerboard[row][col]=player;
}

function getPieceAt(row, col) {
    return checkerboard[row][col];
}

function clearBoard() {
    function nullIt() {
        return null;
    }
   for (row=0;row<8;row+=1) {
       checkerboard[row]=checkerboard[row].map(nullIt);
   }
}

function setRow(player,row,x) {   
    //set x to 0 for setting even columns
    //set x to 1 for setting odd columns
    for (col=x;col<8;col+=2) {
       checkerboard[row][col]=player;
   }
}

function setUpBlack() {
    setRow("B",5,1);
    setRow("B",6,0);
    setRow("B",7,1);
}

function setUpRed() {
    setRow("R",0,0);
    setRow("R",1,1);
    setRow("R",2,0);
}

clearBoard();
setUpRed();
setUpBlack();
checkerboard;





