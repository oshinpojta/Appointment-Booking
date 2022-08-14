const baseURL = "http://localhost:3000";

const APIheaders = {
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  'Content-Type' : 'application/json'
}
// ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES //
const ul  = document.querySelector("#users");
const btn = document.querySelector("#show-users");


let deleteuser = async (e) => {
  e.preventDefault();
  let editli = e.target.parentNode;
  await axios.delete(baseURL+"/user/"+editli.id);
  e.target.parentNode.remove();
}

let showUsers = async (e) => {
  //display
  console.log("Show Users!");
  let result = await axios.get(baseURL+"/show-users");
  let userList = result.data;
  console.log(userList);
  for(let i=0;i<userList.length;i++){

    let editbtn = createEditButton();
    let deletebtn = creatDeleteButton();

    //Adding Appointments List
    let li = document.createElement("li");
    li.id = userList[i].id;
    let userJson = userList[i];
    console.log(userJson);
    let userp = document.createElement("h2");
    userp.className = "user";
    userp.textContent = userJson.name;
    let emailp = document.createElement("h3");
    emailp.textContent = userJson.email;
    emailp.className = "email";
    let phonep = document.createElement("h3");
    phonep.className = "phone";
    phonep.textContent = userJson.phone;
    li.appendChild(userp);
    li.appendChild(emailp);
    li.appendChild(phonep);
    li.appendChild(editbtn);
    li.appendChild(deletebtn);
    ul.appendChild(li)
  }
  e.target.remove();
}

btn.addEventListener('click',showUsers);

function edituser(e){
  // e.preventDefault();
  // let editli = e.target.parentNode;
  // let ulist = ul.children;
  // for(let i=0;i<ulist.length;i++){
  //   if(editli===ulist[i]){
  //     ulist[i].style.display = "none";
  //   }else{
  //     ulist[i].style.display = "list-item";
  //   }
  // }
  // let nameli = editli.querySelector(".user");
  // let emailli = editli.querySelector(".email");
  // let phoneli = editli.querySelector(".phone");
  // console.log(emailli.textContent);
  // name.value = nameli.textContent;
  // email.value = emailli.textContent;
  // phone.value = phoneli.textContent;
  // hidden.value = editli.id;
}


function creatDeleteButton(){
  let deletebtn = document.createElement("button");
  deletebtn.className = "delete";
  deletebtn.textContent = "Delete";
  deletebtn.style.backgroundColor = "red";
  deletebtn.style.display = "inline";
  deletebtn.style.padding = "3px";
  deletebtn.style.borderWidth = "3px";
  deletebtn.addEventListener("click",deleteuser);
  return deletebtn;
}

function createEditButton(){
  let editbtn = document.createElement("button");
  editbtn.className = "edit";
  editbtn.textContent="Edit";
  editbtn.style.backgroundColor="cyan";
  editbtn.style.display = "inline";
  editbtn.style.padding = "3px";
  editbtn.style.borderWidth = "3px";
  editbtn.style.marginRight = "4px";
  editbtn.addEventListener("click",edituser);
  return editbtn;
}