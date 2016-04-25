var contacts = [
  {'firstName':'John',
    'lastName':'Doe',
    'phone':'(512) 355-0453',
    'email':'johndoe@email.com'},
  {'firstName':'Jane',
    'lastName':'Doe',
    'phone':'(312) 641-2203',
    'email':'janedoe@email.com'},
  {'firstName':'Suzie',
    'lastName':'Smith',
    'phone':'(415) 604-4219' ,
    'email':'suziesmith@email.com'}
  ];
  
function addContact(newContact) {
   contacts.push(newContact);
   return contacts;
}

function listContacts() {
   for (i=0;i<contacts.length;i+=1) {
        console.log(contacts[i].firstName+' '+contacts[i].lastName);
   }
}

function search(name) {
   found = [];
   for (i=0;i<contacts.length;i+=1) {
        if (name===contacts[i].firstName||name===contacts[i].lastName) {
            found.push(contacts[i]);
        }
   }
   return found;    
}