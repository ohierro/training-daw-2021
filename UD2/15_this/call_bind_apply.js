const test = {
    prop: 42,
    func: function() {
        console.log(this.prop)
    },
  };


const printProp = function() {
    console.log(`Prop value ${this.prop}`)
}

