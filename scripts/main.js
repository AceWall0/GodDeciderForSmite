loadGods();

// Set up the checkbox groupers.
$("input[type=checkbox]").change(function(){
    cbGroupHandler(this)
});

const filterGroups = ["class", "pantheon", "damage_type", "attack_type", "roles"];
const specialFeatures = ["Healer", "Escape-Engage", "Global-Ult", "Invisible", "Execute", "Stance-Switching"];

$("input[type=checkbox]").change(updateFilters);


function updateFilters() {
    for (let key in gods) {gods[key].visible = true;}

    for (let group of filterGroups) {filterByGroup(group);}
    for (let feature of specialFeatures) {filterByFeature(feature)}

    for (let key in gods) {
        if (gods[key].visible) {
            gods[key].HTMLElement.classList.remove("hidden");
        }
        else {
            gods[key].HTMLElement.classList.add("hidden");
        }
    }
}

/**
 * If the god has ANY matching properties of the selected checkbox in the specified group,
 * than this god will be elegible to be displayed and rolled.
 * @param {string} gName Name of the filter group
 */
function filterByGroup(gName) {
    let cbxListFromGroup = $(`.${gName}.child`).get();    
    let cbxSelecteds = [];
    for (let cbx of cbxListFromGroup) {
        if (cbx.checked) {
            cbxSelecteds.push(cbx.id);
        }
    }
    let totNum = cbxListFromGroup.length;
    let selNum = cbxSelecteds.length;

    if (selNum != 0 && selNum != totNum) {
        for (let key in gods) {
            if (gods[key][gName] == "string") {
                if (!cbxSelecteds.includes(gods[key][gName])) {
                    gods[key].visible = false;
                }
            } else {
                if (!cbxSelecteds.some(x => gods[key][gName].includes(x))) {
                    gods[key].visible = false;
                }
            }
        }
    }
}

/**
 * To a god be elegible to be displayed and rolled, it has to have ALL the features checked.
 * @param {string} fName The name of the feature.
 */
function filterByFeature(fName) {
    let cbx = document.getElementById(fName);

    if (cbx.checked) {
        for (key in gods) {
            if (!gods[key].features.includes(fName)) {
                gods[key].visible = false;
            }
        }
    }
}

function loadGods() {
    let container = document.getElementById('godList');
    container.innerHTML = '';
    for (let key in gods) {
        gods[key].HTMLElement = document.createElement("img");
        gods[key].HTMLElement.src = `images/t_${gods[key].id}_default_icon.png`;
        gods[key].HTMLElement.id = gods[key].id;
        gods[key].visible = true;
        container.appendChild(gods[key].HTMLElement)
    }
}

function roll() {
	let x = Math.floor(Math.random() * selGods.length);
	$('#godName').text(selGods[x].name);
	$('#godDescription').text(selGods[x].pantheon + " " + selGods[x].class);
    $("#icoBorder").css("background-image", `url("images/t_${selGods[x].id}_default_icon.png")`);
}
function toggleAside() {
	let x = document.getElementById("gridContainer").classList;
	x.toggle("closed-aside");
	x.toggle("open-aside");
}

/**
 * Handles the checkbox that control the group. If clicked, it sends command to all children to be 
 * selected or deselected. And if a child is clicked, the father may be in the indetarminate state. 
 * @param {input[type=checkbox]} x 
 */
function cbGroupHandler(x) {
    let list = x.classList;
    let groupName = list[0];
    
    if (list.contains("father")) {
        let children = document.getElementsByClassName(groupName + " child");
        for (let i = children.length - 1; i >= 0; i--) {
            children[i].checked = x.checked;
        }
    }
    else if (list.contains("child")) {
        let totalNum = document.getElementsByClassName(groupName + " child").length;
        let selNum = document.querySelectorAll(`.${groupName}.child:checked`).length;
        let a = document.querySelector(`.${groupName}.father`);
        
        if (selNum === 0) {
            a.checked = false;
            a.indeterminate = false;
        }
        else if (selNum === totalNum) {
            a.checked = true;
            a.indeterminate = false;
        }
        else {
            a.checked = false; 
            a.indeterminate = true;
        }
    }
}
