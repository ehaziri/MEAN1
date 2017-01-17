function personConstructor(name){
  var person={
    name: name,
    distance_travel: 0,
    say_name: function(){
      console.log(this.name);
      return this;
    },
    say_something: function(sth){
      console.log(this.name + " says \'" + sth +"\'" );
      return this;
    },
    walk: function(){
      console.log(this.name + " is walking");
      this.distance_travel+=3;
      console.log(this.distance_travel);
      return this;
    },
    run: function(){
      console.log(this.name + " is running");
      this.distance_travel+=10;
      console.log(this.distance_travel);
      return this;
    },
    crawl: function(){
      console.log(this.name + " is crawling");
      this.distance_travel+=1;
      console.log(this.distance_travel);
      return this;
    }
  }
  return person;
}

person = personConstructor('Jay');
person.say_name().say_something("I am cool");
person.walk().run().crawl();

function ninjaConstructor(name, cohort){
  var ninja={
    name: name,
    cohort: cohort,
    belt_level: 'yellow-belt',
    levelUp: function(level_up){
      this.belt_level = level_up;
    }
  }
  for (var key in ninja){
    console.log(key + ": " + ninja[key]);
  }
  return ninja;
}

ninja = ninjaConstructor('Donatello', 'CodingDojo');
ninja.levelUp("red-belt")
