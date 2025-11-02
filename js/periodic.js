const elements = [
  // Format: [symbol, name, atomic number, atomic mass, category, gridCol, gridRow]
  ["H","Hydrogen",1,1.008,"Nonmetal",1,1],
  ["He","Helium",2,4.0026,"Noble Gas",18,1],
  ["Li","Lithium",3,6.94,"Alkali Metal",1,2],
  ["Be","Beryllium",4,9.0122,"Alkaline Earth Metal",2,2],
  ["B","Boron",5,10.81,"Metalloid",13,2],
  ["C","Carbon",6,12.011,"Nonmetal",14,2],
  ["N","Nitrogen",7,14.007,"Nonmetal",15,2],
  ["O","Oxygen",8,15.999,"Nonmetal",16,2],
  ["F","Fluorine",9,18.998,"Halogen",17,2],
  ["Ne","Neon",10,20.180,"Noble Gas",18,2],
  // Row 3
  ["Na","Sodium",11,22.990,"Alkali Metal",1,3],
  ["Mg","Magnesium",12,24.305,"Alkaline Earth Metal",2,3],
  ["Al","Aluminium",13,26.982,"Post-Transition Metal",13,3],
  ["Si","Silicon",14,28.085,"Metalloid",14,3],
  ["P","Phosphorus",15,30.974,"Nonmetal",15,3],
  ["S","Sulfur",16,32.06,"Nonmetal",16,3],
  ["Cl","Chlorine",17,35.45,"Halogen",17,3],
  ["Ar","Argon",18,39.948,"Noble Gas",18,3],
  // Row 4
  ["K","Potassium",19,39.098,"Alkali Metal",1,4],
  ["Ca","Calcium",20,40.078,"Alkaline Earth Metal",2,4],
  ["Sc","Scandium",21,44.956,"Transition Metal",3,4],
  ["Ti","Titanium",22,47.867,"Transition Metal",4,4],
  ["V","Vanadium",23,50.942,"Transition Metal",5,4],
  ["Cr","Chromium",24,51.996,"Transition Metal",6,4],
  ["Mn","Manganese",25,54.938,"Transition Metal",7,4],
  ["Fe","Iron",26,55.845,"Transition Metal",8,4],
  ["Co","Cobalt",27,58.933,"Transition Metal",9,4],
  ["Ni","Nickel",28,58.693,"Transition Metal",10,4],
  ["Cu","Copper",29,63.546,"Transition Metal",11,4],
  ["Zn","Zinc",30,65.38,"Transition Metal",12,4],
  ["Ga","Gallium",31,69.723,"Post-Transition Metal",13,4],
  ["Ge","Germanium",32,72.630,"Metalloid",14,4],
  ["As","Arsenic",33,74.922,"Metalloid",15,4],
  ["Se","Selenium",34,78.971,"Nonmetal",16,4],
  ["Br","Bromine",35,79.904,"Halogen",17,4],
  ["Kr","Krypton",36,83.798,"Noble Gas",18,4],
  // Row 5
  ["Rb","Rubidium",37,85.468,"Alkali Metal",1,5],
  ["Sr","Strontium",38,87.62,"Alkaline Earth Metal",2,5],
  ["Y","Yttrium",39,88.906,"Transition Metal",3,5],
  ["Zr","Zirconium",40,91.224,"Transition Metal",4,5],
  ["Nb","Niobium",41,92.906,"Transition Metal",5,5],
  ["Mo","Molybdenum",42,95.95,"Transition Metal",6,5],
  ["Tc","Technetium",43,98,"Transition Metal",7,5],
  ["Ru","Ruthenium",44,101.07,"Transition Metal",8,5],
  ["Rh","Rhodium",45,102.91,"Transition Metal",9,5],
  ["Pd","Palladium",46,106.42,"Transition Metal",10,5],
  ["Ag","Silver",47,107.87,"Transition Metal",11,5],
  ["Cd","Cadmium",48,112.41,"Transition Metal",12,5],
  ["In","Indium",49,114.82,"Post-Transition Metal",13,5],
  ["Sn","Tin",50,118.71,"Post-Transition Metal",14,5],
  ["Sb","Antimony",51,121.76,"Metalloid",15,5],
  ["Te","Tellurium",52,127.60,"Metalloid",16,5],
  ["I","Iodine",53,126.90,"Halogen",17,5],
  ["Xe","Xenon",54,131.29,"Noble Gas",18,5],
  // Row 6
  ["Cs","Caesium",55,132.91,"Alkali Metal",1,6],
  ["Ba","Barium",56,137.33,"Alkaline Earth Metal",2,6],
  ["La","Lanthanum",57,138.91,"Lanthanide",3,9],
  ["Ce","Cerium",58,140.12,"Lanthanide",4,9],
  ["Pr","Praseodymium",59,140.91,"Lanthanide",5,9],
  ["Nd","Neodymium",60,144.24,"Lanthanide",6,9],
  ["Pm","Promethium",61,145,"Lanthanide",7,9],
  ["Sm","Samarium",62,150.36,"Lanthanide",8,9],
  ["Eu","Europium",63,151.96,"Lanthanide",9,9],
  ["Gd","Gadolinium",64,157.25,"Lanthanide",10,9],
  ["Tb","Terbium",65,158.93,"Lanthanide",11,9],
  ["Dy","Dysprosium",66,162.50,"Lanthanide",12,9],
  ["Ho","Holmium",67,164.93,"Lanthanide",13,9],
  ["Er","Erbium",68,167.26,"Lanthanide",14,9],
  ["Tm","Thulium",69,168.93,"Lanthanide",15,9],
  ["Yb","Ytterbium",70,173.05,"Lanthanide",16,9],
  ["Lu","Lutetium",71,174.97,"Lanthanide",17,9],
  ["Hf","Hafnium",72,178.49,"Transition Metal",4,6],
  ["Ta","Tantalum",73,180.95,"Transition Metal",5,6],
  ["W","Tungsten",74,183.84,"Transition Metal",6,6],
  ["Re","Rhenium",75,186.21,"Transition Metal",7,6],
  ["Os","Osmium",76,190.23,"Transition Metal",8,6],
  ["Ir","Iridium",77,192.22,"Transition Metal",9,6],
  ["Pt","Platinum",78,195.08,"Transition Metal",10,6],
  ["Au","Gold",79,196.97,"Transition Metal",11,6],
  ["Hg","Mercury",80,200.59,"Transition Metal",12,6],
  ["Tl","Thallium",81,204.38,"Post-Transition Metal",13,6],
  ["Pb","Lead",82,207.2,"Post-Transition Metal",14,6],
  ["Bi","Bismuth",83,208.98,"Post-Transition Metal",15,6],
  ["Po","Polonium",84,209,"Post-Transition Metal",16,6],
  ["At","Astatine",85,210,"Halogen",17,6],
  ["Rn","Radon",86,222,"Noble Gas",18,6],
  // Row 7
  ["Fr","Francium",87,223,"Alkali Metal",1,7],
  ["Ra","Radium",88,226,"Alkaline Earth Metal",2,7],
  ["Ac","Actinium",89,227,"Actinide",3,10],
  ["Th","Thorium",90,232.04,"Actinide",4,10],
  ["Pa","Protactinium",91,231.04,"Actinide",5,10],
  ["U","Uranium",92,238.03,"Actinide",6,10],
  ["Np","Neptunium",93,237.0,"Actinide",7,10],
  ["Pu","Plutonium",94,244,"Actinide",8,10],
  ["Am","Americium",95,243,"Actinide",9,10],
  ["Cm","Curium",96,247,"Actinide",10,10],
  ["Bk","Berkelium",97,247,"Actinide",11,10],
  ["Cf","Californium",98,251,"Actinide",12,10],
  ["Es","Einsteinium",99,252,"Actinide",13,10],
  ["Fm","Fermium",100,257,"Actinide",14,10],
  ["Md","Mendelevium",101,258,"Actinide",15,10],
  ["No","Nobelium",102,259,"Actinide",16,10],
  ["Lr","Lawrencium",103,262,"Actinide",17,10],
  ["Rf","Rutherfordium",104,267,"Transition Metal",4,7],
  ["Db","Dubnium",105,270,"Transition Metal",5,7],
  ["Sg","Seaborgium",106,271,"Transition Metal",6,7],
  ["Bh","Bohrium",107,270,"Transition Metal",7,7],
  ["Hs","Hassium",108,277,"Transition Metal",8,7],
  ["Mt","Meitnerium",109,278,"Unknown",9,7],
  ["Ds","Darmstadtium",110,281,"Unknown",10,7],
  ["Rg","Roentgenium",111,282,"Unknown",11,7],
  ["Cn","Copernicium",112,285,"Unknown",12,7],
  ["Nh","Nihonium",113,286,"Unknown",13,7],
  ["Fl","Flerovium",114,289,"Unknown",14,7],
  ["Mc","Moscovium",115,290,"Unknown",15,7],
  ["Lv","Livermorium",116,293,"Unknown",16,7],
  ["Ts","Tennessine",117,294,"Unknown",17,7],
  ["Og","Oganesson",118,294,"Unknown",18,7]
];

const categoryColors = {
  "Nonmetal":        "#CCF2FF",
  "Noble Gas":       "#D1DBFA",
  "Alkali Metal":    "#FDE4CE",
  "Alkaline Earth Metal":  "#FDF6CC",
  "Metalloid":       "#DAFFD6",
  "Halogen":         "#FFD8EA",
  "Post-Transition Metal": "#EBE5F0",
  "Transition Metal": "#EAF6FF",
  "Lanthanide":      "#FADEF3",
  "Actinide":        "#FCE2EF",
  "Unknown":         "#E6E6E6"
};

const tableDiv = document.getElementById("periodicTable");
const popup = document.getElementById("elementPopup");

tableDiv.innerHTML = "";

elements.forEach(el => {
  const [sym,name,num,mass,cat,col,row] = el;
  const btn = document.createElement("button");
  btn.className = "element-cell";
  btn.innerText = sym;
  btn.style.gridColumn = col;
  btn.style.gridRow = row;
  btn.style.background = categoryColors[cat]||"#dbeaff";
  btn.setAttribute("title", `${name}\n${cat}`);
  btn.onclick = () => showElement(sym, name, num, mass, cat);
  tableDiv.appendChild(btn);
});

// Show modal popup with element info
function showElement(sym, name, num, mass, cat) {
  document.getElementById("elSymbol").innerText = sym;
  document.getElementById("elName").innerText = name;
  document.getElementById("elNumber").innerText = num;
  document.getElementById("elMass").innerText = mass;
  document.getElementById("elCategory").innerText = cat;
  popup.style.display = "block";
}
window.closeElementPopup = function() {
  popup.style.display = "none";
};
