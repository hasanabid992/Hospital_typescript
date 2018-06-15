class patient_info {
	 
	 private PatientName:string;
	 private P_FatherName_HusbandName :string;
	 private PatientNicNo:number;
	 private patientWard:string[];
     private patientIlls:string[];
     private patientDoctor:string[];
     private date:any = new Date();
     private random_Doctor:any;
     private random_ward:any;
     private disease_option:any;

	 setp_info(){
	 	
	 	
	 	this.PatientName=prompt('Enter Patient Name');
	    this.P_FatherName_HusbandName=prompt('Enter Patient Father/Husband Name');
	    this.PatientNicNo=+prompt('Enter Your Nic no with using - symbol ');
        this.patientWard=['Emergency','Operation theater','Accident ward'];
        this.patientIlls=['Flu','Fever','Bp'];
        this.patientDoctor=['zaheer','Danish','Ahmed','Abbas','Sarwar'];
       	this.random_Doctor = Math.floor(Math.random()* this.patientDoctor.length);
       	this.random_ward = Math.floor(Math.random()* this.patientWard.length);
       	this.disease_option =+ prompt('Enter 0 For Flu : 1 For Fever : 2 For BP');	
	 }
	 getp_info(){

	 	console.log("Your name : "+this.PatientName);
	 	console.log("Your Patient Father/Husband Name : "+this.P_FatherName_HusbandName);
	 	console.log("your Nic no :" +this.PatientNicNo);
        console.log('Date and Time of Registration : '+this.date);
        console.log('Your Doctor is : '+this.patientDoctor[this.random_Doctor]);
        console.log('Your ward is : '+this.patientWard[this.random_ward]);
       
        if (this.disease_option == 0 || this.disease_option == 1 || this.disease_option == 2)
        {
        	console.log('You had : '+this.patientIlls);
        }
        else {
        	
        	console.log(`${alert('Error Kindly Follow the Instructions')}`);

        }


	 }
   

}

class Doctor_Appointment extends patient_info {
	
	private DrApp:any=new Date();
	private DrAppFee:any;
	private DrFeePaymentOption:any;

   setDr_Appointment(){
          this.DrAppFee=prompt('Enter 1 for Payment Via Cash : 2 For Via CreditCard : 3 for Via DebitCard');
          
   }
   getDr_Appointment(){

   	   console.log('Appointment time of Doctor is :  ' +this.DrApp);
       if (this.DrAppFee == 1)
       {
       	console.log('You Choose Payment via Cash');
       	console.log('Kindly pay your Cash Amount in Counter');
       }
       else if (this.DrAppFee == 2) 
       {
       	
       	console.log('You Choose CreditCard Option');
       	var cre =+ prompt('Enter Your Credit Card Pin Number');
       	if (cre != null)
       
       	 {
           alert('Your Amount has been Submitted Kindly Collect your Slip from Counter');
         }

       }
       else if(this.DrAppFee == 3 ) {
        
        console.log('You Choose DeditCard Option');
       	var Deb =+ prompt('Enter Your Dedit Card Pin Number');

        if (Deb != null)
       
       	 {
           alert('Your Amount has been Submitted Kindly Collect your Slip from Counter');
         }

       }
       else {
       	alert('Invalid Command');
       }
   }
}


var show:Doctor_Appointment = new Doctor_Appointment();


show.setp_info();
show.setDr_Appointment();
show.getp_info();
show.getDr_Appointment();


