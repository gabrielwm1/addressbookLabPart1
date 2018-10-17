"use strict"

class AddressBook {
    constructor(){
        this.contacts=[];
    }
    add(info){
        this.contacts.push(info);
    }

    print(){
        
        for (let i = 0; i < this.contacts.length; i++){
            console.log(`${i}. ${this.contacts[i].name} P: ${this.contacts[i].phone} E: ${this.contacts[i].email} R: ${this.contacts[i].relation}`);
        }
        // for (let contact of this.contact){
        //     console.log(contact);
        // }
        
}

    deleteAt(whichIndex) {
        this.contacts.splice(whichIndex, 1);
    }

    deleteByName(name) {
        for (let i = 0; i < this.contacts.length; i++){
            if (this.contacts[i].name === name){
                this.contacts.splice(i,1);

            }
    }
    }
}

class Contact{
    constructor(name, email, phone, relation){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

let addressBook= new AddressBook();

while (true){
    let choice = prompt ("add, print, delete,  quit or deleteName")
    if (choice === "add") {
        const name = prompt ("Enter a name");
        const email = prompt ("Enter an email");
        const phone = prompt ("enter a phone number");
        const relation = prompt ("Enter a relation");
        addressBook.add(new Contact(name, email, phone, relation));
    }

    if (choice === "delete"){
        const whichIndex = prompt ("which index is your contact entry?")
        addressBook.deleteAt(whichIndex);
    }

    if (choice === "print"){
        addressBook.print(); 
    }

    if (choice ==="quit"){
        break;
    }
    if (choice == "deleteName"){
        let nameDel= prompt ("what is their name?")
        addressBook.deleteByName(nameDel);
    }
}
