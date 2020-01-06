var selGods = gods.slice();
refreshList();

// Set up the checkbox groupers.
$("input[type=checkbox]").change(function(){
    cbGroupHandler(this)
});

const fCategories = ["class", "pantheon", "damage_type", "attack_type", "roles"];
const fSpcCategories = ["Healer", "Escape-Engage", "Global-Ult", "Invisible", "Execute", "Stance-Switching"];

//Handles the filter
$("input[type=checkbox]").change(function(){
    selGods = [];
    selGods = gods.slice();
    
    for (let i=0, n=fCategories.length; i<n ; i++) filter(fCategories[i]);
    for (let i=0, n=fSpcCategories.length; i<n ; i++) filterSpc(fSpcCategories[i]);
    
    refreshList();
});


function filter(category) {
    let current = $(`.${category}.child`).get();
    let totalNum = current.length;
    
    let selecteds = [];
    for (let i in current) if (current[i].checked) selecteds.push(current[i].id);
    let selectedsNum = selecteds.length;
    
    
    if (selectedsNum != 0 && selectedsNum != totalNum) {
        if (typeof (selGods[0][category]) === "string") {
            selGods = selGods.filter(god => selecteds.includes(god[category]));
        }   
        else if (typeof(selGods[0][category]) === "object") {
            selGods = selGods.filter(god => selecteds.some(x => god[category].includes(x)));
        }
    }
}

function filterSpc(category) {
    let current = document.getElementById(category);
    if (current.checked) {
        selGods = selGods.filter(god => god["special"].includes(category));
    }
}

function refreshList() {
	let container = document.getElementById('godList');
	container.innerHTML = '';    
    for (let i in selGods) {
        var node = document.createElement("img");
		node.src = `images/t_${selGods[i].id}_default_icon.png`;
		container.appendChild(node);
    }    
	document.getElementById('numberX').innerHTML = selGods.length + "/" + gods.length;
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
