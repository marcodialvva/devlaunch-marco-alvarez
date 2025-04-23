interface Contact {
    name: string;
    phone: string;
    email: string;
}

const hash: {[key:string]: {name: string, email:string}} = {}
const contacts =[
    {name: 'Alice', phone: '123-456-7890', email: 'a@gmail.com'},
    {name: 'Bob', phone: '987-654-3210', email: 'b@gmail.com'},
    {name: 'Charlie', phone: '555-555-5555', email: 'c@gmail.com'}
]
const getClientInfo = (contacts:Contact[]) => {

    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        const key = contact.phone;
       const value = {
            name: contact.name,
            email: contact.email
    }
    hash[key] = value
  
}
return hash
}
const results = getClientInfo(contacts)
console.log(results)
