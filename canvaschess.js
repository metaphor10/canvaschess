var numberOfSquares=8;
var sizeOfSquare=Math.round(window.innerHeight/numberOfSquares);
function drawBoard()
{
	var colorOfSquare=new Boolean();
	colorOfSquare=true;
	 var ctx = document.getElementById('myCanvas').getContext('2d');
	 document.getElementById('myCanvas').width=window.innerHeight
	 document.getElementById('myCanvas').height=window.innerHeight
	 ctx.fillStyle="#FF0000";
  for (var y=0;y<numberOfSquares;y++)
  {
  	if (y % 2 == 0 )
  	{
  		
  		colorOfSqaure=true;
  		
  	}else 
  	{
  		console.log("red" );
  		colorOfSquare=false;
  	}	
  	
  	for (var x=0;x<numberOfSquares;x++)
  	{
  		console.log(colorOfSquare);
  		if (colorOfSquare)
  		{
  			ctx.fillRect(Math.round(y*sizeOfSquare),Math.round(x*sizeOfSquare),sizeOfSquare,sizeOfSquare);
  			colorOfSquare=false;
  		}else
  		{
  			colorOfSquare=true;
  		}
  		
  	}
  	colorOfSquare=true;
  }
  
  
	
	/*ctx.canvas.width  = window.innerWidth;
  	ctx.canvas.height = window.innerHeight;
  	var colorOfSquare = new Boolean();
  	colorOfSquare=false;*/
  	
  	/*
  	positions[0][0] = new Rook(colorOfPiece1);
  	positions[0][1] = new Bishop(colorOfPiece1);
  	positions[0][2] = new Knight(colorOfPiece1);
  	positions[0][3] = new Queen(colorOfPiece1);
  	positions[3][4] = new King(colorOfPiece1);
  	positions[0][5] = new Knight(colorOfPiece1);
  	positions[3][6] = new Bishop(colorOfPiece1);
  	positions[0][7] = new Rook(colorOfPiece1);
  
  	for (var i=0;i<numberOfSquares;i++)
  	{
  		 
  		positions[1][i] = new Pawn (colorOfPiece1);
  		
  		
  		positions[6][i] = new Pawn (!colorOfPiece1);
  	}
  	positions[7][0] = new Rook(!colorOfPiece1);
  	positions[7][1] = new Bishop(!colorOfPiece1);
  	positions[7][2] = new Knight(!colorOfPiece1);
  	positions[7][3] = new Queen(!colorOfPiece1);
  	positions[7][4] = new King(!colorOfPiece1);
  	positions[7][5] = new Knight(!colorOfPiece1);
  	positions[7][6] = new Bishop(!colorOfPiece1);
  	positions[7][7] = new Rook(!colorOfPiece1); */
 /* 	for (var numberOfRows=0;numberOfRows<numberOfSquares;numberOfRows++)
  {
  	
  	
  	if ((numberOfRows % 2) == 0 )
  	{
  		
  		colorOfSqaure=false;
  		
  	}else 
  	{
  		
  		colorOfSquare=true;
  	}	
  	
  	for (var locationInRow=0;locationInRow<numberOfSquares;locationInRow++)
  	{
  		
  		if (colorOfSquare==true)
  		{
  			console.log('white');
  			ctx.fillStyle="#FF0000";
  			
  			ctx.fillRect(numberOfRows*sizeOfSquare,locationInRow*sizeOfSquare,sizeOfSquare,sizeOfSquare);
  			colorOfSquare=false;
  		}else
  		{
  			
  			ctx.fillStyle="#000000";
  			ctx.fillRect(numberOfRows*sizeOfSquare,locationInRow*sizeOfSquare,sizeOfSquare,sizeOfSquare);
  			colorOfSqaure=true;
  		}
  			
  	}
  		colorOfSqaure=false;
  	}*/
 
}
