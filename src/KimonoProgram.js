module.exports = class {
  constructor(sourceName){
    this.sourceName = sourceName
  }

  async read(){
    return "text"
  }

  async parse(){
    return this
  }

  async compile(){
    return this
  }

  async run(){
    this.read()
      .then(this.parse)
      .then(this.compile)
      .then(this.parse)

    console.log("running")
  }
}