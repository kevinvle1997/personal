function closeSeparator() {
    document.querySelector('.window-pane').style.display = 'none';
}

function openSeparator() {
    document.querySelector('.window-pane').style.display = 'block';
}


function searchTags() {
    const input = document.getElementById('text_find').value.toLowerCase();
    const results = document.getElementById('search_column');
    results.innerHTML = '';
    let counter = 0;
    const tags = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'app'];
    const filteredTags = tags.filter(tag => tag.startsWith(input));
    // <input id="text_find" type="text" placeholder="" onChange="searchTags()">
    filteredTags.forEach(tag => {
        counter++; // Increment counter for unique id
        const row = document.createElement('section')
        row.className = "field-row"
        row.style = "margin-top: 0px"
        // Create the label dynamically
        const label = document.createElement('label');
        label.setAttribute('for', `search-option-${counter}`); // Set 'for' attribute to match the option id
        label.textContent = `Find:`; // You can customize the label text as needed
        label.className = "modeless-text"
        label.style= "visibility: hidden;"
        // Create the search result div
        const option = document.createElement('div');
        option.id = `search-option-${counter}`; // Unique id for each search result
        option.className = "search_result";
        option.textContent = tag;

        // Append the label and div to the results section
        row.appendChild(label); // Append the label
        row.appendChild(option); // Append the div (search result)
        results.append(row)
    });

}
