/*maxn_o3mini(
    board: BoardType,
    depth: number,
    currentPlayerIndex: number,
    totalPlayers: number
  ): BoardEvaluation {
    if (depth === 0 || this.gameOver()) {
      const score = [0]; //this.evaluateBoardWithAllPlayers(board);
      return { score: score };
    }

    let bestScore: number[] = Array(totalPlayers).fill(-Infinity);
    let bestMove: number[] | undefined = undefined;

    const moves: number[][] = this.getAllMovesByPlayer(
      board,
      currentPlayerIndex
    );

    // Iterate over each possible move.
    for (const move of moves) {
      // Apply the move to get a new board state.
      const newBoard = this.handleMove(structuredClone(board), move);

      // Determine the next player's index using modulo arithmetic.
      // This ensures that after the last player, we wrap around to player 0.
      const nextPlayer = (currentPlayerIndex + 1) % totalPlayers;
      const result = this.maxn_o3mini(
        structuredClone(newBoard),
        depth - 1,
        nextPlayer,
        totalPlayers
      );

      //The move must be evaluated by multiple players!
      if (result.score[currentPlayerIndex] > bestScore[currentPlayerIndex]) {
        bestScore = result.score;
        bestMove = move;
      }
    }

    // Return the best evaluation vector and the associated move for the current player.
    return { score: bestScore as number[], move: bestMove } as BoardEvaluation;
  }
*/
