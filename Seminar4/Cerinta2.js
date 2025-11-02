class Software {
    constructor(name) {
    this.name = name;
    }
    run() {
    console.log(`${this.name} is running`);
    }
}
class Plugin_ {
    constructor(name) {
    this.name = name;
    }
    activate() {
        console.log(`Plugin "${this.name}" activated`);
    }
}
class Browser extends Software {
    constructor(name) {
        super(name);
        this.plugins = [];
    }
    addPlugin(plugin) {
    this.plugins.push(plugin);
    }
    run() {
    super.run();
    this.plugins.forEach(plugin => plugin.activate());
    }
}
const b = new Browser("Safari");
const p1 = new Plugin_("Plugin1");
const p2 = new Plugin_("Plugin2");

b.addPlugin(p1);
b.addPlugin(p2);
b.run();