# Kondratiev Evgeniy
**Junior Web Developer**
## Contact information
* Address:        Russia, Nizhniy Novgorod
* Phone:          +7 909 295 25 12
* Email:          kondratiev.evg@gmail.com

## About Me
* Date of birth:  26 January 1990
* Marital status: Single

I've been worked in IT industry since 2010 as IT Technician/Support Engineer. I have started learn coding and Frontend technologies since 2019 mostly by self education - read books, manuals, watched educational videos. Professional Web Developer - this is the main of my goals for next few years. I study and practise every day to achieve my goals. I consider myself well motivated and purposeful because I know that: 
> A smart face is not yet a sign of intelligence. All the stupid things in the world are committed with this facial expression... Smile gentlemen, smile. - The one Munchausen (1979)

## Basic skills
* HTML5
* CSS3
* SASS
* JavaScript
* WEBPACK 5
* REACT, REACT-REDUX
* Bootstrap

## Code examples
**Using closures to share class state**: In object-oriented programming, it is sometimes useful to have private shared state among all instances of a class; in other languages, like ruby, this shared state would be tracked with a class variable. In javascript we achieve this through closures and immediately-invoked function expressions.
In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.
```
const Cat = (function () {
  let countOfinstances = 0;
  let summWeight = 0
  
  function countInstances(){
    countOfinstances++
  }

  function catConstructor(name, weight){
    if(!name || !weight){
      throw new Error('No name or weight');
    }
    this.name = name;
    this._weight = weight
    Object.defineProperty(this, 'weight', {
      get: function(){
        return this._weight
      },
      set: function(value){
        summWeight -= this._weight
        this._weight = value
        summWeight+=this._weight
      }
    })
    countInstances()
    summWeight+=this._weight
  }

  catConstructor.averageWeight = function(){
        return summWeight/countOfinstances
    }
  return catConstructor
  
}());
```
* https://github.com/evkondr/assets-center
* https://github.com/evkondr/CYBERCHAT

## Education
* Humanitarian Institute (Nizhniy Novgorod branch) 2007 - 2013, Faculty of Information Technology, Specialization: Informatics-economist

## Trainings
* Nizhny Novgorod State University N.I. Lobachevsky, JavaScript - Advanced, 2019

## Languages
* Russian - Native
* English - B1  Intermediate (According to the online test at EFset. [Certificate](https://www.efset.org/cert/GKMBE2))