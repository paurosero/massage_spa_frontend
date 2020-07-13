class Appointments {
  constructor() {
    console.log("appointments are loaded")
    this.appointments = []
    this.adapter = new ApiAdapter()
    this.getAllAppointments()
    // this.client = new Client()
    // this.appointment = new Appointment()
    // this.therapist = new MassageTherapist()
    this.bindVariables()
    // this.addEventListeners()
  }

  bindVariables(){
    this.apptsList = document.querySelector('#appointments-list');
  }

  getAllAppointments() {
    this.adapter.fetchApi("appointments", { method: 'GET' }, this.appointments, Appointment)
    .then(() => { this.renderLi() })
  }

  static findAppointment(id) {
    return Appointments.find((appointment) => appointment.id === id)
  }

  renderLi(){
    this.apptsList.innerHTML = this.appointments.map(appt => `<li data-id="${appt.id}">Appointment ${appt.id}</li>`).join("")
  }

}