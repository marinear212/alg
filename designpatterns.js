class Singleton {
  constructor(value) {
    if(Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;

    this.value = value;
  }
}

const s = new Singleton(3);

const d2 = new Singleton(5);

console.log(s);
console.log(d2);