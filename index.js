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


// filter cards
let filterSection = document.getElementById('filter-section');


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



allCards.addEventListener('click', function(event){
    let parentNode = event.target.parentNode.parentNode.parentNode;

    let tittle = parentNode.querySelector('.tittle').innerText;
    let subTittle = parentNode.querySelector('.subTittle').innerText;
    let salary = parentNode.querySelector('.salary').innerText;
    let status = parentNode.querySelector('.Status').innerText;
    let description = parentNode.querySelector('.description').innerText;

    const cardInfo = {
        tittle,
        subTittle,
        salary,
        status,
        description,
    }
   
    let interviewExist = interviewCountNumber.find(item=> item.tittle == cardInfo.tittle);

    if(!interviewExist){
        interviewCountNumber.push(cardInfo);
    }

    
    renderInterview();
})

function renderInterview(){
    filterSection.innerHTML = '';
    for(let interview of interviewCountNumber){
        let div = document.createElement('div');
        div.className = 'bg-white rounded-md p-6 mb-4';
        div.innerHTML = `
            <div class="bg-white rounded-md p-6 mb-4">
                <div class="flex justify-between">
                    <h2 class="tittle text-[#002C5C] text-[18px]/[26px] font-semibold">${interview.tittle}</h2>
                    <div class="border-2 border-gray-400 rounded-full p-1">
                        <i class="delete-btn fa-regular fa-trash-can  cursor-pointer transform hover:scale-120 opacity-70 "></i>
                    </div>
                </div>
                <div>
                    <p class="subTittle text-[#64748B] text-[16px]/[22px]">${interview.subTittle}</p>
                    <p class="salary text-[#64748B] text-[14px]/[20px] mt-4">${interview.salary}</p>
                    <button class="Status bg-[#EEF4FF] py-2 px-3 font-medium text-[14px] text-[#002C5C] rounded-md mt-4">${interview.status}</button>
                    <p class="description text-[#323B49] text-[14px]/[20px] pb-4 pt-2 ">${interview.description}</p>

                    <div>
                        <button class="interview-btn btn btn-outline btn-success uppercase">interview</button>
                        <button class="reject-btn btn btn-outline btn-error uppercase">Rejected</button>
                    </div>
                </div>
            </div>`;
        filterSection.appendChild(div);
    }
}