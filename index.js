function newImage (imgSrc, leftPx, bottomPx) {
    object = document.createElement('img')
    object.src = imgSrc
    object.style.position = 'fixed'
    object.style.left = leftPx
    object.style.bottom = bottomPx
    document.body.append(object)
}

function newItem (imgSrc, leftPx, bottomPx) {
    object = document.createElement('img')
    object.src = imgSrc
    object.position = 'fixed'
    object.left = leftPx
    object.bottom = bottomPx
    document.body.append(object)

    object.addEventListener('dblclick', function(){
        object.remove()
    })
}

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')