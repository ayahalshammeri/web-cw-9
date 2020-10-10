// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى
// let ayah = document.getElementById("image");
console.log(image.src)
// image.src = "./images/sun.jpg"
// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر

// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1
function planetSwitcher() {
    let title = document.getElementById("caption");
    let body = document.getElementById("body");

    if (title.innerHTML == "القمر") {
        title.innerHTML = "الشمس";
        image.src = "./images/sun.jpg";
       document.body.style.backgroundColor = "#fdbb2d";
    } else{
        title.innerHTML = "القمر";
        image.src = "./images/moon.jpg";
        document.body.style.backgroundColor = "#2266c3";
    }
    
}
// 4

// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

/*  الوضع الليلي
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/
