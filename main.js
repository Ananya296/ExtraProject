name_of_the_student=[];

function submit(){
    var name_1 = document.getElementById("Name_of_Student_1").value;
    var name_2 = document.getElementById("Name_of_Student_2").value;
    var name_3 = document.getElementById("Name_of_Student_3").value;
    var name_4 = document.getElementById("Name_of_Student_4").value;

    name_of_the_student.push(name_1);
    name_of_the_student.push(name_2);
    name_of_the_student.push(name_3);
    name_of_the_student.push(name_4);

    console.log(name_of_the_student);
    document.getElementById("display_name").innerHTML = name_of_the_student;

    document.getElementById("submit1").style.display="none";
    document.getElementById("sort1").style.display="inline-block";

}

function sorting(){
    name_of_the_student.sort();
    console.log(name_of_the_student);
    document.getElementById("display_name").innerHTML = name_of_the_student;
}