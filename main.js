let quotes = [
    {quote: '“We cannot solve problems with the kind of thinking we employed when we came up with them.”', author: 'Albert Einstein'}, 
    {quote: '“Learn as if you will live forever, live like you will die tomorrow.”', author: 'Mahatma Gandhi'}, 
    {quote: '“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”', author: 'Mark Twain'}, 
    {quote: '“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”', author: 'Eleanor Roosevelt'},
    {quote: '“Success is not final; failure is not fatal: It is the courage to continue that counts.”', author: 'Winston S. Churchill'},
    {quote: '“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.”', author: 'Walter Anderson'},
    {quote: '“It is better to fail in originality than to succeed in imitation.”', author: 'Herman Melville'},
    {quote: '“The road to success and the road to failure are almost exactly the same.”', author: 'Colin R. Davis'},
    {quote: '“Success usually comes to those who are too busy looking for it.”', author: 'Henry David Thoreau'},
    {quote: '“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.”', author: 'Dale Carnegie'},
    {quote: '“I never dreamed about success. I worked for it.”', author: 'Estée Lauder'},
    {quote: '“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.”', author: 'Winston Churchill'},
    {quote: '“You learn more from failure than from success. Don’t let it stop you. Failure builds character.”', author: 'Unknown'},
    {quote: '“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.”', author: 'Steve Jobs'},
    {quote: '“Experience is a hard teacher because she gives the test first, the lesson afterwards.”', author: 'Vernon Sanders Law'},
    {quote: '“Goal setting is the secret to a compelling future.”', author: 'Tony Robbins'},
    {quote: '“Concentrate all your thoughts upon the work in hand. The sun\'s rays do not burn until brought to a focus.”', author: 'Alexander Graham Bell'},
    {quote: '“I’m a greater believer in luck, and I find the harder I work the more I have of it.”', author: 'Thomas Jefferson'},
    {quote: '“Opportunity is missed by most people because it is dressed in overalls and looks like work.”', author: 'Thomas Edison'},
    {quote: '“Setting goals is the first step in turning the invisible into the visible.”', author: 'Tony Robbins'},
    {quote: '“He who conquers himself is the mightiest warrior.”', author: 'Confucius'},
    {quote: '“Try not to become a man of success, but rather become a man of value.”', author: 'Albert Einstein'},
    {quote: '“The successful man will profit from his mistakes and try again in a different way.”', author: 'Dale Carnegie'},
    {quote: '“A successful man is one who can lay a firm foundation with the bricks others have thrown at him.”', author: 'David Brinkley'},
    {quote: '“Education is the most powerful weapon which you can use to change the world.”', author: 'Nelson Mandela'},
    {quote: '“The most difficult thing is the decision to act, the rest is merely tenacity.”', author: 'Amelia Earhart'},
    {quote: '“The elevator to success is out of order. You’ll have to use the stairs, one step at a time.”', author: 'Joe Girard'},
    {quote: '“Talent wins games, but teamwork and intelligence win championships.”', author: 'Michael Jordan'},
    {quote: '“Coming together is a beginning. Keeping together is progress. Working together is success.”', author: 'Henry Ford'},
    {quote: '“Remember, teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability.”', author: 'Patrick Lencioni'},
    {quote: '“Opportunities don\'t happen, you create them.”', author: 'Chris Grosser'},
    {quote: '“Love your family, work super hard, live your passion.”', author: 'Gary Vaynerchuk'},
    {quote: '“It is never too late to be what you might have been.”', author: 'George Eliot'},
    {quote: '“Don\'t let someone else\'s opinion of you become your reality.”', author: 'Les Brown'},
    {quote: '“I am not a product of my circumstances. I am a product of my decisions.”', author: 'Stephen R. Covey'},
    {quote: '“One of the differences between some successful and unsuccessful people is that one group is full of doers, while the other is full of wishers.”', author: 'Edmond Mbiaka'},
    {quote: '“I’d rather regret the things I’ve done than regret the things I haven’t done.”', author: 'Lucille Ball'},
    {quote: '“You cannot plow a field by turning it over in your mind. To begin, begin.”', author: 'Gordon B. Hinckley'},
    {quote: '“Inspiration does exist, but it must find you working.”', author: 'Pablo Picasso'},
    {quote: '“Small is not just a stepping-stone. Small is a great destination itself.”', author: 'Jason Fried'},
    {quote: '“He that can have patience can have what he will.”', author: 'Benjamin Franklin'},
    {quote: '“The only one who can tell you “you can’t win” is you and you don’t have to listen.”', author: 'Jessica Ennis'},
    {quote: '“Set your goals high, and don’t stop till you get there.”', author: 'Bo Jackson'},
    {quote: '“Life is like riding a bicycle. To keep your balance you must keep moving.”', author: 'Albert Einstein'},
    {quote: '“I have never let my schooling interfere with my education.”', author: 'Mark Twain'},
    {quote: '“If you can\'t yet do great things, do small things in a great way.”', author: 'Napoleon Hill'},
    {quote: '“If you really want to do something, you\'ll find a way. If you don\'t, you\'ll find an excuse.”', author: 'Jim Rohn'},
    {quote: '“Be sure you put your feet in the right place, then stand firm.”', author: 'Abraham Lincoln'},
    {quote: '“Live out of your imagination, not your history..”', author: 'Stephen Covey'},
    {quote: '“The greater the difficulty, the more the glory in surmounting it.”', author: 'Epicurus'}
];

callCard();

function callCard(){
    let cardNumber = Math.floor(Math.random()*quotes.length);
    let list = document.getElementById('quoteList');
    let card = createCard(quotes[cardNumber]);
    list.appendChild(card);
}

function createCard(obj){
    let newCard = document.createElement('div');
    newCard.classList.add('card');

    let newLayer = createLayer(obj.author);
    newCard.appendChild(newLayer);

    let newCover = createCover(obj.quote);
    newCard.appendChild(newCover);
    return newCard;
}

function createLayer(layerText){
    layer = document.createElement('div');  // create a <div> tag named "layer" (layer decleared as a "var" to use the variable outside the function)
    layer.classList.add('fillOut');
    layer.classList.add('layer');
    layer.textContent = layerText;

    layer.onclick = function(){(cover.style.left == '250px')? cover.style.left = '' : cover.style.left = '250px';}  // onclick if statement
    return layer;
}

function createCover(coverText){
    cover = document.createElement('div');  // create a <div> tag named "cover" (cover decleared as a "var" to use the variable outside the function)
    cover.classList.add('fillOut');
    cover.classList.add('cover');
    cover.textContent = coverText;

    cover.onclick = function(){(cover.style.left == '250px')? cover.style.left = '' : cover.style.left = '250px';}  // onclick if statement
    return cover;
}
