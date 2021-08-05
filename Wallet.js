class Wallet {
  constructor(money) {
    let _money = money;

    this.getWalletValue = () => _money;

    this.checkCanPlay = (value) => {
      return _money >= value;
    };

    this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
        if (type === "+") {
          return (_money += value);
        } else if (type === "-") {
          return (_money -= value);
        } else {
          throw new Error("Nieprawidłowa wartość!");
        }
      } else {
        console.log(typeof value);
        throw new Error("Podana wartość musi być liczbą!");
      }
    };
  }
}

// const wallet = new Wallet(100);
