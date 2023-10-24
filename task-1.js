function slugify(title) {
    const words = title.toLowerCase().split(" ");
    return words.join("-");
}



console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"



// function slugify(title) {
//     return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
// }

// У цьому короткому коді ми спочатку перетворюємо рядок в нижній регістр за допомогою .toLowerCase(). 
// Потім ми використовуємо .replace() з регулярним виразом /[^a-z0-9]+/g,
// щоб видалити всі символи, які не є буквами або цифрами, і замінюємо їх на тире.