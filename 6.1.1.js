var contacts = ['Matt Smith','Sam Davis','Ashley Jones'];

function findContact(index) {
    if (index > contacts.length || index < 0) {
        console.log('Please enter a parameter between 0 and '+contacts.length);
        return '';
    }
    return contacts[index];
}

function addContact(name) {
    contacts.push(name);
    return contacts;
}

function updateLastContact(newName) {
    contacts.pop();
    addContact(newName);
    return contacts;
}