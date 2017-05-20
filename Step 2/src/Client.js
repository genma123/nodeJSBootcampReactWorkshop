// This is based on https://github.com/fullstackreact/food-lookup-demo
// Won't work with IE11
function retrieve(cb) {
  return fetch(`api/tasks`)
  .then(function(res) {
	  return res.json();
  }).then(cb);
}

function add(event, cb) {
  var task = { title: event.target.elements.title.value, isDone: false };
  var body = JSON.stringify(task);
  console.log("Posting: " + body);
  fetch(`api/task`, {
 	  headers: {
		'Accept': 'application/json, text/plain, */*',
		'Content-Type': 'application/json'
	  },
	  method: "POST",
	  body: body
  }).then(function(res) {
	  return res.json();
  }).then(cb);
}

function update(id, title, selected, cb) {
  var task = { title: title, isDone: selected };
  var body = JSON.stringify(task);
  console.log("Updating " + id + ": " + body);
  fetch(`api/task/${id}` , {
	  headers: {
		'Accept': 'application/json, text/plain, * / *',
		'Content-Type': 'application/json'
	  },
	  method: "PUT",
	  body: body
  }).then(function(res) {
	  return res.json();
  }).then(cb);
}

function remove(id, cb) {
  fetch(`api/task/${id}` , {
 	  headers: {
		'Accept': 'application/json, text/plain, * / *',
		'Content-Type': 'application/json'
 	  },
 	  method: "DELETE",
  }).then(function(res) {
	  return res.json();
  }).then(cb);
}

const Client = { retrieve, add, update, remove };
export default Client;