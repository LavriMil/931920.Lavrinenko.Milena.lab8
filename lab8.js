Dob = () => 
{
let a = document.querySelector(".Bn").cloneNode(true);
let b = document.querySelector("#div");
b.appendChild(a);
};



S = (sox) => 
{
let Sox = document.querySelector("#" + sox);
    
let a = [];
let b = document.querySelectorAll(".bn1");
let c = document.querySelectorAll(".bn");

for (let i = 1; i < c.length; i++) 
{
a.push(c[i].value + ":" + b[i].value)
}
    
console.log(JSON.stringify(a));
a = JSON.stringify(a);
a = '{' + a.slice(1, a.length - 1) + '}';

Sox.innerHTML = a;
};



V1 = (z) => 
{
a = z.parentElement.previousElementSibling;

if (a) 
{
z.parentElement.after(a);
}};


N1 = (z) => 
{
a = z.parentElement.nextElementSibling;
    
if (a) 
{
z.parentElement.before(a);
}};


Del = (del) => 
{
del.parentElement.remove()
};

