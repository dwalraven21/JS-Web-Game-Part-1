function newImage (imgName, imgSrc, leftPx, bottomPx) {
    imgName = document.createElement('img')
    imgName.src = imgSrc
    imgName.style.position = 'fixed'
    imgName.style.left = leftPx
    imgName.style.bottom = bottomPx
    document.body.append(imgName)
}

newImage('greenCharacter', 'assets/green-character.gif', '100px', '100px')
newImage('pineTree', 'assets/pine-tree.png', '450px', '200px')
newImage('pillar.', 'assets/pillar.png', '350px', '100px')
newImage('crate', 'assets/crate.png', '150px', '200px')
newImage('well', 'assets/well.png', '500px', '425px')
