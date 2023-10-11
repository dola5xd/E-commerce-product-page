let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let input = document.getElementById("num");
let lightbox = document.getElementById("lightbox");
let close = document.getElementById("x");

plus.addEventListener("click", () => {
  input.value = parseInt(input.value) + 1;
});
minus.addEventListener("click", () => {
  input.value = parseInt(input.value) - 1;
  if (input.value < 0) {
    input.value = 0;
  }
});

let mainPic = document.querySelector("#Content");
let pics = document.querySelectorAll(".thumb");

pics.forEach((e, i) => {
  e.addEventListener("click", () => {
    if (i === 0) {
      e.classList.add("active");
      pics[1].classList.remove("active");
      pics[2].classList.remove("active");
      pics[3].classList.remove("active");
      mainPic.setAttribute("src", "./images/image-product-1.jpg");
    } else if (i === 1) {
      e.classList.add("active");
      pics[0].classList.remove("active");
      pics[2].classList.remove("active");
      pics[3].classList.remove("active");
      mainPic.setAttribute("src", "./images/image-product-2.jpg");
    } else if (i === 2) {
      e.classList.add("active");
      pics[0].classList.remove("active");
      pics[1].classList.remove("active");
      pics[3].classList.remove("active");
      mainPic.setAttribute("src", "./images/image-product-3.jpg");
    } else if (i === 3) {
      e.classList.add("active");
      pics[0].classList.remove("active");
      pics[1].classList.remove("active");
      pics[2].classList.remove("active");
      mainPic.setAttribute("src", "./images/image-product-4.jpg");
    }
  });
});
mainPic.addEventListener("click", () => {
  lightbox.classList.remove("hidden");
});
close.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});
let lthumb = document.querySelectorAll(".thumbl");
let lBtn = document.getElementById("left");
let rBtn = document.getElementById("right");
let main = document.getElementById("main");

let count1 = 1;
let count2 = count1;

lthumb.forEach((e, i) => {
  e.addEventListener("click", () => {
    if (i === 0) {
      e.classList.add("active");
      lthumb[1].classList.remove("active");
      lthumb[2].classList.remove("active");
      lthumb[3].classList.remove("active");
      main.setAttribute("src", "./images/image-product-1.jpg");
      count1 = 0;
      count2 = 0;
    } else if (i === 1) {
      e.classList.add("active");
      lthumb[0].classList.remove("active");
      lthumb[2].classList.remove("active");
      lthumb[3].classList.remove("active");
      main.setAttribute("src", "./images/image-product-2.jpg");
      count1 = 1;
      count2 = 1;
    } else if (i === 2) {
      e.classList.add("active");
      lthumb[0].classList.remove("active");
      lthumb[1].classList.remove("active");
      lthumb[3].classList.remove("active");
      main.setAttribute("src", "./images/image-product-3.jpg");
      count1 = 2;
      count2 = 2;
    } else if (i === 3) {
      e.classList.add("active");
      lthumb[0].classList.remove("active");
      lthumb[1].classList.remove("active");
      lthumb[2].classList.remove("active");
      main.setAttribute("src", "./images/image-product-4.jpg");
      count1 = 3;
      count2 = 3;
    }
    if (count1 === 4) {
      count1 = 0;
    }
  });
});

rBtn.addEventListener("click", () => {
  if (count1 === 0) {
    main.setAttribute("src", "./images/image-product-1.jpg");
    lthumb[0].classList.add("active");
    lthumb[1].classList.remove("active");
    lthumb[2].classList.remove("active");
    lthumb[3].classList.remove("active");
    count1 = 0;
    count2 = 0;
  }
  if (count1 === 1) {
    main.setAttribute("src", "./images/image-product-2.jpg");
    lthumb[1].classList.add("active");
    lthumb[0].classList.remove("active");
    lthumb[2].classList.remove("active");
    lthumb[3].classList.remove("active");
    count1 = 1;
    count2 = 1;
  }
  if (count1 === 2) {
    main.setAttribute("src", "./images/image-product-3.jpg");
    lthumb[2].classList.add("active");
    lthumb[0].classList.remove("active");
    lthumb[1].classList.remove("active");
    lthumb[3].classList.remove("active");
    count1 = 2;
    count2 = 2;
  }
  if (count1 === 3) {
    main.setAttribute("src", "./images/image-product-4.jpg");
    lthumb[3].classList.add("active");
    lthumb[0].classList.remove("active");
    lthumb[1].classList.remove("active");
    lthumb[2].classList.remove("active");
    count1 = 3;
    count2 = 3;
  }
  count1 += 1;
  console.log("right: ", count1);

  if (count1 === 4) {
    count1 = 0;
    count2 = 0;
  }
});
lBtn.addEventListener("click", () => {
  count2 -= 1;
  if (count2 === -1) {
    count1 = 3;
    count2 = 3;
  }
  if (count2 === 0) {
    main.setAttribute("src", "./images/image-product-1.jpg");
    lthumb[0].classList.add("active");
    lthumb[1].classList.remove("active");
    lthumb[2].classList.remove("active");
    lthumb[3].classList.remove("active");
  }
  if (count2 === 1) {
    main.setAttribute("src", "./images/image-product-2.jpg");
    lthumb[1].classList.add("active");
    lthumb[0].classList.remove("active");
    lthumb[2].classList.remove("active");
    lthumb[3].classList.remove("active");
  }
  if (count2 === 2) {
    main.setAttribute("src", "./images/image-product-3.jpg");
    lthumb[2].classList.add("active");
    lthumb[0].classList.remove("active");
    lthumb[1].classList.remove("active");
    lthumb[3].classList.remove("active");
  }
  if (count2 === 3) {
    main.setAttribute("src", "./images/image-product-4.jpg");
    lthumb[3].classList.add("active");
    lthumb[0].classList.remove("active");
    lthumb[1].classList.remove("active");
    lthumb[2].classList.remove("active");
  }
});

// add cart

let btn_add = document.getElementById("addBtn");

let cart = document.getElementById("cart");

let div = document.querySelector(".content");

cart.addEventListener("click", () => {
  document.getElementById("co").classList.toggle("hidden");
  document.getElementById("co").classList.toggle("block");
});

btn_add.addEventListener("click", () => {
  if (input.value !== "0") {
    document.querySelector(".empty").classList.add("hidden");
    div.classList.remove("hidden");
    div.classList.add("flex");
    // remove h5
    document.getElementById("price").textContent = `$125.00 x ${
      input.value
    }  =  $${parseInt(125.0) * parseInt(input.value)}`;
    document.getElementById("num_co").textContent = `${input.value}`;
    document.getElementById("num_co").classList.remove("hidden");
    document.getElementById("num_co").classList.add("block");
    localStorage.setItem("item", `${parseInt(input.value)}`);
  }
});

document.getElementById("del").addEventListener("click", () => {
  document.querySelector(".empty").classList.remove("hidden");
  document.querySelector(".empty").classList.add("block");
  div.classList.remove("block");
  div.classList.add("hidden");
  document.getElementById("num_co").classList.remove("block");
  document.getElementById("num_co").classList.add("hidden");
  localStorage.clear();
});
console.info("It's not a problem :-)");
window.onload = () => {
  if (localStorage.item.valueOf() !== "$0") {
    document.querySelector(".empty").classList.add("hidden");
    div.classList.remove("hidden");
    div.classList.add("flex");
    // remove h5
    document.getElementById(
      "price"
    ).textContent = `$125.00 x ${localStorage.item.valueOf()}  =  $${
      parseInt(125.0) * parseInt(localStorage.item.valueOf())
    }`;
    document.getElementById(
      "num_co"
    ).textContent = `${localStorage.item.valueOf()}`;
    document.getElementById("num_co").classList.remove("hidden");
    document.getElementById("num_co").classList.add("block");
  } else {
    localStorage.clear();
  }
};

//
//

let btn_pop = document.getElementById("Btn");
let popDiv = document.getElementById("popup");

btn_pop.addEventListener("click", (e) => {
  document.getElementById("co").classList.remove("flex");
  document.getElementById("co").classList.add("hidden");
  popDiv.classList.remove("hidden");
  popDiv.classList.add("flex");
  document.querySelector(".empty").classList.remove("hidden");
  document.querySelector(".empty").classList.add("block");
  div.classList.remove("flex");
  div.classList.add("hidden");
  document.getElementById("num_co").classList.remove("block");
  document.getElementById("num_co").classList.add("hidden");
  localStorage.clear();
  setTimeout(() => {
    popDiv.classList.remove("flex");
    popDiv.classList.add("hidden");
  }, 5000);
});

document.getElementById("close").addEventListener("click", () => {
  popDiv.classList.remove("flex");
  popDiv.classList.add("hidden");
});

//

let mobileR = document.getElementById("mo-r");
let mobileL = document.getElementById("mo-l");
let mobileMa = document.getElementById("ma-r");

let mCount1 = 0;
let mCount2 = 0;
mobileR.addEventListener("click", () => {
  mCount1 += 1;
  if (mCount1 === 0) {
    mobileMa.setAttribute("src", "./images/image-product-1.jpg");
    mCount1 = 0;
    mCount1 = 0;
  }
  if (mCount1 === 1) {
    mobileMa.setAttribute("src", "./images/image-product-2.jpg");
    mCount1 = 1;
    mCount2 = 1;
  }
  if (mCount1 === 2) {
    mobileMa.setAttribute("src", "./images/image-product-3.jpg");
    mCount1 = 2;
    mCount2 = 2;
  }
  if (mCount1 === 3) {
    mobileMa.setAttribute("src", "./images/image-product-4.jpg");
    mCount1 = 3;
    mCount2 = 3;
  }
  if (mCount1 === 4) {
    mobileMa.setAttribute("src", "./images/image-product-1.jpg");
    mCount1 = 0;
    mCount2 = 0;
  }
});
mobileL.addEventListener("click", () => {
  mCount2 -= 1;
  if (mCount2 === -1) {
    mobileMa.setAttribute("src", "./images/image-product-4.jpg");
    mCount1 = 3;
    mCount2 = 3;
  }
  if (mCount2 === 0) {
    mobileMa.setAttribute("src", "./images/image-product-1.jpg");
  }
  if (mCount2 === 1) {
    mobileMa.setAttribute("src", "./images/image-product-2.jpg");
  }
  if (mCount2 === 2) {
    mobileMa.setAttribute("src", "./images/image-product-3.jpg");
  }
  if (mCount2 === 3) {
    mobileMa.setAttribute("src", "./images/image-product-4.jpg");
  }
});

// mobile head
let menu = document.getElementById("menu");
let close_mob = document.getElementById("mob_close");
let linksMob = document.querySelector(".menu").querySelectorAll("a");

menu.addEventListener("click", () => {
  setTimeout(() => {
    // bg-black bg-opacity-50
    document
      .getElementById("mobHeader")
      .classList.add("bg-black", "bg-opacity-50");
  }, 700);
  document.getElementById("mobHeader").classList.remove("-translate-x-[100%]");
});

close_mob.addEventListener("click", () => {
  document.getElementById("mobHeader").classList.add("-translate-x-[100%]");
});
for (let i = 0; i < linksMob.length; i++) {
  linksMob[i].addEventListener("click", () => {
    document.getElementById("mobHeader").classList.add("-translate-x-[100%]");
  });
}
