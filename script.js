 let co=1;
 let total1=0;

 function add(name, val){
    console.log(name+" "+val);
    total1+=val;
    let s=document.getElementById("table").getElementsByTagName("tbody")[0];
    let row = s.insertRow();
    let a=row.insertCell();
    let b=row.insertCell();
    let c=row.insertCell();
    let d=row.insertCell();
    let e=document.createTextNode(co);
    let f=document.createTextNode(name);
    let g=document.createTextNode(1);
    let h=document.createTextNode(val);
    a.appendChild(e);
    b.appendChild(f);
    c.appendChild(g);
    d.appendChild(h);
    document.getElementById("total").innerHTML=total1;
    co++;
}