# Binar: Challenge 02

Welcome to my Binar Challenge chapter 2 about filtering car.

## Teck stack

- [`HTML5 (Hyper Text Markup Language)`](https://www.w3schools.com/html/)

  > HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.

- [`CSS (Cascading Style Sheets)`](https://www.w3schools.com/css/)

  > CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once.

- [`Bootsratp 5.3 (Framework CSS)`](https://getbootstrap.com/)

  > Bootstrap is a free and open source CSS framework for designing websites and web applications. This framework contains HTML and CSS-based design templates for typography, forms, buttons, navigation, and other interface components, as well as optional JavaScript extensions.

- [`Javascript (Programing Language)`](https://www.w3schools.com/js/)

  > JavaScript is a scripting language for creating dynamic web page content. It creates elements for improving site visitors' interaction with web pages, such as dropdown menus, animated graphics, and dynamic background colors.

## Tools

- [`vsCode (Code Editor)`](https://code.visualstudio.com/)

> Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.

- [`GIT (Version Control)`](https://git-scm.com/)

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

## Feature

- Modal

> A modal (also called a modal window or lightbox) is a web page element that displays in front of and deactivates all other page content. To return to the main content, the user must engage with the modal by completing an action or by closing it. in this project I create modal using CSS and Javascript, for which I created the `modal.js` file separately. in this modal i create if u click form input modal will active and if u wanna deactive the modal u should press any in this page except form input.

- Filter

> Filter is a content control that is used to filter the content that we want to filter based on points or parameters. This filter in this challenge we should make a filter with the parameters `Date, Time, and Capacity`. the logic in this filter are, for capacity if data.capacity >= capacity (input), will return a car capacity that is greater than the input, and for date Logic we should merge between time and date using `new Date` and then we make condition, if data.availableAt <= newDate (date and time input). will return a car available on this day and next day, and also will return an error message when inputting yesterday or the past day.

## How To run ?

```
- Open Vs Code
- Turn On Live Server
- Go to Folder Public -> `will show landing page`
- Click Button `Mulai Sewa Mobil`
- Input ur Filter -> `if ur confuse please read feature above part of filter`
- Press Button `Cari Mobil`
```
