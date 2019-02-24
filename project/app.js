// alert('hello')
// const mother ='Gayathri';
// const father = 'Gopalakrishna';
// var couple = father.concat(mother);
// console.log(couple);
// const daughter = 'Girija';
// const son = 'Sripada';
// let html;
// html = `<ul>
//         <li>Father: ${father}</li>
//         <li>Mother: ${mother}</li>
//         <li>Couple: ${couple}</li>
//         <li>Daughter: ${daughter}</li>
//         <li>Son: ${son}</li>
//         <li>Family: ${couple.concat(daughter,son)}</li>
//         <li>{}</li>
//         </ul>`;
//         document.body.innerHTML = html;

//         const a = (x,y) => Math.pow(x,y);

//         console.log(a(4,3));

const text = document.createElement("p");
console.log(text);
const node = document.createTextNode("Text node");
console.log(node);
text.append(node);
