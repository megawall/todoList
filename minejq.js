let inptask=$('#inptask')
let list=$('#list')
let add=$('#add')
let clear=$('#clear')
let sot=$('#sot')
let clean=$('#clean')

function addItems(){
    let newitem=$('<li>',{'class':'list-group-item'})
    newitem.text(inptask.val())
    newitem.click((eve)=>{
        newitem.toggleClass('done')
        console.log(newitem.text())
    })
    list.append(newitem)
    inptask.val('')
}

add.click(addItems)
clean.click(()=>{
    let donetasks=$('#list .done')
    donetasks.remove()
})
sot.click(()=>{
    let doneitem=$('#list .done')
    list.append(doneitem)
})
inptask.keypress((eve)=>{
    if(eve.which==13)
        addItems()
        
})
clear.click(()=>{
    
    inptask.val('')
})
