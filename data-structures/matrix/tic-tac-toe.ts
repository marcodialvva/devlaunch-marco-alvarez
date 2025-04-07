import PromptSync from 'prompt-sync';
const Prompt = PromptSync();

type Cell = 'X' | 'O' | null;
type Player = 'X' | 'O'| null;

class TicTacToe {
    private board: Cell[][];
    private isWinner: boolean;

 
    constructor() {
        this.board = [
            [ null, null, null ],
            [ null, null , null],
            [ null, null , null],
        ];
        this.isWinner = false;
  
    }

    public makeMove(row: number, col: number, player: Player): boolean {
        if (this.board[row][col] === null) {
            this.board[row][col] = player;
            return true
        }
        return false;
    }

    public printBoard(): void {
        for (let i = 0; i < 3; i++) {
            let row = ""; 
            for (let j = 0; j < 3; j++) {
                row += (this.board[i][j] ?? ' ') + "|"; 
            }
            console.log(row); 
        }

    }
    private checkWinner(): Player  {
        const winningCombinations = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
        
   
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
        

            [[0,0], [1, 1], [2, 2]],
            [[0,2], [1, 1], [2, 0]],
    ]

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            const [rowA, colA] = a;
            const [rowB, colB] = b;
            const [rowC, colC] = c;
    
      
            if (this.board[rowA][colA] && 
                this.board[rowA][colA] === this.board[rowB][colB] && 
                this.board[rowA][colA] === this.board[rowC][colC]) {
                return this.board[rowA][colA]; 
            }
        }
        return null; 

    }
    public start() {
        let currentPlayer: Player = 'X';
        let moves = 0;

        while (moves < 9) {
            this.printBoard();
            const row = parseInt(Prompt(`Jugador ${currentPlayer}, ingresa la fila (0, 1, 2):`));
            const col = parseInt(Prompt(`Jugador ${currentPlayer}, ingresa la columna (0, 1, 2):`));
            
            if (this.makeMove(row, col, currentPlayer)) {
                moves++;
                const winner = this.checkWinner();
                if (winner) {
                    this.printBoard();
                    console.log(`¡Jugador ${winner} gana!`);
                    return;
                }
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Cambiar de jugador
            } else {
                console.log('Movimiento inválido, intenta de nuevo.');
            }
        }
        this.printBoard();
        console.log('¡Es un empate!');
    }

    }


function main() {
    const game = new TicTacToe();
    game.start();
}

main();