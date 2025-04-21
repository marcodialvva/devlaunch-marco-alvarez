import PromptSync from 'prompt-sync';
const Prompt = PromptSync();


class Card {
    symbol: string
    isRevealed: boolean;
    constructor(symbol: string) {
        this.symbol = symbol;
        this.isRevealed = false;
    }
}

class Memory {
    private symbols: string[];
    private board: Card[][];
    private size: number;
    isRevealed: boolean;

    constructor(size: number) {
        if (size % 2 !== 0) {
            throw new Error("El tamaño del tablero debe ser un número par.");
        }

        this.symbols = ["😊", "🌟", "🚀", "🍕", "🌈", "😡", "🐱", "🎉", "🏖️", "📚"]
            ;
        this.size = size;
        this.board = [];
        this.isRevealed = false;
        this.initBoard();

    }

    public startGame() {
        this.printBoard();
        
        while (!this.checkWinner()) {
          
            let firstCoords = this.getCoordinates("Primera carta");
            if (!firstCoords) continue;
    
            console.clear();
            this.revealCard(firstCoords.x, firstCoords.y);
            this.printBoard();
    
            let secondCoords = this.getCoordinates("Segunda carta");
            if (!secondCoords) continue;
    
            this.revealCard(secondCoords.x, secondCoords.y);
            this.printBoard();

    
            const hint1 = this.board[firstCoords.x][firstCoords.y];
            const hint2 = this.board[secondCoords.x][secondCoords.y];
    
            if (hint1.symbol !== hint2.symbol) {
                this.board[firstCoords.x][firstCoords.y].isRevealed = false;
                this.board[secondCoords.x][secondCoords.y].isRevealed = false;
            }

        }
    }
    
    private getCoordinates(promptMessage:string) {
        const x = parseInt(Prompt(`${promptMessage} - Fila: `));
        const y = parseInt(Prompt(`${promptMessage} - Columna: `));
    
        if (isNaN(x) || isNaN(y)) {
            console.log("Error: Coordenadas inválidas.");
            return null;
        }
        
        return { x, y };
    }

    private checkWinner (){

        for (let row of this.board) {
            for (let hint of row) {
                if (!hint.isRevealed) {
                    return false;
                }
            }
            return true;
        }
    }


    public printBoard(): void {
        for (const row of this.board) {
            const rowStr = row
                .map(item => (item.isRevealed ? item.symbol : "?"))
                .join(" | ");
            console.log(rowStr);
        }
    }

    private initBoard() {
        const hints = this.duplicateAndShuffleCards(this.size);
        let index = 0;

        for (let i = 0; i < this.size; i++) {
            this.board.push([]);
            for (let j = 0; j < this.size; j++) {
                if (index < hints.length) {
                    this.board[i].push(new Card(hints[index]));
                    index++;
                } else {
                    throw new Error("Error: No hay más símbolos disponibles.");
                }
            }
        }
        
    }

    private duplicateAndShuffleCards = (n: number): string[] | string => {

        const totalCards = n * n;
        const totalHints = totalCards / 2;


        if (totalHints > this.symbols.length) {
            throw new Error("Error: El número excede la longitud del array de emojis.");
        }

        const selectedSymbols = this.symbols.slice(0, totalHints);
        const duplicatedArray = [...selectedSymbols, ...selectedSymbols];


        for (let i = duplicatedArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [duplicatedArray[i], duplicatedArray[j]] = [duplicatedArray[j], duplicatedArray[i]];
        }

        return duplicatedArray;
    }


    public revealCard(row: number, col: number) {
        if (row < 0 || row > this.size - 1 || col < 0 || col > this.size - 1) {
            throw new Error("Error: Coordenadas fuera de rango.");
        }
        this.board[row][col].isRevealed = true;
    }
}
function main() {
    const game = new Memory(2);
    game.startGame();
}

main()