
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


git remote add origin https://github.com/mdihbinah/Assignment-04.git
git branch -M main
git push -u origin main

