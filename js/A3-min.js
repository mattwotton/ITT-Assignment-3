let dde=document.documentElement;dde.addEventListener("mousemove",(e=>{let t=dde.offsetWidth,d=dde.offsetHeight;dde.style.setProperty("--mouseX",2*e.clientX/t+"%"),dde.style.setProperty("--mouseY",2*e.clientY/d+"%")}));