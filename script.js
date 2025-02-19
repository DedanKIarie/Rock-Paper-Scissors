function randomise() {

    //first name process 
    let FirstNames = ["John", "Alvin", "Eddie", "Dedan","Ivy", "Grace", "James","Imani", "George", "Felix" ];
    let Firstno = Math.ceil(Math.random()*9);

    let Firstname = FirstNames[Firstno];
    //second name process
    let SecondNames = ["Kimani", "Wambui", "Njoroge", "Mwangi","Karanu", "Waithanji", "Wanjiku","Njeri", "Mbugua", "Macharia" ];
    let SecondNo = Math.ceil(Math.random()*9);

    let Secondname = SecondNames[SecondNo];

    //result provider
    let r = document.getElementById("result");
    r.innerText = Firstname +" "+ Secondname + " ("+ Firstno+", "+ SecondNo + ")";

    if (Firstno == SecondNo) {
        let par = document.createElement("p");
        par.innerText = "Nice name you got there :-) "+ Firstname +" "+ Secondname + " ("+ Firstno+", "+ SecondNo + ")";
        document.getElementById("winner").appendChild(par);

    }


}