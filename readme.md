# ASSeRT Website

This reporsitory contains the website for the Rowan University ASSeRT website. For someone new to web development there is a lot here. Hopefully this guide will clearly walk you through basic tasks you might need to do, without knowing much HTML at all.

If you'd like to learn more about HTML, it is pretty straightforward. I recommend [Codecademy](https://www.codecademy.com/learn/web).

## Outline

* [Editing The Current Site](#editing-the-current-site)
  * [Finding The Right File](#finding-the-right-file)
  * [Changing Text](#changing-text)
  * [Adding a Publication](#adding-a-publication)
  * [Removing Someone From the People Page](#removing-someone-from-the-people-page)
* [Adding New Content](#adding-new-content)

## Editing The Current Site

This sections covers any tasks you may need to complete with respect to changing something which you can already see on the site. This may include changing wording, removing a student from the "People" page, or adding new publications.

### Finding The Right File

If you're going to make a change, you need to find the right file first. Most likely you'll be looking for a \*.html file (the * here stands for any word). As an example, if you're looking to change the "Research" page you will edit *people.html*. You will very rarely need to edit \*.css files. If you do need to edit them, be sure to do some learning first, because HTML and CSS are very different. You should **NEVER** edit \*.js files unless you are 100% sure you know what you are doing.

### Changing Text

This will almost exclusively occur in the \*.html files, between paragraph '\<p\>\<p\>' elements. Go to the file you are looking to change, and edit the text. Be sure to only change text itself, and not any elements.

If you would like to add additional text, you have 2 options:

1. Add another '<p></p>' set of elements where you would like to add the text. Be sure that this before or after another set, and not inside one. Add your text between these elements.
2. If you dont want to add any new paragraph elements, but still want another line break in the text, you can use a 
'<br>' element where you would like the line break to be in the text. This should be within a set of paragraph elements.

### Adding a Publication

An example of one of the publications in *publications.html* is:

```html
options(width=100px)
<p>
    Joppa, M.C., Rizzo, C. J., &amp; Johnson, J. R.* (2015, May). Information technology, social networking, and controlling behaviors among adolescent girls involved in dating violence. Poster presented at the 2015 Society for Prevention Research Annual Conference, Washington, DC.

    [<a href="docs/SPRPoster2015Final.pptx">download</a>]
</p>
```

If you want to add a new publication, you can copy and paste the entirety of HTML for a publication (such as the HTML shown above) and edit the text to match the new publication. If there is a downloadable document for the publication, you should add the new document to the *docs/* folder, and then change the address in the 'href' tag to the proper document name.

### Removing Someone From the People Page

The way to do this is to go to the *people.html* file and remove the block similar to below for the specific person you want to remove.

```html
<div class="col-sm-4">
    <img src="img/lab_photos/bleiweiss.JPG" class="bw transitions">
    <h5><a href="#openModal" id="bleiweiss" class="heavy">Kaitlyn Bleiweiss</a> | Undergraduate Student</h5>
</div>
```

Additionally you need to edit the *bio.json* file. This is tricky to do so be careful. You should remove the portion resembling the block below, but for the specific person you want removed.

```json
"zucca":{
        "bioContent":["Katie Zucca is a non-matriculating student at Rowan University. She graduated from Wilmington Friends High School in June 2016 and decided to take a gap year prior to attending Furman University. Katie is using her gap year as a way to explore possible career interests. The ASSeRT Lab has been instrumental in gaining insight into the field of psychology and how that applies to teens."],
        "bioHeading":"Katie Zucca",
        "bioImage":"zucca.JPG"
    },
```

It's especially important that you focus on balancing the commas. Notice that there is a comma after the last curly bracket. This one needs to be removed along with the rest of the data. If you are removing the last person in the list, they will not have a comma after their block. Instead, you will need to remove the comma before their part.

## Adding New Content

This section covers any tasks which involve adding new content to the site. This may be a little more complicated than things in the last section. This will include adding a new person to the "People" page.

## Contact

I'd prefer that you try to do this on your own. If you really do need some help though, you can contact me at [austincarrig@gmail.com](mailto:austincarrig@gmail.com).