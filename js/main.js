

var showDiagram = true;
document.getElementById('archbutton').addEventListener('click', function(e){
    e.target.innerHTML = `
        <i class="fas fa-project-diagram fa-fw"></i>
        ${showDiagram? 'Hide': 'View'} Architecture Diagram
    `
    showDiagram = !showDiagram;
})