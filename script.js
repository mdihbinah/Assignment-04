
let check = 'all'

function doToggle(id){
    allTab.classList.remove('bg-primary')
    interviewTab.classList.remove('bg-primary')
    rejectedTab.classList.remove('bg-primary')

    allTab.classList.add('bg-[#f1f2f4]')
    interviewTab.classList.add('bg-[#f1f2f4]')
    rejectedTab.classList.add('bg-[#f1f2f4]')  
    
    const ele = get(id)
    ele.classList.remove('bg-[#f1f2f4]')
    ele.classList.add('bg-primary')
    

    cards.classList.remove('hidden')
    interviewCard.classList.remove('hidden')
    rejectedCard.classList.remove('hidden')

    if (id == 'all-tab'){
        interviewCard.classList.add('hidden')
        rejectedCard.classList.add('hidden')
        jobsCount.innerText = `${allList.length} jobs`
        check = 'all'
    } else if(id =='interview-tab'){
        cards.classList.add('hidden')
        rejectedCard.classList.add('hidden')
        jobsCount.innerText = `${interviewList.length} of ${allList.length} jobs`
        check = 'interview'
    } else if(id == 'rejected-tab'){
        cards.classList.add('hidden')
        interviewCard.classList.add('hidden')
        jobsCount.innerText = `${rejectedList.length} of ${allList.length} jobs`
        check = 'rejected'
    }
}


container.addEventListener('click', function(event){
    

    const parent = event.target.parentNode.parentNode
    const eventText = event.target.innerText
    const eventClassList = event.target.classList
    
    const jobName = findText(parent,'job-name')
    const jobPosition = findText(parent,'job-position')
    const jobKeywords = findText(parent,'job-keywords')
    const jobStatus = findText(parent,'job-status')
    const jobDescription = findText(parent,'job-description')
    const style = eventClassList.value
    const txt = eventText

    const cardInfo = {
        jobName,
        jobPosition,
        jobKeywords,
        jobStatus,
        jobDescription,
        style,
        txt,
    }
    
    if(eventText == 'Interview' && (!(interviewList.find(i => i.jobName == jobName)))){
        interviewList.push(cardInfo)
        rejectedList = rejectedList.filter(i => i.jobName != jobName)
    } else if(eventText == 'Rejected' && (!(rejectedList.find(i => i.jobName == jobName)))){
        rejectedList.push(cardInfo)
        interviewList = interviewList.filter(i => i.jobName != jobName)
    } else{
        return
    }

    
})

