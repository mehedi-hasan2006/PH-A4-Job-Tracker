let interviewCountNumber = [];
let rejectCountNumber = [];

let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectCount = document.getElementById('rejectCount');
let allCards = document.getElementById('allCards');

// tap buttons 
let allBtn = document.getElementById('allBtn');
let interviewBtn = document.getElementById('interviewBtn');
let rejectBtn = document.getElementById('rejectBtn');


function calculate(){
    totalCount.innerText = allCards.children.length;
    interviewCount.innerText = interviewCountNumber.length;
    rejectCount.innerText = rejectCountNumber.length;
}
calculate();

function toggle(id){
    allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    allBtn.classList.add('bg-white', 'text-[#64748B]');
    interviewBtn.classList.add('bg-white', 'text-[#64748B]');
    rejectBtn.classList.add('bg-white', 'text-[#64748B]');


    let selected = document.getElementById(id);
    selected.classList.remove('bg-white', 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]',  'text-white');
}