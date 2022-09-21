//formula I=prt


var p = 7600
var r = 0.048
var t = 9

var I = (p*r*t)

let finalSimple = I.toFixed(2)

console.log("simple interest =" + finalSimple)

// compound interest formula A = P(1+(R/N)^NT
// the principal goes here
var principal = 1500
// rate as a decimal 
var rate = 0.024
// number of years
var years = 3
// number of times per year it compounds
var compoundsPerYear = 1
// meat and potatos of the script
var A = principal*(1 + rate/compoundsPerYear)**(compoundsPerYear*years)

let finalCompound = A.toFixed(2)

console.log("coumpounding interest = finalCompound)
