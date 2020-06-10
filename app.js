const addRow = () => {
  let username = document.getElementById("inputUsername").value;
  let name = document.getElementById("inputName").value;
  let team = document.getElementById("inputTeam").value;
  let table = document.getElementById("displayTable");
  let editTarget = document.getElementById("editing");
  if (editTarget) {
    editTarget.childNodes[1].textContent = username;
    editTarget.childNodes[3].textContent = name;
    editTarget.childNodes[5].textContent = team;
    editTarget.id = "";
    document.getElementById("addBtn").textContent = "+ Add";
  }
  else {
    table.innerHTML += `
    <tr class="data-row">
      <td>${username}</td>
      <td>${name}</td>
      <td>${team}</td>
      <td class="actionBtns"><button type="button" name="button" onclick="editRow(this)"><i class="fas fa-pencil-alt"></i></button><button type="button" name="button" onclick="deleteRow(this)"><i class="fas fa-trash"></i></button></td>
    </tr>
    `;
  }
}

const deleteRow = (el) => {
  let row = el.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

const editRow = (el) => {
  if (document.getElementById("editing")) {
    document.getElementById("editing").id = "";
  };
  let row = el.parentNode.parentNode;
  let username = row.childNodes[1].textContent;
  let name = row.childNodes[3].textContent;
  let team = row.childNodes[5].textContent;
  document.getElementById("inputUsername").value = username;
  document.getElementById("inputName").value = name;
  document.getElementById("inputTeam").value = team;
  row.setAttribute("id", "editing");
  document.getElementById("addBtn").textContent = "...Edit";
}
