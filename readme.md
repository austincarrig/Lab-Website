# ASSeRT Website

This reporsitory contains the website for the Rowan University ASSeRT website. For someone new to web development there is a lot here. Hopefully this guide will clearly walk you through basic tasks you might need to do, without knowing much HTML at all.

If you're a developer, this site is pretty straightforward. It's just a Bootstrap site which use HTML, CSS, and a little JS for some template addition. The HTML for the header, footer, and "profile" pages are all in the "TemplateElements" folder. The info for the bios is in the bio.json file.

If you're a lab member who has no idea what to do, it's fine. I did my best to outline in very detailed steps how to do all of the things you might need to do to edit the website. Try your best to follow the steps, but if you have trouble you can contact me. My information is at the bottom of the page.

I've put a short HTML tutorial at the bottom of this page as well. It goes over the basics of HTML, and might take away some of your confusion.

If you'd like to learn more about HTML, it is pretty straightforward. I recommend tutorials from [Codecademy](https://www.codecademy.com/learn/web).

## Outline

* [Accessing iPage](#accesing-ipage)
  * [Logging On](#logging-on)
* [Editing The Site](#editing-the-site)
  * [Finding The Right File](#finding-the-right-file)
  * [Changing Text](#changing-text)
  * [Removing Someone from the People Page](#removing-someone-from-the-people-page)
* [Adding New Content](#adding-new-content)
  * [Adding Someone New to the People Page](#adding-someone-new-to-the-people-page)
  * [Adding a Publication](#adding-a-publication)
* [HTML Tutorial](#html-tutorial)
  * [What are elements?](#what-are-elements)
  * [Required Elements](#required-elements)
  * [Common Elements](#common-elements)
* [Contact the Developer](#contact-the-developer)

## Accessing iPage

This section will cover how to get onto iPage, the service which hosts the lab website. It will also go over how to edit the files on the site directly from iPage.

### Logging On

You need to go to the [iPage Login Site](https://www1.ipage.com/secure/login.bml).

![iPage Login Page](/readme_img/ipage-login.png "iPage Login Page")

Once you do, you need to ask Dr. Angelone or Dr. Joppa for the login username and password. Once you have that, just log in and you should see a page like this:

![iPage Control Panel](/readme_img/ipage-control-page.png "iPage Control Panel")

On this page there should be an option called "File Manager". You should never need to use any other option on this page. Once you select this option you should see a page liek this:

![iPage File Manager](/readme_img/ipage-file-manager.png "iPage File Manager")

On this page you'll see all of the files that make up the lab website. On the main page you can see files such as `people.html` and `index.html`, as well as folders like `img`.

### Handling Files

There are 3 main buttons you will use if you want to change the website. The first is the blue up arrow in the top options bar. This is used to upload new files to the website. You should only ever need to upload images, unless you are making major changes to the website and adding entriely new pages. Pressing this button will open a file browser in your computer's file system, so you can select the correct file you want to upload from there. If you want to upload the file into the server's `/img/lab_photos` folder then you should navigate there first in the iPage File Manager, then use the upload option.

The second button is the blue down arrow next to each file in the File Manager. This will allow you to download the file to your computer.

The third button is the green pencil, which is the "edit" button. If you press this, a screen like the image below will appear on your web page, and you can directly edit the file. You should only really be using this on the `*.html` files and the `bio.json` file.

## Editing The Site

This section covers any tasks you may need to complete with respect to changing something which you can already see on the site. This may include changing wording, removing a student from the "People" page, or adding new publications.

### Finding The Right File

If you're going to make a change, you need to find the right file first. Most likely you'll be looking for a `*.html` file (the * here stands for any word). As an example, if you're looking to change the "Research" page you will edit `people.html`. You will very rarely need to edit `*.css` files. If you do need to edit them, be sure to do some learning first, because HTML and CSS are very different. You should **NEVER** edit `*.js` files unless you are 100% sure you know what you are doing.

### Changing Text

This will almost exclusively occur in the `*.html` files, between paragraph `<p></p>` elements. Go to the file you are looking to change, and edit the text. Be sure to only change text itself, and not any elements.

If you would like to add additional text, you have 2 options:

1. Add another `<p></p>` set of elements where you would like to add the text. Be sure that this before or after another set, and not inside one. Add your text between these elements.
2. If you dont want to add any new paragraph elements, but still want another line break in the text, you can use a 
`<br>` element where you would like the line break to be in the text. This should be within a set of paragraph elements.

### Removing Someone from the People Page

The way to do this is to go to the `people.html` file and remove the block similar to below for the specific person you want to remove.

```html
<div class="col-sm-4">
    <img src="img/lab_photos/bleiweiss.jpg" class="bw transitions">
    <h5><a href="#openModal" id="bleiweiss" class="heavy">Kaitlyn Bleiweiss</a> | Undergraduate Student</h5>
</div>
```

Additionally you need to edit the `bio.json` file. This is tricky to do so be careful. You should remove the portion resembling the block below, but for the specific person you want removed.

```json
"zucca":{
        "bioContent":["Katie Zucca is a non-matriculating student at Rowan University. She graduated from Wilmington Friends High School in June 2016 and decided to take a gap year prior to attending Furman University. Katie is using her gap year as a way to explore possible career interests. The ASSeRT Lab has been instrumental in gaining insight into the field of psychology and how that applies to teens."],
        "bioHeading":"Katie Zucca",
        "bioImage":"zucca.jpg"
    },
```

It's especially important that you focus on balancing the commas. Notice that there is a comma after the last curly bracket. This one needs to be removed along with the rest of the data. If you are removing the last person in the list, they will not have a comma after their block. Instead, you will need to remove the comma before their part.

## Adding New Content

This section covers any tasks which involve adding new content to the site. This may be a little more complicated than things in the last section. This will include adding a new person to the "People" page.

Unless you really feel comfortable about this stuff just contact me and I'll do it. This is getting into the area of you spending far more time than I would to do something.

### Adding Someone New to the People Page

I'll cover this in less detail, because there are a lot of layers to this. I've put the steps you should follow into a list below:

1. Put the new person's picture into the `img/lab_photos` directory. Look at the other pictures in the directory. This picture should match their dimensions (meaning it should have the same height and width).

2. Open `people.html` and find a set of elements that looks like this:

```html
<div class="col-sm-4">
    <img src="img/lab_photos/bleiweiss.jpg" class="bw transitions">
    <h5><a href="#openModal" id="bleiweiss" class="heavy">Kaitlyn Bleiweiss</a> | Undergraduate Student</h5>
</div>
```

Copy this code block. Paste it into wherever you would like to put the new person in the order of pictures on the people page. Change the value assigned to the `id` property to the new person's last name, all lowercase. Change the area with the old person's first and last name to the new person's first and last name. Finally, change the value assigned to the `src` property to the location in the file system of the new person's picture (this will be the picture you just put in the directory in step 1).

3. Open `bio.json`. Go the the bottom of the file, and copy one person's entire json block. It will look something like this:

```json
"zucca":{
        "bioContent":["THIS IS MY BIO WEEEE"],
        "bioHeading":"Katie Zucca",
        "bioImage":"zucca.jpg"
    },
```

Paste this below the block you copied. Change the info in the `bioContent` field to the person's biography. Change the `bioHeading` value to the person's name, and the `bioImage` value to the person's image, which you added to the `img/lab_photos` directory in step 1.

If anything goes wrong with this, just let me know. Step 2 can be especially tricky because you have to move people around.

### Adding a Publication

An example of one of the publications in `publications.html` is:

```html
options(width=100px)
<p>
    Joppa, M.C., Rizzo, C. J., &amp; Johnson, J. R.* (2015, May). Information technology, social networking, and controlling behaviors among adolescent girls involved in dating violence. Poster presented at the 2015 Society for Prevention Research Annual Conference, Washington, DC.

    [<a href="docs/SPRPoster2015Final.pptx">download</a>]
</p>
```

If you want to add a new publication, you can copy and paste the entirety of HTML for a publication (such as the HTML shown above) and edit the text to match the new publication. If there is a downloadable document for the publication, you should add the new document to the `docs/` folder, and then change the address in the `href` tag to the proper document name.

## HTML Tutorial

HTML stands for HyperText Markdown Language. Every website on the internet uses HTML to display it's content. HTML is used to define the "outline" for a website. All of the colors, fonts, animations, and pretty much everything else that mkaes a website look good or work well is added using CSS, Javascript, PHP, Python, and any number of other languages. Fortunately we don't have to worry about those. All that concerns us when talking about HTML is the content of the website itself, such as text, titles, images, and hyperlinks.

### What are elements?

HTML is made up entirely of pieces of code we call elements. Almost all elements come in pairs: an opening tag; and a closing tag. An example of this would be the paragraph tags `<p></p>`.

Opening tags will always be a less-than sign `<`, followed by some text denoting the element type (e.g. `p`, `h1`, `body`), followed by a greater-than sign `>`. As an example, an opening paragraph tag will look like `<p>`.

A closing tag should be identical to it's matching opening tag, except there should be a forward slash `/` right after the less-than sign. A closing paragraph tag will look like `</p>`.

HTML elements come in pairs becuase we almost always put something between the tags, and opening and closing tags signify the start and end of a particular element, respectively. So as an example, if we wanted to add a heading to our page with the words "Rowan ASSeRT Psychology Lab", we would use the following tags:

```html
<h1>Rowan ASSeRT Psychology Lab</h1>
```

There are exceptions to the "elements come in pairs" rule, most notably the image `<img>` element, which has no matching closing element. For these types of elements, the information contained in them is usually specified in the element tag itself, in the form of tag properties. As an example, an image element will specify the location of the image contained within it using the `src` property, like this: `<img src="img/lab_photos/carrig.jpg">`. In this example, `src` is set equal to the location of the image, which in this case is `carrig.jpg`. If you wanted to change which image appeared in the element, you would change the value assigned to the source property.

### Required Elements

Every HTML file has 3 elements which are required no matter what, and these are the `/<html/>`, `/<head/>`, and `/<body/>` tags.

The `/<html/>` tag is the very highest level element on the web page, and contains all of the content. The only tags that should go in the `/<html/>` element are `/<head/>` and `/<body/>`.

The `/<head/>` should contain all of the information ABOUT the web page, but none of the actual content (like headings, images, and paragraphs). As a lab member you should never need to edit anything contained in this element.

The `/<body/>` should contain all visible content on the web page. This is where you will put the headings, paragraphs, images, and everything else you can see. This is where almost all of your work will take place.

### Common Elements

The most common element types, which you will see in every HTML file in this project, are covered below.

`/<p/>` is used to contain paragraphs and normal sentences.

`/<h1/>` through `/<h6/>` are used for different heading sizes, with 1 being the largest and 6 being the smallest. The sizes are somewhat arbitrary and are most often altered by the developer to fit the design needs of the website, but it can be useful for organization to put different "types" of headings in different heading element types.

`/<img/>` is used for images. Notably, as explained in the "[What are elements?]"(#what-are-elements) section, the `/<img/>` has no closing tag accompanying it.

`/<div/>` stands for "divider" and is used as an organiztional tool. Rather than containing words, they contain other elements.

## Contact the Developer

Personal E-mail: [austincarrig@gmail.com](mailto:austincarrig@gmail.com).