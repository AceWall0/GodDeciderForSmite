const filterGroups = ['class', 'pantheon', 'damage_type', 'attack_type', 'roles']
const specialFeatures = ['Healer', 'Escape-Engage', 'Global-Ult', 'Invisible', 'Execute', 'Stance-Switcher']
const godIds = Object.keys(gods)

var selectedGods = godIds


function main() {
    loadGods()
    updateSelectedGodsList()

    document.getElementById('btnRoll').addEventListener('pointerdown', rollDown)
    document.getElementById('btnRoll').addEventListener('pointerup', rollUp)

    document.querySelectorAll('.filter').forEach(e => {
        e.addEventListener('change', event => cbxGroupHandler(event.target))
        e.addEventListener('change', applyFilters)
    })
    document.querySelectorAll('.godFigure').forEach(
        e => e.addEventListener('click', event => toggleGod(event.currentTarget))
    )
}


/**
 * Look for any filter that are checked and apply them, making the gods hidden or unhidden.
 */
function applyFilters() {
    for (let key in gods) { gods[key].visible = true }

    for (let group of filterGroups) { filterByGroup(group) }
    for (let feature of specialFeatures) { filterByFeature(feature) }

    for (let key in gods) {
        if (gods[key].visible) {
            gods[key].HTMLElement.classList.remove('hidden')
        } else {
            gods[key].HTMLElement.classList.add('hidden')
        }
    }
    updateSelectedGodsList()
}


/**
 * If the god has ANY matching properties of the selected checkbox in the specified group,
 * than this god will be elegible to be displayed and rolled.
 * @param {string} gName Name of the filter group
 */
function filterByGroup(gName) {
    let cbxListFromGroup = document.querySelectorAll(`.${gName}.child`)

    let cbxSelecteds = []
    for (let cbx of cbxListFromGroup) {
        if (cbx.checked) {
            cbxSelecteds.push(cbx.id)
        }
    }
    let totNum = cbxListFromGroup.length
    let selNum = cbxSelecteds.length

    if (selNum != 0 && selNum != totNum) {
        for (let key in gods) {
            if (gods[key][gName] == 'string') {
                if (!cbxSelecteds.includes(gods[key][gName])) {
                    gods[key].visible = false
                }
            } else {
                if (!cbxSelecteds.some(x => gods[key][gName].includes(x))) {
                    gods[key].visible = false
                }
            }
        }
    }
}


/**
 * Filter gods by its features. This filter, as opposed to the others, uses the AND strategy.
 * @param {string} fName The name of the feature.
 */
function filterByFeature(fName) {
    let cbx = document.getElementById(fName)

    if (cbx.checked) {
        for (key in gods) {
            if (!gods[key].features.includes(fName)) {
                gods[key].visible = false
            }
        }
    }
}

/**
 * Load all the gods from the gods.js file on the html page, creating them elements to be displayed,
 * binding them events and defining if the god is selected individually or if it is hidden by the filters.
 */
function loadGods() {
    const container = document.getElementById('godList')
    container.innerHTML = ''

    for (const key in gods) {
        const figure = document.createElement('figure')
        figure.id = key
        figure.className = 'godFigure'

        const img = document.createElement('img')
        img.src = `images/t_${key}_default_icon.png`
        img.className = 'godImg'

        figure.appendChild(img)
        container.appendChild(figure)
        gods[key].HTMLElement = figure
        gods[key].visible = true
        gods[key].selected = true
    }
}

var pointerDown = false
function rollDown() {
    roll()
    if (pointerDown === false) {
        pointerDown = setInterval(roll, 70)
    }
}
function rollUp() {
    if (pointerDown !== false) {
        clearInterval(pointerDown)
        pointerDown = false
    }
}


/**
 * Takes one random god from the selectedGods list and displays to the user the icon, name and
 * description of the god selected.
 */
function roll() {
    const x = Math.floor(Math.random() * selectedGods.length)
    const id = selectedGods[x]
    const god = gods[id]
    document.getElementById('godName').innerHTML = god.name
    document.getElementById('godDescription').innerHTML = `${god.pantheon} ${god.class}`
    document.getElementById('icoFrame').style.backgroundImage = `url("images/t_${id}_default_icon.png")`
    window.rGod = god
}


/**
 * Toggles the visibility of the filters panel.
 */
function toggleAside() {
    let x = document.getElementsByTagName('body')[0].classList
    x.toggle('closed-aside')
    x.toggle('open-aside')
}


/**
 * Toggle the "selected" property of a god and the "deselected" class for CSS styling.
 * @param {HTMLElement} god An element bound to a god in the gods.js file.
 */
function toggleGod(god) {
    let off = god.classList.toggle('deselected')
    gods[god.id].selected = !off
    updateSelectedGodsList()

    // Updates the state of the "All" checkbox.
    let count = 0
    const godList = Object.values(gods)
    const cbx = document.getElementById('selectAllCbx')

    godList.forEach(e => { if (e.selected) count++ });
    if (count === godList.length) {
        cbx.checked = true
        cbx.indeterminate = false
    } else if (count === 0) {
        cbx.checked = false
        cbx.indeterminate = false
    } else {
        cbx.checked = false
        cbx.indeterminate = true
    }
}


/**
 * Handles the checkbox that select and unselect all gods at once.
 * @param {HTMLInputElement} cbx The checkbox element to control it.
 */
function toggleAllGods(cbx) {
    if (cbx.checked) {
        for (key in gods) {
            gods[key].HTMLElement.classList.remove('deselected')
            gods[key].selected = true
        }
    } else {
        for (key in gods) {
            gods[key].HTMLElement.classList.add('deselected')
            gods[key].selected = false
        }
    }
    updateSelectedGodsList()
}


/**
 * Called everytime there is a change in the filter or selection of the gods.
 * It will update which gods can be rolled based if it is displayed and selected.
 */
function updateSelectedGodsList() {
    selectedGods = Object.keys(gods).filter(id => gods[id].visible && gods[id].selected);
    document.getElementById("numberX").innerHTML = `${selectedGods.length}/${godIds.length}`
}


/**
 * Handles the checkbox that control the group. If clicked, it sends command to all children to be 
 * selected or deselected. And if a child is clicked, the father may be in the indetarminate state. 
 * @param {HTMLImageElement} x 
 */
function cbxGroupHandler(x) {
    let list = x.classList
    let groupName = list[0]

    if (list.contains('father')) {
        let children = document.getElementsByClassName(groupName + ' child')
        for (let i = children.length - 1; i >= 0; i--) {
            children[i].checked = x.checked
        }
    }
    else if (list.contains('child')) {
        let totalNum = document.getElementsByClassName(groupName + ' child').length
        let selNum = document.querySelectorAll(`.${groupName}.child:checked`).length
        let a = document.querySelector(`.${groupName}.father`)

        if (selNum === 0) {
            a.checked = false
            a.indeterminate = false
        }
        else if (selNum === totalNum) {
            a.checked = true
            a.indeterminate = false
        }
        else {
            a.checked = false
            a.indeterminate = true
        }
    }
}