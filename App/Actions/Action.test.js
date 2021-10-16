const Action = require("./Action")
// @ponicode
describe("Action.getList", () => {
    test("0", () => {
        let callFunction = () => {
            Action.getList()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Action.addList", () => {
    test("0", () => {
        let callFunction = () => {
            Action.addList(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Action.addList(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Action.addList(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Action.removeList", () => {
    test("0", () => {
        let callFunction = () => {
            Action.removeList(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Action.removeList(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Action.removeList(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Action.removeList(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Action.removeList("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Action.removeList(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Action.updateList", () => {
    test("0", () => {
        let callFunction = () => {
            Action.updateList(false, "a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Action.updateList(false, 12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Action.updateList(true, "bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Action.updateList(true, 12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Action.updateList(false, 56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Action.updateList(true, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
