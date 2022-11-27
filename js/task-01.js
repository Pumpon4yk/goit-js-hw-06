// const listCategories = document.querySelector('#categories');

// console.log(`Number of categories: ${listCategories.children.length}`);


const itemsCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsCategories.length}`);



const itemCategories = (list) => list.forEach((el, ind) => 
    {
    console.group(`${ind + 1} iteration`)

        const firstElement = el.firstElementChild;
        console.log(`Category: ${firstElement.textContent}`);

    const listEl = el.lastElementChild;
        console.log(`Elements: ${listEl.children.length}`);

        console.groupEnd();
    });
    
itemCategories(itemsCategories)


