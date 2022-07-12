

function getMiddle(s)
{
  if (s.length % 2 === 0 ) {
    return s.substring((s.length /2)-1,s.length / 2+1)
  } else {
    return s.substring(s.length /2,s.length / 2+1)
  }
}




let name = "Daniele"
console.log(getMiddle(name))