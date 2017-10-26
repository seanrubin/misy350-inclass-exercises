console.log("hello");

//arrays
let bucket_list=["learn to fly", 67, "go to Japan"];
console.log(bucket_list[3]);

//for loop
for (let i = 0; i < bucket_list.length; i++) {
  console.log(bucket_list[i]);
}

let imdb_movie_list=[
  "Moonlight",
  "Birdman",
  "Forest Gump",
  "The Dark Knight",
  "Furious 7"
];

let ranker_movie_list=[
  "Furious 7",
  "Forest Gump",
  "Iron Giant",
  "Batman",
  "Terminator 2"
];

for (let i = 0; i < imdb_movie_list.length; i++) {
  for (let j = 0; j < ranker_movie_list.length; j++) {
    if (imdb_movie_list[i]==ranker_movie_list[j]) {
      console.log(imdb_movie_list[i]);
    }
  }
}

//while loop
let balance=10000;
let years=0;
while (balance<1000000) {
  balance+=balance*0.07;
  years++;
}
console.log(years);

//iterators
imdb_movie_list.forEach(movie => console.log("-"+movie));

let new_list=imdb_movie_list.filter(movie=>movie.slice(0,3)=="The");
new_list.forEach(movie => console.log("-"+movie));
