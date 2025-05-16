class A {
	constructor(a) {
		this.a = a;
		return a;
	}
}

class B {
	constructor(f) {
		if (!f) {
			debugger;
			return "falsy";
		}
	}
}
