# P6-PochLib
# Presentation of the project
This is a school project to work on the front - end part of my education. It is a one page application with responsive layout.<br>
This project has been written in JavaScript and Sass only.<br/>
It uses Google Books APIs : https://developers.google.com/books/docs/v1/using.<br/>
To store books in a local session, Window's Session Storage was used : https://developer.mozilla.org/fr/docs/Web/API/Window/sessionStorage.<br/>
# Requirements
Before you proceed make sure your internet browser is up to date. Loock at this page https://caniuse.com/?search=sessionstorage, and apply the changes if deemed necessary. This page was updated on the 18 of march 2022.<br/>
# How to install the project on your local computer
<br/>**1- Your operating system is Windows**<br/>
On your local disc, go into the folder you want to install this repository in. Then right click on it to open Git Bash Here.
Enter the command line : 'git clone https://github.com/murielProton/P6-PochLib.git' . Press enter. And first step DONE !<br/>
Now for step two. Using common Windows folders, go where you have cloned this project. Click on the 'Vue' folder. Now, double click on search_book_vue.html. It will have the logotype of your default browser, mine is Chrome. It will open this app directly into a local internet page. <br/>
Last step, you will be able to search Google Book API for your favorite book ant other, provided your computer has a Wifi connection or an RJ45 cable plugged in. You will also be able to save records on your list of preferred books.<br/>
<br/>**2- Your operating system is MacOS**<br/>
On your local desk find the 'Launchpad' : a space ship. Click on 'Other', then Terminal. There navigate your way to the right place you want to use locally to store this work, with 'cd ..' and 'cd name of the folder'. Then you can enter the magic words : 'git clone https://github.com/murielProton/P6-PochLib.git' . Press enter. And first step DONE !<br/>
Now for step two. From the Finder's Go menu, choose the folder you have put this work in, and go to the folder 'Vue'. Now, double click on search_book_vue.html. It will automatically open this file into the mac browser.<br/>
Last step I'm afraid won't be completed. You will be able to use the search Google Book API part, but the part where you save some books with Window. SessionStorage might be flawed. Safari might just not allow it to work. From what has been published on the WEB on the 18 march of 2022 (https://caniuse.com/?search=sessionstorage), you'll have to make sure your Safari is at least version 4-15.3.<br/>
<br/>**3- Your operating system is Linux**<br/>
If you are on Linux you probably already know how to open your terminal. So just navigate where you want this project to be and BAM : 'git clone https://github.com/murielProton/P6-PochLib.git' . Press enter. And first step DONE !<br/>
Now for step two. Stay in your terminal enter :'cd P6-PochLib', then 'cd Vue'. There you can enter this last command line : 'name of your favorite browser search_book_vue.html' or 'firefox search_book_vue.html'.<br/>
Last step, you will be able to search Google Book API for your favorite book ant other, provided your computer has a Wifi connection or an RJ45 cable plugged in. You will also be able to save records on your list of preferred books.<br/>
# Sass
You're not satisfied with the coloring of this page. You want to change the CSS. Careful, this project runs on Sass. https://sass-lang.com/ Therefor, before you apply any changes to the layout of this app, follow my lead.<br/>
First, go to the repository P6-PochLib/Syle. Then enter the command line : ' sass --watch --update PochLib-layout.scss:PochLib-layout.css '. This line wil update your CSS file each and every time you change the Sass file.<br/>
Lastly, you can change anything in the file : PochLib-layout.scss. Provided you know all about Sass.<br/>

