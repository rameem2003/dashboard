const date = document.querySelectorAll(".date td div p");
const schedule = document.getElementById("schedule");

const btn = document.getElementById("calander");
const calander = document.getElementById("windows");
const close = document.getElementById("close");
// console.log(date);

let allDates = [];
date.forEach((d) => {
  d.addEventListener("click", () => {
    allDates.push(d.innerText);
    // console.log("fwef");
    console.log(allDates);
    // makeSchedule();
    let element = document.createElement("div");
    element.classList.add("mt-6");
    element.innerHTML = `
    <p
      class="font-inter font-medium text-[14px] leading-[20px] text-[#344054]"
    >
      ${d.innerText} Oct
    </p>
  
    <div class="flex items-center justify-between mt-2">
      <span
        class="py-4 px-[14px] border-[1px] border-font rounded-[8px] font-inter font-normal text-[16px] leading-[24px] text-font"
        >01.00 pm</span
      >
      <span>-</span>
      <span
        class="py-4 px-[14px] border-[1px] border-font rounded-[8px] font-inter font-normal text-[16px] leading-[24px] text-font"
        >04.00 pm</span
      >
      <i class="fa-solid fa-trash"></i>
    </div>
  
    <button
      class="py-1 px-[102px] rounded-[8px] mt-[10px] font-inter font-semibold text-[12px] leading-[18px] text-primary bg-[#E9EEEC]"
    >
      + Add More
    </button>
  `;

    schedule.appendChild(element);
  });
});

btn.addEventListener("click", () => {
  calander.classList.remove("hidden");
});

close.addEventListener("click", () => {
  calander.classList.add("hidden");
});

const makeSchedule = () => {
  allDates.map((dt, i) => {
    let element = document.createElement("div");
    element.classList.add("mt-6");
    element.innerHTML = `
    <p
      class="font-inter font-medium text-[14px] leading-[20px] text-[#344054]"
    >
      ${dt} Oct
    </p>
  
    <div class="flex items-center justify-between mt-2">
      <span
        class="py-4 px-[14px] border-[1px] border-font rounded-[8px] font-inter font-normal text-[16px] leading-[24px] text-font"
        >01.00 pm</span
      >
      <span>-</span>
      <span
        class="py-4 px-[14px] border-[1px] border-font rounded-[8px] font-inter font-normal text-[16px] leading-[24px] text-font"
        >04.00 pm</span
      >
      <i class="fa-solid fa-trash"></i>
    </div>
  
    <button
      class="py-1 px-[102px] rounded-[8px] mt-[10px] font-inter font-semibold text-[12px] leading-[18px] text-primary bg-[#E9EEEC]"
    >
      + Add More
    </button>
  `;

    console.log(element);
    schedule.innerHTML = element;
  });
};
