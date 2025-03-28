/*
Desarrolla una función que procese un array de votos en una campaña electoral. Cada voto se representa 
mediante un objeto que contiene un id del votante y el nombre del candidato al que ha votado.

La función debe contar cuántos votos ha recibido cada candidato y, al final, mostrar quién fue el candidato 
con más votos.

La función debe realizar lo siguiente:

Recibir un array de objetos, donde cada objeto tiene la siguiente estructura:

{ id: ‹votante id>, candidate: ‹nombre del_ candidato>

Determinar el candidato con más votos.

Retornar un objeto que contenga el nombre del candidato ganador y la cantidad do
VOTOS: [

{ id: '114289451', candidate: "Alice"}, 
{ id: '414249420', candidate: "Bob"},
{ id: '116820394', candidate: "Alice"},
{ id: '478989489', candidate: "Charlie"},
{ id: '172838475', candidate: "Bob"},
{ id: '429393004', candidate: "Alice"}

]

 */

type Candidate = 'Alice' | 'Bob' | 'Charlie' | null


interface Vote {
    id: string,
    candidate: Candidate,
}

const electionWinner = (votes: Vote[]) => {

    const totalVotes = new Map<Candidate, number>();

    for (const vote of votes) {
        const candidate = vote.candidate
        if (totalVotes.has(candidate)) {
            totalVotes.set(candidate, (totalVotes.get(candidate) || 0) + 1);

        } else { totalVotes.set(candidate, 1) }
    }

    let maxVotes = 0
    let winner = null
    for (const [candidate, count] of totalVotes) {
        if (count > maxVotes) {
            maxVotes = count
            winner = candidate
        }
    }

    return {
        candidate: winner,
        count: maxVotes
    }

}

const vote: Vote[] = [
    { id: '114289451', candidate: "Alice" },
    { id: '414249420', candidate: "Bob" },
    { id: '116820394', candidate: "Alice" },
    { id: '478989489', candidate: "Charlie" },
    { id: '172838475', candidate: "Bob" },
    { id: '429393004', candidate: "Alice" }
]


console.log(electionWinner(vote))