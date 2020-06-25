class MassageTherapist {
    constructor(therapistDataObj) {
        this.id = therapistDataObj.id
        this.name = therapistDataObj.name
        this.sex = therapistDataObj.sex
        this.rating = therapistDataObj.rating
        MassageTherapist.allTherapists.push(this)
    }

    capitalize = (name) => {
        if (typeof name !== 'string') return ''
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    // static findTherapist(id) {
    //     return this.allTherapists.find((therapist) => therapist.id === id)
    // }
    
    // static updateTherapist(updatedTherapistData) {
    //     const therapistToUpdate = this.findTherapist(updatedTherapistData.id)
    //     therapistToUpdate.massage_therapist = updatedTherapistData.massage_therapist
    //     therapistToUpdate.client = updatedTherapistData.client
    //     therapistToUpdate.modality = updatedTherapistData.modality
    //     therapistToUpdate.appointment_time = updatedTherapistData.appointment_time
    //     therapistToUpdate.special_request = updatedTherapistData.special_request
    //     return therapistToUpdate
    // }
    
    renderSpan() {
        return `
            <li data-id="${this.id}">
                <p>Name: ${this.capitalize(this.name)}</p>
                <p>Sex: ${this.sex}</p>
                <p>Rating: ${this.rating}</p>
            </li>
        `
    }
} 

MassageTherapist.allTherapists = []