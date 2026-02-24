let interviewCountNumber = [];
let rejectCountNumber = [];
let currentStatus = "all";

let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectCount = document.getElementById("rejectCount");
let allCards = document.getElementById("allCards");
let jobNumber = document.getElementById("jobNumber");

// tap buttons
let allBtn = document.getElementById("allBtn");
let interviewBtn = document.getElementById("interviewBtn");
let rejectBtn = document.getElementById("rejectBtn");

// filter cards
let filterSection = document.getElementById("filter-section");

// no item found section
let noItemSection = document.getElementById("no-item-found");

// calculate count for each status
function calculate() {
  let total = allCards.querySelectorAll(".job-card").length;

  totalCount.innerText = total;
  interviewCount.innerText = interviewCountNumber.length;
  rejectCount.innerText = rejectCountNumber.length;

  jobNumber.innerText = total + " Jobs";
  if (currentStatus === "allBtn") {
    jobNumber.innerText = total + " Jobs";
  } else if (currentStatus === "interviewBtn") {
    jobNumber.innerText =
      interviewCountNumber.length + " of " + total + " Jobs";
  } else if (currentStatus === "rejectBtn") {
    jobNumber.innerText = rejectCountNumber.length + " of " + total + " Jobs";
  }
  checkEmptyState();
}
calculate();

// function for button toggle and filter cards
function toggle(id) {
  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectBtn.classList.remove("bg-[#3B82F6]", "text-white");

  allBtn.classList.add("bg-white", "text-[#64748B]");
  interviewBtn.classList.add("bg-white", "text-[#64748B]");
  rejectBtn.classList.add("bg-white", "text-[#64748B]");

  let selected = document.getElementById(id);
  currentStatus = id;

  selected.classList.remove("bg-white", "text-[#64748B]");
  selected.classList.add("bg-[#3B82F6]", "text-white");

  if (id == "interviewBtn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderInterview();
  } else if (id == "rejectBtn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderReject();
  } else {
    allCards.classList.remove("hidden");
    filterSection.classList.add("hidden");
    noItemSection.classList.add("hidden");
  }
  calculate();
  checkEmptyState();
}

// function for item not found
function checkEmptyState() {
  let total = allCards.querySelectorAll(".job-card").length;

  if (currentStatus === "allBtn") {
    if (total === 0) {
      noItemSection.classList.remove("hidden");
    } else {
      noItemSection.classList.add("hidden");
    }
  } else if (currentStatus === "interviewBtn") {
    if (interviewCountNumber.length === 0) {
      noItemSection.classList.remove("hidden");
    } else {
      noItemSection.classList.add("hidden");
    }
  } else if (currentStatus === "rejectBtn") {
    if (rejectCountNumber.length === 0) {
      noItemSection.classList.remove("hidden");
    } else {
      noItemSection.classList.add("hidden");
    }
  }
}
checkEmptyState();

// render current tab
function renderCurrentTab() {
  if (currentStatus === "interviewBtn") {
    renderInterview();
  } else if (currentStatus === "rejectBtn") {
    renderReject();
  }
}

function deleteJob(title) {
  interviewCountNumber = interviewCountNumber.filter(function (item) {
    return item.tittle !== title;
  });

  rejectCountNumber = rejectCountNumber.filter(function (item) {
    return item.tittle !== title;
  });

  let cards = allCards.querySelectorAll(".job-card");

  for (let i = 0; i < cards.length; i++) {
    let t = cards[i].querySelector(".tittle").innerText;
    if (t === title) {
      cards[i].remove();
      break;
    }
  }

  if (currentStatus === "interviewBtn") {
    renderInterview();
  } else if (currentStatus === "rejectBtn") {
    renderReject();
  }

  calculate();
}

// delegate event for all cards
allCards.addEventListener("click", function (event) {
  // event delegation for interview in all cards section
  if (event.target.classList.contains("interview-btn")) {
    let parentNode = event.target.closest(".job-card");

    let tittle = parentNode.querySelector(".tittle").innerText;
    let subTittle = parentNode.querySelector(".subTittle").innerText;
    let salary = parentNode.querySelector(".salary").innerText;
    let status = parentNode.querySelector(".Status").innerText;
    let description = parentNode.querySelector(".description").innerText;

    parentNode.querySelector(".Status").innerText = "INTERVIEW";
    parentNode
      .querySelector(".Status")
      .classList.remove(
        "bg-[#FECACA]",
        "text-[#991B1B]",
        "bg-[#EEF4FF]",
        "text-[#002C5C]",
      );
    parentNode
      .querySelector(".Status")
      .classList.add("bg-[#D1FAE5]", "text-[#065F46]");

    const cardInfo = {
      tittle,
      subTittle,
      salary,
      status: "INTERVIEW",
      description,
    };

    let interviewExist = interviewCountNumber.find(
      (item) => item.tittle == cardInfo.tittle,
    );

    if (!interviewExist) {
      interviewCountNumber.push(cardInfo);
    }

    rejectCountNumber = rejectCountNumber.filter(
      (item) => item.tittle != cardInfo.tittle,
    );

    if (currentStatus == "rejectBtn") {
      renderReject();
    }
    calculate();
    checkEmptyState();
  }

  // event delegation for reject
  else if (event.target.classList.contains("reject-btn")) {
    let parentNode = event.target.closest(".job-card");

    let tittle = parentNode.querySelector(".tittle").innerText;
    let subTittle = parentNode.querySelector(".subTittle").innerText;
    let salary = parentNode.querySelector(".salary").innerText;
    let status = parentNode.querySelector(".Status").innerText;
    let description = parentNode.querySelector(".description").innerText;

    parentNode.querySelector(".Status").innerText = "REJECTED";
    parentNode
      .querySelector(".Status")
      .classList.remove(
        "bg-[#EEF4FF]",
        "text-[#002C5C]",
        "bg-[#D1FAE5]",
        "text-[#065F46]",
      );
    parentNode
      .querySelector(".Status")
      .classList.add("bg-[#FECACA]", "text-[#991B1B]");

    const cardInfo = {
      tittle,
      subTittle,
      salary,
      status: "REJECTED",
      description,
    };

    let rejectExist = rejectCountNumber.find(
      (item) => item.tittle == cardInfo.tittle,
    );

    if (!rejectExist) {
      rejectCountNumber.push(cardInfo);
    }

    interviewCountNumber = interviewCountNumber.filter(
      (item) => item.tittle != cardInfo.tittle,
    );

    if (currentStatus == "interviewBtn") {
      renderInterview();
    }
    calculate();
  }
  // event delegation for delete buttion in interview and reject section
  else if (event.target.classList.contains("delete-btn")) {
    let parentNode = event.target.closest(".job-card");
    let title = parentNode.querySelector(".tittle").innerText;

    if (confirm("Are you sure you want to delete this job?")) {
      deleteJob(title);
    }
  }
});

// Event delegation for filter section (interview & reject tab)
filterSection.addEventListener("click", function (event) {
  let parentNode = event.target.closest(".job-card");
  if (!parentNode) return;

  let title = parentNode.querySelector(".tittle").innerText;

  let mainCard = [...allCards.querySelectorAll(".job-card")].find(
    (card) => card.querySelector(".tittle").innerText === title,
  );

  //  interviewBtn
  if (event.target.classList.contains("interview-btn")) {
    rejectCountNumber = rejectCountNumber.filter(
      (item) => item.tittle !== title,
    );

    if (!interviewCountNumber.find((item) => item.tittle === title)) {
      let subTittle = mainCard.querySelector(".subTittle").innerText;
      let salary = mainCard.querySelector(".salary").innerText;
      let description = mainCard.querySelector(".description").innerText;

      interviewCountNumber.push({
        tittle: title,
        subTittle,
        salary,
        status: "INTERVIEW",
        description,
      });
    }
    mainCard.querySelector(".Status").innerText = "INTERVIEW";
    mainCard.querySelector(".Status").className =
      "Status bg-[#D1FAE5] text-[#065F46] py-2 px-3 font-medium text-[14px] rounded-md mt-4";

    renderCurrentTab();
  }

  // rejectBtn
  else if (event.target.classList.contains("reject-btn")) {
    interviewCountNumber = interviewCountNumber.filter(
      (item) => item.tittle !== title,
    );

    if (!rejectCountNumber.find((item) => item.tittle === title)) {
      let subTittle = mainCard.querySelector(".subTittle").innerText;
      let salary = mainCard.querySelector(".salary").innerText;
      let description = mainCard.querySelector(".description").innerText;

      rejectCountNumber.push({
        tittle: title,
        subTittle,
        salary,
        status: "REJECTED",
        description,
      });
    }

    mainCard.querySelector(".Status").innerText = "REJECTED";
    mainCard.querySelector(".Status").className =
      "Status bg-[#FECACA] text-[#991B1B] py-2 px-3 font-medium text-[14px] rounded-md mt-4";

    renderCurrentTab();
  } else if (event.target.classList.contains("delete-btn")) {
    let parentNode = event.target.closest(".job-card");
    let title = parentNode.querySelector(".tittle").innerText;
    deleteJob(title);
    if (currentStatus === "interviewBtn") {
      renderInterview();
    } else if (currentStatus === "rejectBtn") {
      renderReject();
    }
  }
  calculate();
  checkEmptyState();
});

// Render for interview section
function renderInterview() {
  filterSection.innerHTML = "";
  for (let interview of interviewCountNumber) {
    let div = document.createElement("div");
    div.innerHTML = `
            <div class="job-card bg-white rounded-md p-6 mb-4">
                <div class="flex justify-between">
                    <h2 class="tittle text-[#002C5C] text-[18px]/[26px] font-semibold">${interview.tittle}</h2>
                    <div class="border-2 border-gray-400 rounded-full p-1">
                        <i class="delete-btn fa-regular fa-trash-can  cursor-pointer transform hover:scale-120 opacity-70 "></i>
                    </div>
                </div>
                <div>
                    <p class="subTittle text-[#64748B] text-[16px]/[22px]">${interview.subTittle}</p>
                    <p class="salary text-[#64748B] text-[14px]/[20px] mt-4">${interview.salary}</p>
                    <button class="Status bg-[#D1FAE5] text-[#065F46] py-2 px-3 font-medium text-[14px]  rounded-md mt-4">${interview.status}</button>
                    <p class="description text-[#323B49] text-[14px]/[20px] pb-4 pt-2 ">${interview.description}</p>

                    <div>
                        <button class="interview-btn btn btn-outline btn-success uppercase">interview</button>
                        <button class="reject-btn btn btn-outline btn-error uppercase">Rejected</button>
                    </div>
                </div>
            </div>`;
    filterSection.appendChild(div);
  }
  checkEmptyState();
}

// Render for reject section
function renderReject() {
  filterSection.innerHTML = "";
  for (let reject of rejectCountNumber) {
    let div = document.createElement("div");
    div.innerHTML = `
            <div class="job-card bg-white rounded-md p-6 mb-4">
                <div class="flex justify-between">
                    <h2 class="tittle text-[#002C5C] text-[18px]/[26px] font-semibold">${reject.tittle}</h2>
                    <div class="border-2 border-gray-400 rounded-full p-1">
                        <i class="delete-btn fa-regular fa-trash-can  cursor-pointer transform hover:scale-120 opacity-70 "></i>
                    </div>
                </div>
                <div>
                    <p class="subTittle text-[#64748B] text-[16px]/[22px]">${reject.subTittle}</p>
                    <p class="salary text-[#64748B] text-[14px]/[20px] mt-4">${reject.salary}</p>
                    <button class="Status bg-[#FECACA] py-2 px-3 font-medium text-[14px] text-[#991B1B] rounded-md mt-4">${reject.status}</button>
                    <p class="description text-[#323B49] text-[14px]/[20px] pb-4 pt-2 ">${reject.description}</p>

                    <div>
                        <button class="interview-btn btn btn-outline btn-success uppercase">interview</button>
                        <button class="reject-btn btn btn-outline btn-error uppercase">Rejected</button>
                    </div>
                </div>
            </div>`;
    filterSection.appendChild(div);
  }
  checkEmptyState();
}