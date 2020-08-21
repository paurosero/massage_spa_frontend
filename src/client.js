class Client {
    constructor(clientDataObj) {
        console.log("client is loaded")
        this.id = clientDataObj.id
        this.name = clientDataObj.name
        this.address = clientDataObj.address
        this.email = clientDataObj.email
        this.medical_history = clientDataObj.medical_history
        this.renderNewClientForm()
    }

    findClient(id) {
        return Client.allClients.find((client) => client.id === id)
    }

    sortClientName(){

    }

    renderNewClientForm(){
        Forms.renderClientForm();
        this.createNewClient()
    }
    
    createNewClient(e){
        const clientNameInput = document.getElementById("client-name");
        const clientMedicalHistory = document.getElementById("medical_history");
        const clientAddress = document.getElementById("address");
        const clientEmail = document.getElementById("email");
        const createNewClientForm = document.getElementById("create-client")
        
        createNewClientForm.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(e)
            console.log(e.path[1][0].value)
            ApiAdapter.fetchCreateClassObject("clients", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    client: { 
                        name: e.path[1][0].value,
                        medical_history: e.path[1][0].value,
                        address: e.path[1][0].value,
                        email: e.path[1][0].value 
                    }
                })
            }, Client.allClients, Client)
            .then(() => {
                clientNameInput.value = ""
                clientMedicalHistory.value = ""
                clientAddress.value = ""
                clientEmail.value = ""
                this.renderDetails()
            })
        })
            
            
    }
    
    renderDetails() {
        const clientContainer = document.getElementById("")
        return `
            <br><h4>Client Info.</h4>
            <button class="client-edit" id="client-edit-${this.id}">Edit Client</button>
            <button class="client-delete" id="client-delete-${this.id}">Delete Client</button>
            <p>Client: ${this.id}</p>
            <p>Name: ${this.name}</p>
            <p>Medical History: ${this.medical_history}</p>
            <p>Address: ${this.address}</p>
            <p>Email: ${this.email}</p>
        `
    }
}

Client.allClients = []