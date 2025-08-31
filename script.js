1       const message = 'i dont know if you'll read this, but i hope you do. \nI just want you to know that, i still love you.\n\nWe both cared. We both loved each other. But the universee had "other plans" for us.\n\nI wonder... if we met at a diffeent point in life.. would the ending of our love story will be different?\n\nWell anyways, i hope you are doing good, even though we're not in each other's life anymore.`;  
2 
3       function showLetter()=> {
4         document.getElementById(introText").style.opacity = 0;
5         document.querySelector(".btn").style.display = "none";
6
7         setTime(() => {
8           const letterBox = document.getElementById("letterBox");
9           const typedText = document.getElementById("typedText");
10          letterBox.style.display = "block";
11          let i = 0;
12  
13          function typewriter() {
14          if (i < message.length) {
15            typedText.innerHTML += message.charAt(i);
16            i++;
17            setTimeout(typeWriter, 30);
18          }
19        }
20
21        typeWriter();
22      }, 600);
23    }  