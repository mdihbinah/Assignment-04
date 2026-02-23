let allList = []
let interviewList = []
let rejectedList = []

const container = document.getElementById('container')

const total = document.getElementById('total')
const interviewNumber = document.getElementById('interview-number')
const rejectedNumber = document.getElementById('rejected-number')

const allTab = document.getElementById('all-tab')
const interviewTab = document.getElementById('interview-tab')
const rejectedTab = document.getElementById('rejected-tab')

const cards = document.getElementById('cards')
const interviewCard = document.getElementById('interview-card')
const rejectedCard = document.getElementById('rejected-card')

const jobsCount = document.getElementById('jobs-count')

const interviewBlank = document.getElementById('interview-blank')
const rejectedBlank = document.getElementById('rejected-blank')

const deleteBtn = document.getElementById('delete-btn')

const blankHtml = `
    <div id="blank"  class=" bg-[#f1f2f4] p-5 rounded-xl space-y-3 flex flex-col items-center">
        <div class=""><img src="blank.png" alt=""></div>
        <h2>No jobs available</h2>
        <h3>Check back soon for new job opportunities</h3>
    </div>
`




function allRender(){
    const cardL = document.querySelectorAll('#card')
    for (const c of cardL){
        const jobName = c.querySelector('#job-name').innerText
        const jobPosition = c.querySelector('#job-position').innerText
        const jobKeywords = c.querySelector('#job-keywords').innerText
        const jobStatus = c.querySelector('#job-status').innerText 
        const jobDescription = c.querySelector('#job-description').innerText 
        const interviewBtn = c.querySelector('#btn-interview').innerText 
        const rejectedBtn = c.querySelector('#btn-rejected').innerText 
        const style = 'btn'
        
        const cardInfo = {
            jobName,
            jobPosition,
            jobKeywords,
            jobStatus,
            jobDescription,
            interviewBtn,
            rejectedBtn,
            style,
            
        }
        allList.push(cardInfo)
        cards.innerHTML = ``
        runList(allList)
    }
}
allRender()

function countJobs(){
    total.innerText = allList.length
    interviewNumber.innerText = interviewList.length
    rejectedNumber.innerText = rejectedList.length
}
countJobs()



function get(id){
    return document.getElementById(id)
}

function findText(parent, id){
    return parent.querySelector(`#${id}`).innerText
}

function resetDashboard(){
    jobsCount.innerText = `${allList.length} jobs`
    if (check == 'interview'){
        jobsCount.innerText = `${interviewList.length} of ${allList.length} jobs`
    }
    if (check == 'rejected'){
        jobsCount.innerText = `${rejectedList.length} of ${allList.length} jobs`
    }
}

function runList(list){
    
    for (const ele of list){
        if(!ele.txt){
            ele.txt = 'Not Applied'
        }
        let newCard = document.createElement('div')
        newCard.innerHTML = `
            <div id="card" class=" bg-[#f1f2f4] p-5 rounded-xl space-y-3">
                <div class="sm:flex justify-between">
                    <div class="">
                        <p id="job-name" class=" text-2xl font-bold">${ele.jobName}</p>
                        <p id="job-position" class=" text-xl opacity-80">${ele.jobPosition}</p>
                    </div>
                    <button id="delete-btn" class="btn btn-warning font-bold">DELETE</button>
                </div>
                    <p id="job-keywords" class="flex flex-col sm:flex-row opacity-80">${ele.jobKeywords}</p>
                    <div id="job-status"><button class="${ele.style}">${ele.txt}</button></div>
                    <p id="job-description" class=" opacity-90">${ele.jobDescription}</p>
                    <div id="job-option" class=" space-x-2">
                        <button id="btn-interview" class=" btn text-green-400 border-green-400 border-2">Interview</button>
                        <button id="btn-rejected" class=" btn text-red-400 border-red-400 border-2">Rejected</button>
                    </div>
            </div>
        `

        if (interviewList == list){
            interviewCard.append(newCard)
        } else if(rejectedList == list) {
            rejectedCard.append(newCard)
        } else if(allList == list){
            cards.append(newCard)
        }

    }
}
