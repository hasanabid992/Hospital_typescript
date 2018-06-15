var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var patient_info = /** @class */ (function () {
    function patient_info() {
        this.date = new Date();
    }
    patient_info.prototype.setp_info = function () {
        this.PatientName = prompt('Enter Patient Name');
        this.P_FatherName_HusbandName = prompt('Enter Patient Father/Husband Name');
        this.PatientNicNo = +prompt('Enter Your Nic no with using - symbol ');
        this.patientWard = ['Emergency', 'Operation theater', 'Accident ward'];
        this.patientIlls = ['Flu', 'Fever', 'Bp'];
        this.patientDoctor = ['zaheer', 'Danish', 'Ahmed', 'Abbas', 'Sarwar'];
        this.random_Doctor = Math.floor(Math.random() * this.patientDoctor.length);
        this.random_ward = Math.floor(Math.random() * this.patientWard.length);
        this.disease_option = +prompt('Enter 0 For Flu : 1 For Fever : 2 For BP');
    };
    patient_info.prototype.getp_info = function () {
        console.log("Your name : " + this.PatientName);
        console.log("Your Patient Father/Husband Name : " + this.P_FatherName_HusbandName);
        console.log("your Nic no :" + this.PatientNicNo);
        console.log('Date and Time of Registration : ' + this.date);
        console.log('Your Doctor is : ' + this.patientDoctor[this.random_Doctor]);
        console.log('Your ward is : ' + this.patientWard[this.random_ward]);
        if (this.disease_option == 0 || this.disease_option == 1 || this.disease_option == 2) {
            console.log('You had : ' + this.patientIlls);
        }
        else {
            console.log("" + alert('Error Kindly Follow the Instructions'));
        }
    };
    return patient_info;
}());
var Doctor_Appointment = /** @class */ (function (_super) {
    __extends(Doctor_Appointment, _super);
    function Doctor_Appointment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DrApp = new Date();
        return _this;
    }
    Doctor_Appointment.prototype.setDr_Appointment = function () {
        this.DrAppFee = prompt('Enter 1 for Payment Via Cash : 2 For Via CreditCard : 3 for Via DebitCard');
    };
    Doctor_Appointment.prototype.getDr_Appointment = function () {
        console.log('Appointment time of Doctor is :  ' + this.DrApp);
        if (this.DrAppFee == 1) {
            console.log('You Choose Payment via Cash');
            console.log('Kindly pay your Cash Amount in Counter');
        }
        else if (this.DrAppFee == 2) {
            console.log('You Choose CreditCard Option');
            var cre = +prompt('Enter Your Credit Card Pin Number');
            if (cre != null) {
                alert('Your Amount has been Submitted Kindly Collect your Slip from Counter');
            }
        }
        else if (this.DrAppFee == 3) {
            console.log('You Choose DeditCard Option');
            var Deb = +prompt('Enter Your Dedit Card Pin Number');
            if (Deb != null) {
                alert('Your Amount has been Submitted Kindly Collect your Slip from Counter');
            }
        }
        else {
            alert('Invalid Command');
        }
    };
    return Doctor_Appointment;
}(patient_info));
var show = new Doctor_Appointment();
show.setp_info();
show.setDr_Appointment();
show.getp_info();
show.getDr_Appointment();
