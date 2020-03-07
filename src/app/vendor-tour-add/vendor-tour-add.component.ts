import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { VendorServiceService } from "../ApiServices/vendor/vendor-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'vendor-tour-add',
  templateUrl: './vendor-tour-add.component.html',
  styleUrls: ['./vendor-tour-add.component.css']
})
export class VendorTourAddComponent implements OnInit {

        public test = "ok";


        public checkLoginStatus(){


        }


//validation of input fields. (give a notification to the user if any of the fields is blank)

//check validation rules according the steps of tourAdding. the numbers (1,2,3) represent the steps

public validationRules = {

        1 : ["Name" , "DepartureLocation" , "Destination" , "DepartureTime" , "ArrivalTime" , 
        
        "AdultPrice" , "ChildPrice" , "InfantPrice" , "Description" , "currentTourImgs"],

        2 : ["Programs"],

        3 : ["Services"]


}

public validationMessages = {
        Name : "bos buraxmaq olmaz",
        DepartureLocation : "bos buraxmaq olmaz",
        Destination : "bos buraxmaq olmaz",
        DepartureTime : "bos buraxmaq olmaz",
        ArrivalTime : "bos buraxmaq olmaz",
        AdultPrice : "bos buraxmaq olmaz",
        ChildPrice : "bos buraxmaq olmaz",
        InfantPrice : "bos buraxmaq olmaz",
        Description : "bos buraxmaq olmaz",
        Programs : "bos buraxmaq olmaz",
        Services : "bos buraxmaq olmaz",
        currentTourImgs : "bos buraxmaq olmaz",
}

//check if length of specific input field corresponds its maximum length

public validationLength = {

        Name : { min : 3, max : 50 },
        
        DepartureLocation : { min : 3, max : 20 },

        Destination : { min : 3, max : 20 },
        
        DepartureTime : { min : 3, max : 20 },

        ArrivalTime : { min : 3, max : 20 },

        AdultPrice : { min :1, max : 20},

        ChildPrice : { min :1, max : 20},

        InfantPrice : { min :1, max : 20},

        Description : { min :3, max : 500},

}


//make opacity 1 of validation error message container of specific input field,
//according the values below

//e.g. if Name is true then a error message will be show (opacity will be 1) below the name input field

public hasValidationError = {

        Name : false,
        DepartureLocation : false,
        Destination : false,
        DepartureTime : false,
        ArrivalTime : false,
        AdultPrice : false,
        ChildPrice : false,
        InfantPrice : false,
        Description : false,
        Programs : false,
        Services : false,
        currentTourImgs : false,
        acceptTermsCheckbox : false

}



public resetValidationMessages(){

        this.validationMessages = {
                Name : "",
                DepartureLocation : "",
                Destination : "",
                DepartureTime : "  ",
                ArrivalTime : "  ",
                AdultPrice : "",
                ChildPrice : "",
                InfantPrice : "",
                Description : "" ,
                Programs : "",
                Services : "",
                currentTourImgs : "",
                
        }



        this.hasValidationError = {

                Name : false,
                DepartureLocation : false,
                Destination : false,
                DepartureTime : false,
                ArrivalTime : false,
                AdultPrice : false,
                ChildPrice : false,
                InfantPrice : false,
                Description : false,
                Programs : false,
                Services : false,
                currentTourImgs : false,
                acceptTermsCheckbox : false
        
        }
}


public validateForm(step){

        console.log(step);

        this.resetValidationMessages();

        var hasError = false;



        this.validationRules[step].map( data =>{


                //if input field is empty (length < 1)
                
                console.log(this.tourData[data].length);
                if (this.tourData[data].length < 1){


                        this.validationMessages[data] ="bos buraxmaq olmaz";

                        this.hasValidationError[data] = true;

                        
                        hasError = true;
                }

                if( (this.validationLength[data] && this.tourData[data].length && this.tourData[data].length < this.validationLength[data].min) || ( this.validationLength[data] && this.tourData[data].length && this.tourData[data].length > this.validationLength[data].max) ){

                        console.log(this.tourData[data] + " : " + this.tourData[data].length + "\n");

                        console.log(this.validationLength[data]);




                        this.validationMessages[data] ="uzunluq 3-20 arası olmalıdır";

                        this.hasValidationError[data] = true;

                        hasError = true;
                }
                
        })

        return hasError;
        

}








// render specific vendorTour page according the values below:

public steps = {

  vendorTourCreate : true,

  vendorTourActivities : false,

  vendorTourAddActivity : false,

  vendorTourService : false,

  vendorTourFinish : false


}


//programs will be sent seperately
public programData : any = []

public addPrograms(programs){

        if(programs.filter( data => data && data.length < 1).length > 0){

                return;
        }


        var formattedPrograms = {

                "programTypeId": Number(programs[0]),
                "name" : programs[1],
                "description" : programs[2],
                "startDate" : programs[3],
                

        }

        this.tourData["Programs"].push(formattedPrograms);

        console.log(this.tourData.Programs);

}


public toggleStep( stepToDisable , stepToEnable , step? , programs?){



        console.log(this.tourData);


        //add programs into the programContainer in the page

        //(for displaying content. programs will be sent seperately to a seperate url)

        if(programs){
                this.addPrograms(programs);
        }


        if ( step  && this.validateForm(step) ){  //if validation method returns true it means there is a error

                return;
        }





  
  this.steps[stepToDisable] = false;

  this.steps[stepToEnable] = true;
}


public termsModalIsOpen = false;

public openModal(){

  this.termsModalIsOpen = !this.termsModalIsOpen;

}


// the text of the 'accept terms & conditions' modal which will be dynamically added into page

public terms = `

Bu şərtlər Ziqzaq.az veb saytı vasitəsilə sifariş edilmiş xidmətlərə şamil olunur,
lakin
bütünrezervasiyalar təyin olunmuş turizm agentlikləri (“Operator” və ya “Turizm
Agentikləri”) tərəfindən təqdim və idarə olunur.


Ziqzaq.az veb saytı hər bir təchizatçının veb səhifəsində qeyd olunan daxili qayda
vəşərtlərindən əlavə özünün aşağıdakı qayda və şərtlərini birlikdə nəzərdə tutur.


Ziqzaq.az şirkəti (bundan sonra ziqzaq.az), Turizm Agentikləri
        vəistifadəçilər
        arasında vasitəçidir
Bütün tərəflərə münasibətdə tam şəffaflığın qorunub saxlanması və
        bütüntərəflərin
        təklif olunan xidmətlərə etibar etməsi Ziqzaq.az üçün sondərəcədə vacib
        əhəmiyyət
        kəsb edir. Bu məqsədlə, bu ümumi şərt vəmüddəalar istifadəçilər və Ziqzaq.az
        arasında bütün işgüzar münasibətlərüçün əsas kimi hesab olunur.

Ziqzaq.az saytında istifadəçilərə yerləşdirilən transfer, sərnişindaşıma və
        turxidmətləri partnyor Turizm Agentikləri tərəfindən təşkil olunur.

Ziqzaq.az saytı burada nəşr olunan/yerləşdirilən bütün məlumatlarıyoxlamağı
        və
        yoxlamaq üçün lazımi diqqət və məsuliyyəti öz üzərinəgötürür, lakin saytda
        qeyd
        olunan məlumatlar və ya səhv informasiyaTurizm/kruiz Agentikləri tərəfindən
        verildiyi üçün hər hansı bir uyğunsuzluqyaranması halında istifadəçi
        qarşısında
        məsuliyyət daşımır.

Ziqzaq.az Turizm/kruiz Agentikləri tərəfindən müəyyən edilmiş qiymətlərinvə
        ya
        xidmətlərin dəyişməsi üçün məsuliyyəti qəbul etmir.

Qiymətlər göstərilən tarixlər üçün etibarlıdır və Turizm/kruiz
        Agentikləritərəfindən
        dəyişiklik olduğu təqdirdə yenilənə bilərlər.


Maddi məsuliyyət, zərərin ödənilməsi

Məhsulun keyfiyyət öhdəliyi haqqında qanun çərçivəsində maddiməsuliyyəti
        Turizm/kruiz Agentikləri daşıyır.


Ziqzaq.az hər hansı bir xəsarət, ziyan, itki, gecikmə, əlavə xərclər və
        yabirbaşa və
        ya dolayı yolla zərər və ya bir başa onun nəzarətində olmayan vəya qarşısı
        alına
        bilməyən digər hadisələr üçün məsuliyyət daşımır. Eynizamanda, müharibə,
        vətəndaş
        iğtişaşları, yanğın, daşqınlar, qeyri-adi şiddətlihava, təbiət hadisələriç
        hökumət
        və ya digər hakimiyyət orqanlarının aktları,maşın və ya avadanlıq və ya qəza
        hadisələri və ya qəzalar nəticəsindədəymiş zərərə görə məsuliyyət daşımır.

Ləğv siyasəti:

Turizm agentliyi tərəfindən təqdim edilən, artıq razılaşdırılmış
        tətilinizdə(turlarda) dəyişiklik və ya ləğv etmək zəruri sayıla bilər, bu
        halda
        bütünşərtlər Turizm Agentliyi ilə razılaşdırılır və Ziqzaq.az heç bir
        məsuliyyətdaşımır.

Digər məsələlər


Tərəflər arasında yaranmış mübahisələr Azərbaycan Respublikasınınqüvvədə
        olan
        qanunvericiliyinin normaları ilətənzimlənəcək və mübahisələrəAzərbaycan
        Respublikasının
        müvafiq məhkəmələrində baxılacaq.
`





// API operations start

public tourServices; //tour service (flight ticket,relocation) 

public getTourService(){

        this.VendorService.getTourService().subscribe( data => {
                
                this.tourServices = data;

                this.tourServices = this.tourServices.output;

                console.log(data);
        })

}

public programType //fealiyyetler

public getTourProgramType(){

        this.VendorService.getTourProgramType().subscribe( data => {

                this.programType = data;

                this.programType = this.programType.output;
        })
}

public tourData = {

        Name : "",
        DepartureLocation : "",
        Destination : "",
        DepartureTime : "",
        ArrivalTime : "",
        AdultPrice : "",
        ChildPrice : "",
        InfantPrice : "",
        Services : [],
        Description : "",
        VendorId : 1,
        IsInternal : false,
        IsExternal : false,
        MapLatitude : "32",
        MapLongitude : "33",

        //temporary key. for only form validation
        //(programs will be sent seperately to a seperate url)

        Programs : [],


        //images will be sent as a formdata via help of extractImgFile function
        //the values below are only for form validation

        currentTourImgs : "",

        prevTourImgs : ""


}


// temporary method ( will be changed in the future )

public addService(service){
        
        // console.log(service);
        this.tourData["Services"].push(service);

        console.log(this.tourData.Services);
}



//if vendor accepts terms (checks the checkbox on the last step)
//make the value of the variable below true; (will be used for validation  )

public vendorAcceptedTerms = false;

public vendorTermsAccept(termsCheckbox){

        var checkBox = termsCheckbox;

        this.vendorAcceptedTerms = checkBox.checked;
}



//programs need to be sent seperately

// public sendPrograms(tourid){

//         this.programData[0]["tourId"] = tourid;

//         this.VendorService.sendPrograms(this.programData).subscribe( data => console.log(data));

// }

public lastStep = false;

public addTour(currentImgs , prevTourImgs ){

        // console.log(this.vendorAcceptedTerms);


        this.hasValidationError["acceptTermsCheckbox"] = false;

        //check if acceptTerms checkbox checked if not notify vendor with an error

        if(!this.vendorAcceptedTerms){

                this.hasValidationError["acceptTermsCheckbox"] = true;

                return;
        }


        this.lastStep = true;


        this.VendorService.addTour( currentImgs , prevTourImgs , this.tourData ).subscribe( data => {

                var retreivedData : any = data;

                var tourId = retreivedData.output;

                if( retreivedData.isSuccess ){

                        console.log("ok");
                        this.toggleStep("vendorTourService","vendorTourFinish",3);
                }
        } );
        // .subscribe( data => console.log(data));

}

public handleAuth(){

        //backend-de access token validation yazilacaq.
        //vendor id ve token gonderilecek ugurlu olarsa auth edilib eks halda auth edilmeyib
        
        var token = localStorage.getItem("vendorToken");

        var phoneNumber = localStorage.getItem("vendorPhoneNumber");

        var vendorInfo = {
                "token" : token,
                "phoneNumber" : phoneNumber
        }
    
        if(!token){
    
          this.route.navigate(["vendorLogin"]);
          
        }

        this.VendorService.checkLoginStatus(vendorInfo).subscribe( data => {

                var validationData : any = data;

                if(!validationData.isSuccess){
                        
                        this.route.navigate(["vendorLogin"]);
                }

        },
        
        error => this.route.navigate(["vendorLogin"]))

        
      }



// API operations end

public currentImgPreview :any = [];

public tempPreview = [1,2,3]; //will be looped until the currentImgPreview has a value

// extract uploaded img files as a preview from a file input
public extractImgFile( inputFiles , imgPreviewCurrent){


        //get id of file input in order to determine

        //which input is sent (currentTourImgs or prevTourImgs)

        //and make this.tourData value longer than 0 if any image was uploaded

        //(for validationError message) check last line of the function

        var inputId = inputFiles.id;
      
        var length = inputFiles.files.length > 3 ? 3 : inputFiles.files.length ;

        if(length < 1){
                return;
        }


        var objectBackground;

        

        for (let x=0; x < length; x++){

      
                var reader = new FileReader();
      
                reader.onload = (e) => {
      
                this.currentImgPreview.push(e.target);

                objectBackground = URL.createObjectURL(inputFiles.files[x]);

                imgPreviewCurrent[x].style.cssText="background-image:url('" + objectBackground + "');background-repeat: no-repeat;background-size: cover;"

                // console.log(this.currentImgPreview);

                }
                
      
      
                reader.readAsDataURL(inputFiles.files[x]);
        }


        //make value length longer than 1

        //to remove validationErroMessage when 'Təsdiqlə' button pressed again after validation error has ocurred
        this.tourData[inputId] = true;


      
      }
      
      


  constructor( 
          
        public http : HttpClient,

        public VendorService : VendorServiceService,

        public route : Router
        
        ) { }

  ngOnInit() {

        this.handleAuth();

        this.getTourService();

        this.getTourProgramType();
  }

}
