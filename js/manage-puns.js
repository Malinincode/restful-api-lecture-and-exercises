window.onload = function() {
    fetchAllPuns();
}

async function fetchAllPuns() {
    try {
        const response = await fetch('https://puns-app.herokuapp.com/puns')
        const puns = await response.json();
        console.log(puns);

        let html = ''
        for (let pun of puns) {
            html += `
                <li class="list-group-item">
                    <p>${pun.content} <br> <span class="date">- ${pun.date}</span> </p>
                    
                    <div>
                        <a href="#">Update</a> |
                        <a href="#" id="delete-links">Delete</a> 
                    </div>
                </li>
            `
        }

        document.getElementById('pun-list').innerHTML = html;
    } catch(error) {
        console.log(error)
    }



     /**
     * Add here an eventlistener to all delete-links, 
     * that makes a request to delete the chosen pun from DB, 
     * And also deletes the pun from the DOM
     * 
     * 1. Begin with selecting all delete-links with an appropiate element selector
     * 2. Loop through all delete-links and add an eventlistener for each delete-link,
     * 3. The eventlisteners should be triggered on the 'click'-event
     * 4. Make sure to use preventDefault(), to prevent the link from reloading the page
     * 5. When triggered, the eventlistener should make a "DELETE" request to the URL: https://puns-app.herokuapp.com/puns/<punID>, and the <punId> should be retrieved from delete-link data-attribute => 'e.target.dataset.id'
     * 6. Make sure to remove() the whole pun from DOM.
     */

     /*  let deleteLinks = document.getElementById('delete-links').addEventListener('click', function(e) {



        for (let deleteLink of deleteLinks) {
        
        
        
        }
        
        }) */


        const deleteLinks = document.getElementsByClassName('delete-links')
        console.log(deleteLinks);
        for (let link of deleteLinks) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
        
                const theCLickedLink = e.target;
                console.log(theCLickedLink.dataset.id)
                console.log(theCLickedLink.dataset.taskContent) // data attributes retrieved in camelCase (taskContent)
                document.getElementById('text').innerText = `You just deleted task with id: ${theCLickedLink.dataset.id}`;
            })



            const response = await fetch('https://puns-app.herokuapp.com/puns', {
                method: 'DELETE', 
                
            })    
        }










}
















    