class Statistics {
  constructor() {
    this.gameResults = [];
  }

  addGameToStatistics(win, bid) {
    let gameResult = {
      win,
      bid,
    };

    this.gameResults.push(gameResult);
  }

  showGameStatistics() {
    let numberOfGames = this.gameResults.length;
    let numberOfWins = this.gameResults.filter((result) => result.win).length;
    let numberOfLosses = this.gameResults.filter(
      (result) => !result.win
    ).length;
    return [numberOfGames, numberOfLosses, numberOfWins];
  }
}

// const stats = new Statistics();
