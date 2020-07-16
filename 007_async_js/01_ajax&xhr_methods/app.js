document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  //Create XHR object
  const xhr = new XMLHttpRequest();

  //Open
  xhr.open('GET', 'data.txt', true);

  //Optional
  xhr.onprogress = function () {
    console.log(this.readyState);
  };

  //On load
  xhr.onload = function () {
    console.log(xhr.readyState);
    if (this.status === 200) {
      document.getElementById(
        'output'
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  // console.log(xhr.readyState);

  // xhr.onreadystatechange = function () {
  //   console.log(xhr.readyState);

  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  xhr.onerror = function () {
    console.log('Request error');
  };

  xhr.send();

  // Ready state values
  //   0:request not initialized
  //   1:server connection established
  //   2:request received
  //   3:processing request
  //   4:request finished and response ready

  // HTTP Statuses:
  //   200 OK
  //   403 Forbidden
  //   404 Not found
}
