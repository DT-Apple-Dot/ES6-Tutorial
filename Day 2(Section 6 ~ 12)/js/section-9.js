//Map
let john = { name: 'John Doe' },
  lily = { name: 'Lily Bush' },
  peter = { name: 'Peter Drucker' };

let userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [peter, 'subscriber'],
]);

for (const user of userRoles.keys()) {
  console.log(user.name);
}

for (let role of userRoles.values()) {
  console.log(role);
}

//set
let roles = new Set();
roles.add('admin')
    .add('editor')
    .add('subscriber');

for (let role of roles) {
    console.log(role);
}