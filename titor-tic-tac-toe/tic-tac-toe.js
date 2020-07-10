const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

function getAll(selector) {
    return document.querySelectorAll(selector)
}

function get(selector) {
    return document.querySelector(selector)
}

function insertSign(element, player) {
    element.innerText = player ? 'x' : 'o'
}

function compareWithСombs(crosses, toe, combs) {
    const compare = (signs, comb) => {
        if (signs.length < comb.length) return false
        const provenSigns = signs.filter(sign => comb.indexOf(sign) !== -1)
        if (provenSigns.length === comb.length) return true
        return false
    }
    for (const comb of combs) {
        if (compare(crosses, comb) || compare(toe, comb)) {
            return true
        }
    }
    return false
}

function reportVictory(player) {
    setTimeout(() => {
        str = player ? 'крестиком' : 'ноликом'
        alert(`Победил игрок с ${str}`)
    }, 0)
}

class TicTacToe {
    constructor() {
        this.currentPlayer = true
        this.playerTitle = get('.currentPlayer')
        this.crosses = []
        this.toe = []
        this.combs = WINNING_COMBINATIONS
    }

    init() {
        this.cells = getAll('.cell')
        this.followClick()
        this.setTitle()
    }

    followClick() {
        this.cells.forEach(cell => {
            cell.addEventListener('click', event => this.handleClick(event))
        })
    }

    handleClick(event) {
        const {target} = event
        if (target.innerText.trim() === '') {
            insertSign(target, this.currentPlayer)
            this.writeToStatistics(target)
            this.searchWinning()
        } else {
            alert('А сюда уже нажимали!')
        }
    }

    writeToStatistics(cell) {
        const find = cell => {
            const arr = this.cells.entries()
            for (const [key, value] of arr) {
                if (value === cell) return key
            }
        }
        const index = find(cell)
        this.currentPlayer ?
            this.crosses.push(index) :
            this.toe.push(index)
    }

    searchWinning() {
        const {currentPlayer, combs, crosses, toe} = this
        if (compareWithСombs(crosses, toe, combs)) {
            reportVictory(currentPlayer)
            this.restartGame()
        } else {
            this.currentPlayer = !currentPlayer
            this.setTitle()
        }
        if (crosses.length + toe.length === this.cells.length) {
            this.restartGame()
        }
    }

    restartGame() {
        this.currentPlayer = true
        this.crosses = []
        this.toe = []
        this.setTitle()
        setTimeout(() => {
            this.cells.forEach(cell => cell.innerText = '')
        }, 0)
    }

    setTitle() {
        const text = this.currentPlayer ? 'крестик' : 'нолик'
        this.playerTitle.innerText = `Текущий игрок: ${text}`
    }
}

new TicTacToe().init()










