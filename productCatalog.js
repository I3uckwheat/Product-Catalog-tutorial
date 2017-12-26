function createTableHeader(tableId){
  const tableHeaderRow = document.createElement('TR');
  const th1 = document.createElement('TH');
  const th2 = document.createElement('TH');
  const th3 = document.createElement('TH');
  const th4 = document.createElement('TH');
  th1.appendChild(document.createTextNode("ProductId"));
  th2.appendChild(document.createTextNode("Type"));
  th3.appendChild(document.createTextNode("Price"));
  th4.appendChild(document.createTextNode("Examine"));
  tableHeaderRow.appendChild(th1);
  tableHeaderRow.appendChild(th2);
  tableHeaderRow.appendChild(th3);
  tableHeaderRow.appendChild(th4);
  document.getElementById(tableId).appendChild(tableHeaderRow);
}

function updateTable(tableId, productArray){
  const tableBody = document.getElementById(tableId);
  tableBody.innerHTML = "";

  createTableheader(tableId);

  for (i = 0; i < productArray.length; i++) {
    const tr = document.createElement('TR');
    const td1 = document.createElement('TD');
    const td2 = document.createElement('TD');
    const td3 = document.createElement('TD');
    const td4 = document.createElement('button');

    td4.addEventListener('click',function(){

    });
    td1.appendChild(document.createTextNode(productArray[i].id));
    td2.appendChild(document.createTextNode(productArray[i].type));
    td3.appendChild(document.createTextNode(productArray[i].price));
    td4.appendChild(document.createTextNode("Examine"));
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tableBody.appendChild(tr);
}
}
