const redux = require("redux");


function addNewContact(contact) {
    return {
        type: "ADD_NEW_CONTACT",
        payload: contact
    }
}

function removeContact(contact) {
    return {
        type: "REMOVE_CONTACT",
        payload: contact
    }
}

const initialState = {
    contactList: [],
    contacts: 
    {
        name: "",
        phone: "",
        email: ""
    }

}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_NEW_CONTACT":
            return {
                ...state,
            
                contacts: action.payload,
                
                contactList: [...state.contactList, action.payload]
            }
        case "REMOVE_CONTACT": {
        const updatedArr = state.contactList.filter(contact => contact !== action.payload) 
        console.log(action.payload)
        console.log(updatedArr)
    
            return {
                ...state,
                contactList: updatedArr
            }
        }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

// ADD CONTACT
store.dispatch(addNewContact({name: "Dave Soenso", phone: "208-244-2223", email: "BigDave@gmail.com"}))
store.dispatch(addNewContact({name: "Mark Somebody", phone: "555-889-9998", email: "MarkieMark@gmail.com"}))
store.dispatch(addNewContact({name: "Jimmy Jim", phone: "431-334-2343", email: "lil'Jimmy@gmail.com"}))
store.dispatch(addNewContact({name: "Stephanie Girl", phone: "234-234-2343", email: "itsyogirlsteph@gmail.com"}))

// DELETE CONTACT
store.dispatch(removeContact({name: "Dave Soenso", phone: "208-244-2223", email: "BigDave@gmail.com"}))
store.dispatch(removeContact({name: "Jimmy Jim", phone: "431-334-2343", email: "lil'Jimmy@gmail.com"}))