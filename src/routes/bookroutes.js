const express = require('express');
const bookRouter = express.Router();
const bookdata = require('../model/bookdata');

// const books =[
//     {
//         name:'Robinson Crusoe',
//         author:'Daniel Defoe',
//         gener:'Fiction Classics | Literary Fiction',
//         year:'1719',
//         image:'book1.png',
//         short:`Daniel Defoe’s classic tale of a solitary castaway’s survival and triumph, widely considered to be the first English novel.

//         I, poor miserable Robinson Crusoe, being shipwrecked, came on shore on this dismal unfortunate island, all the rest of the ship’s company being drowned. In despair of any relief, I saw nothing but death before me…
         
//         Thus Crusoe begins his journal in Daniel Defoe’s classic novel: the vividly realistic account of a solitary castaway’s triumph over nature—and over the fears, self-doubt and loneliness that are parts of human nature.
         
//         For almost three centuries, Robinson Crusoe has remained one of the best known and most read tales in modern literature, a popularity owing as much to the enduring freshness and immediacy of its style as to its widely acknowledged status as the very first English novel. 
        
//         `
//     }, {
//         name:'Gulliver’s Travels ',
//         author:'Jonathan Swift ',
//         gener:' Adventure Books',
//         year:'1726',
//         image:'book2.png',
//         short:`"It is universally read, from the
//         cabinet council to the nursery," remarked Alexander Pope when Gulliver’s Travels was published in 1726. One of the unique books of world literature, Swift’s masterful satire describes the astonishing voyages of one Lemuel Gulliver, a ship’s surgeon, to surreal kingdoms inhabited by miniature people and giants, quack philosophers and scientists, horses endowed with reason and men who behave like beasts. Written with great wit and invention, Gulliver’s Travels is a savage parody on man and his institutions that has captivated readers for nearly three centuries.
//         The Modern Library has played a significant role in American cultural life for the better part of a century. The series was founded in 1917 by the publishers Boni and Liveright and eight years later acquired by Bennett Cerf and Donald Klopfer. It provided the foundation for their next publishing venture, Random House.`
//     }, {
//         name:'Alice’s Adventures in Wonderland ',
//         author:'Lewis Carroll',
//         gener:' Children’s Middle Grade Books',
//         year:'1865',
//         image:'book3.png',
//         short:'When Alice follows the White Rabbit down a rabbit hole, she finds herself in an enchanted world, filled with creatures like the Mad Hatter, the disappearing Cheshire Cat, and the Queen of Hearts. Alice quickly finds out that nothing is as it seems in the wild world of Wonderland…'
//     }, {
//         name:'Dracula',
//         author:'Bram Stoker ',
//         gener:' Gothic & Horror',
//         year:'1897',
//         image:'book4.png',
//         short:`Bram Stoker’s gothic horror masterpiece pits good against evil and life against death, all under the thrall of the original vampire….

//         “Listen to them—the children of the night. What music they make!”
        
//         He is a creature of darkness. His face deathly pale, his eyes ablaze with the fires of hell. He has been dead for centuries, yet he may never die. He waits in his crumbling castle in the mountains of Transylvania, as his prey draws closer and closer to destruction….
        
//         Here begins one of the most celebrated horror stories in history, the tale of an undead monster who craves the blood of his victims and relishes his dominance over mankind. With its delicious mix of action, suspense, and looming dread, Bram Stoker’s Dracula has terrified and inspired readers for more than a hundred years. `
//     }, 
// ];


function router(nav){
    bookRouter.get('/',(req,res)=>{
        bookdata.find()
        .then((books)=>{
            res.render('books',{
                nav,
                books
            });
        })
       

     });
     

     bookRouter.get('/:i',(req,res)=>{
        const id = req.params.i
        bookdata.findOne({_id: id})

        .then((book)=>{
            
        res.render("book",{
            nav,
            book
        });
        })

     });



     return bookRouter
}



module.exports = router;