

// let a = {
//     name : "hi",
//     lang : 'Java'

// }
// console.log(a)

// class hi {

//     constructor(place,add) 
//     {
//         this.places = place
//         this.addes= add
//         console.log('constturucwrw'+place+add);
//     }

//     submmit(ok) 
//     {

//         alert(this.name + ' : submmit'+ok);
//     }

//     make()
//     {
//         alert(this.name2 +' : make');
//     }

//     fill(value,value2)
//     {
//         this.name = value
//         this.name2 = value2

//     }
// }   

// class hello extends hi 
// {
//     eat()
//     {
//         console.log('ffff')
//     }
// }
// a =new hi('india','outofindia')     

// a.submmit(4)
// a = new hello

// a.eat()
// new hello.eat()
// new hi()

// let harr = new hi()
// harr.fill('okay','hiiihih')
// harr.submmit()
// harr.make()
// // hi.submmit()

// class hi {
//     constructor() 
//     {
       
//         console.log('constructor');
//     }

//     submmit() 
//     {
//         console.log('submmit');
        
//     }
// }

// class helllo extends hi 
// {
    // constructor()
    // {
    //     super();
    //     console.log('2 wala');
    // }
//     neww()
//     {

//         console.log('nwewewe')
//     }
//     // submmit()
//     // {
//     //     super.submmit()
//     //     console.log('2 submit');
//     // }
// }

// // new hi()
// // new hi()
// a = new helllo()
// a.neww()

function mul(num)
{
    for(i=1;i<=10;i++)
    {
        document.write(`${num} into ${i} = ${num*i}`);
        document.write("<br>");
    }

    document.write("<br>");


}
mul(2);
// document.write("<br>");
mul(3);
