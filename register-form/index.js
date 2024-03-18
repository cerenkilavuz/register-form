 $("#register_form").validate({
  rules:{
    name:{
        minlength: 2
    },
    surname:{
        minlength: 2
    },
    email:{
        email: true 
    },
    phone:{
        number:true,
        minlength:10,
        maxlength:10
    },
    password:{
        required: true,
        minlength: 6,
        maxlength: 12
    },
    password2:{
        required: true,
        minlength: 6,
        maxlength: 12,
        equalTo: "#password"
    }

  },
  messages: {
   name:{   
      required: "Lütfen adınızı girin.",
      minlength: "Adınız en az 2 harften oluşmalıdır."
   },
   surname:{
      required: "Lütfen soyadınızı girin.",
      minlength: "Soyadınız en az 2 harften oluşmalıdır."
   },
   email: "Lütfen e-posta adresinizi girin.",
   phone: "Lütfen telefon numaranızı girin.",
   password: "6-12 karakter uzunluğunda bir şifre giriniz. ",
   password2: "Geçersiz şifre."

},
 
 submitHandler: function(form) {
    var confirmation = confirm("Girdiğiniz bilgilerin doğru olduğundan emin misiniz?\n" +
        "Ad: " + $("#name").val() + "\n" +
        "Soyad: " + $("#surname").val() + "\n" +
        "E-posta Adresi: " + $("#email").val() + "\n" +
        "Telefon No: " + $("#phone").val() + "\n" +
        "Onaylamak için tamam butonuna basın.");
        
        form.submit();
    if (confirmation) {
        window.location.href = "sayfa2.html";
    }
  }
 });


