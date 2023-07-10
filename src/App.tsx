import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Interface } from 'readline';
import { resourceUsage } from 'process';
import Data from './data.json'
import TestCpmponent from './TestCpmponent';

const name = "hello"

let nameChange = "hello"
nameChange = "hello2"

let username:string = "hello"
let dummynum:number = 1
let flag :boolean = false

let array1 = [true,true, false]
//numとstrのどちらでも入れることができる
let array2 = [0, 1, "hello"]

interface NAME {
  first: string;
  last: string|null;//null許容
}

let Name:NAME = {first:"AAA",last:"BBB"}

const func1 = (x:number, y:number):number =>{
  return 0
}

//Intersection Types
type PROFILE ={
  age:number;
  city:string;
}

type LOGIN ={
  username:string;
  password:string;
}

type USER = PROFILE & LOGIN;

const user:USER ={
  age:20,
  city:"A",
  username:"B",
  password:"C"
}

//UNION types
let value:boolean | number

let arrayUni:(number|string)[];
arrayUni = [0,1,2,"hello"];


//Literal Types
let company:"A"|"G"|"O";
company = "A";

//typeof
let msg :string ="HI";
let msg2:typeof msg = "1";

let animal ={cat:"small cat"};
let newAnimal: typeof animal = {cat:"big cat"};

//keyof
type KEYS ={
  primary:string;
  secondary:string;
}

let key: keyof KEYS = "primary"

//typeof + keyof

const SPORTS = {
  soccer:"S",
  baseball:"B"
}

let KeySports : keyof typeof SPORTS;
KeySports = "soccer";

//列挙型
enum OS{
  Windows,
  Mac,
  Linux
}
interface PC{
  id: number;
  OStype: OS;
}

const PC1 :PC = {
  id:1,
  OStype: OS.Windows,
};

//型の互換性
const comp1 = "test1";
let comp2:string = comp1;

let funcComp1 = (x:number) =>{};
let funcComp2 = (x:string) =>{};
funcComp1 = funcComp1

//Generics　ジェネリックス
interface GEN<T>{
  item:T;
}

const gen0: GEN<string> = {item:"Items"}


interface GEN1<T = string>{
  item:T;
}
const gen1 :GEN1 = {item:"1"}

interface GEN2<T extends string |number>{
  item:T;
}
const gen2 : GEN2<string> = {item:"W"};

function funcGEN<T>(props:T){
  return {item:props}
}

const gen3 = funcGEN<string|null>("GGG")

function funcGEN1<T extends string | null>(props:T){
  return{value:props};
}
const gen4 = funcGEN1(null);

interface Props{
  price: number;
}
function funcGen3<T extends Props>(props: T){
  return{value: props.price}
}
const gen5 = funcGen3({price: 10});

const funcGEN4 = <T extends Props>(props: T) =>{
  return{value: props.price}
}

//JSON型推論
type USERS = typeof Data;



const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestCpmponent text="hello from App"/>
      </header>
    </div>
  );
}

export default App;
