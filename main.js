function loadjson(file,callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}

loadjson("data.json",function(text)
{
  var data = JSON.parse(text);
  console.log(data);
  details(data.basic);
  careerinfo(data.career);
  educationaldetails(data.education);
  achivements(data.achivements);

})

var left = document.querySelector(".leftchild");
function details(det){

  var image = document.createElement("img");
  image.src=det.image;
  left.appendChild(image);

   var name = document.createElement("h3");
   name.textContent = det.name;
   left.appendChild(name);

   var mail = document.createElement("a");
   mail.href = "mailto:ajayrichards359@gmail.com";
   mail.textContent = det.email;
   left.appendChild(mail);

   var number = document.createElement("p");
   number.textContent = det.number;
   left.appendChild(number);

   var add = document.createElement("h2");
   add.textContent = "Address";
   left.appendChild(add);

   var hr = document.createElement("hr");
   left.appendChild(hr);

   var add1 = document.createElement("p");
   add1.textContent=det.address;
   left.appendChild(add1);
 }
 var right = document.querySelector(".rightchild");
 function careerinfo(infodata)
 {
   var add = document.createElement("h2");
   add.textContent = "career info";
   right.appendChild(add);

   var hr = document.createElement("hr");
   right.appendChild(hr);

  var career = document.createElement("p");
  career.textContent = infodata.info;
  right.appendChild(career);

  var add = document.createElement("h2");
  add.textContent = "educational qualification";
  right.appendChild(add);

  var hr = document.createElement("hr");
   right.appendChild(hr);
}
function educationaldetails(edu)
{
  var add = document.createElement("h3");
  add.textContent = "educational qualification";
  right.appendChild(add);

  var hr = document.createElement("hr");
  right.appendChild(hr);

  var table1 = document.createElement("table");
  table1.border="1";
  var tr1 = "<tr><th>institute</th><th>degree</th><th>passout</th></tr>";
  var tr2 ="";

  for(var i=0;i<edu.length;i++){
    tr2+="<tr><th>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passout+"<td><td>";
  }
  table1.innerHTML=tr1+tr2;
  right.appendChild(table1);
}
function achivements(ac){
  var a1 = document.createElement("h3");
  a1.textContent = "achivements";
  right.appendChild(a1);

  var hr = document.createElement("hr");
  right.appendChild(a1);

  var u1 = document.createElement("u1");
  for(var i=0;i<ac.length;i++){
    var li = document.createElement("li");
    li.textContent=ac[i].title+":"+ac[i].content;
    u1.appendChild(li);
  }
  right.appendChild(u1);
}