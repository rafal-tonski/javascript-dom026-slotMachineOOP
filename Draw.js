class Draw {
  constructor() {
    this.options = ["pink", "yellow", "teal"];
    let _result = this.drawResult();
    this.getDrawResult = () => _result;
  }

  drawResult() {
    return this.options.map(() => {
      const index = Math.floor(Math.random() * this.options.length);
      return this.options[index];
    });
  }
}

const draw = new Draw();
