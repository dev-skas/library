const express = require('express');
const authordata = require('../model/authordata');
const authorRouter = express.Router();


// const authors= [
//     {
//         name:'Daniel Defoe',
//         image:'author1.png',
//         year:'1660',
//         country:'England',
//         short:'Daniel Defoe was born Daniel Foe in London in 1660. It was perhaps inevitable that Defoe, an outspoken man, would become a political journalist. As a Puritan he believed God had given him a mission to print the truth, that is, to proselytize on religion and politics and, in fact, he became a prolific pamphleteer satirizing the hypocrisies of both Church and State. Defoe admired William III, and his poem The True-Born Englishman (1701) won him the king’s friendship.'
//     },  
//       {
//         name:'Jonathan Swift',
//         image:'author2.png',
//         year:'30 November 1667',
//         country:'Ireland',
//         short:'Jonathan Swift is almost universally accorded a leading place among the greatest of prose satirists. Born in Dublin of English parents on November 30, 1667, Swift never knew his father, who had died several months before his birth. After his mother returned to England the boy was raised in Ireland by paternal uncles, all of whom were lawyers. At the age of six Swift entered Kilkenny School, the foremost Anglican academy in Ireland, and at fourteen he was admitted to Trinity College, Dublin'
//     },  
//       {
//         name:'Lewis Carroll',
//         image:'author3.png',
//         year:'27 January 1832',
//         country:'England',
//         short:'Lewis Carroll is the pseudonym of Charles Lutwidge Dodgson (1832–1898). He wrote Alice’s Adventures in Wonderland for the amusement of 11-year-old Alice Liddell and her two sisters, who were the daughters of the dean of Christ Church College, Oxford, where Dodgson taught mathematics. The book was published in 1865, and its first companion volume, Through the Looking-Glass and What Alice Found There, followed in 1871.'
//     },  
//       {
//         name:'Bram Stoker',
//         image:'author4.png',
//         year:'8 November 1847',
//         country:'Ireland',
//         short:'Bram Stoker (1847–1912) was born in Dublin, Ireland. He began his career as a theater critic before becoming manager of London’s Lyceum Theatre. Dracula was Stoker’s fourth novel; he went on to write many more, including The Lady of the Shroud and The Lair of the White Worm.'
//     },
// ]


function router(nav){
    authorRouter.get('/',(req,res)=>{
        authordata.find()
        .then((authors)=>{
            res.render('authors',{
                authors,
                nav
            });
        })
    });
    
    authorRouter.get('/:i',(req,res)=>{
        const id = req.params.i
        authordata.findOne({_id: id})

        .then((author)=>{
            
        res.render("author",{
            nav,
            author
        });
        })
     

    });

    return authorRouter
}
module.exports = router