class Movie{
    constructor(name,studio,rating){
        this.name = name;
        this.studio = studio;
        this.rating = rating;
    if(rating ==undefined){
        this.rating="pg"
    }
    else{
        return this.rating
    }
    }
getpgMovie(){
var result=array.filter((element=>element.rating=="pg"))
return result;
}

}
var obj1=new Movie("Love Today","AGS")
var obj2=new Movie("Dasavathaaram","Aascar films","pg13")
var obj3=new Movie("Raja Rani","Box office","pg13")
var obj4=new Movie("Aadhavan","Red giant")
var array=[obj1,obj2,obj3,obj4]
console.log(obj1.getpgMovie())
// output:
// movie.js:24 
// (2) [Movie, Movie]
// 0: Movie {name: 'Love Today', studio: 'AGS', rating: 'pg'}
// 1: Movie {name: 'Aadhavan', studio: 'Red giant', rating: 'pg'}
// length:2

console.log(obj2,obj3,obj4)

// output:obj2:
// Movie {name: 'Dasavathaaram', studio: 'Aascar films', rating: 'pg13'}
// name: "Dasavathaaram"
// rating: "pg13"
// studio: "Aascar films"
// [[Prototype]]:Object
// ------------------------------------------------------
// output:obj3:
// Movie {name: 'Raja Rani', studio: 'Box office', rating: 'pg13'}
// name: "Raja Rani"
// rating: "pg13"
// studio: "Box office"
// [[Prototype]]: Object
// -------------------------------------------------------
// output:obj3:
// Movie {name: 'Aadhavan', studio: 'Red giant', rating: 'pg'}
// name: "Aadhavan"
// rating:"pg"
// studio:"Red giant"
// [[Prototype]]:Object

