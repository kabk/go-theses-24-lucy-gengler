$(document).ready(function () {
    var chapterColors = [
        { background: '#ffffff', text: '#b17c2b' },
        { background: '#6b97e9', text: '#ffffff' },
        { background: '#EEEEEE', text: '#ff73d4' },
        { background: '#ffffff', text: '#347e1e' },
        { background: '#ff7300', text: '#ffffff' },
        { background: '#ffffff', text: '#5e3812' },
        { background: '#fde9d9', text: '#ff6c00' },
        { background: '#d9f2e3', text: '#00ff00' }
        // Add more chapters as needed
    ];

    var originalNavColor = $('nav').css('color');
    var originalBackgroundColor = $('body').css('background-color');
    var originalTextColor = $('body').css('color');

 

    function updateFootnoteColor(color) {
        $('.footnote-content').css('color', color); // Update footnote content color
        $('.footnote-ref').css('color', color); // Update footnote reference color
        $('.footnote-display').css('color', color);
    }

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        $('.chapter-section').each(function (index, element) {
            var chapterPosition = $(element).offset().top;
            var chapterHeight = $(element).outerHeight();

            if (scrollPosition >= chapterPosition && scrollPosition < chapterPosition + chapterHeight) {
                $('body').css({
                    'background-color': chapterColors[index].background,
                });
                $('body, h1, h2, h3, p, figcaption, li, nav ').css({
                    'color': chapterColors[index].text
                });

                var headings = document.querySelectorAll( 'h2' );
                headings.forEach( function( heading ) {
                    heading.style.setProperty( '--background-color', chapterColors[index].background )
                } );

                $('nav').css('color', chapterColors[index].text);

                $('nav a').css({
                    'color': chapterColors[index].text,
                    'background-color': chapterColors[index].background
                });

                // Update footnote color
                updateFootnoteColor(chapterColors[index].text);

                return false;
            }
        });

        if (scrollPosition === 0 || scrollPosition < 50) {
            $('nav').css('color', originalNavColor);
            $('body').css({
                'background-color': originalBackgroundColor,
            });

            $('body, h1, h2, h3, p, li, nav figcaption').css({
                'color': originalTextColor
            });

            $('nav a').css({
                'color': originalNavColor,
                'background-color': 'transparent'
            });

            // Update footnote color
            updateFootnoteColor(originalTextColor);
        }
    });

   
    var toc = $("nav.table-of-contents");
    var introduction = $("#intro");
    var tocInitialPosition = toc.offset().top;

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition >= tocInitialPosition) {
            toc.addClass("sticky");
        } else {
            toc.removeClass("sticky");
        }
    });

    var image = $('#sticky-image');
    var threshold = 500;

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition > threshold) {
            image.addClass('sticky');
        } else {
            image.removeClass('sticky');
        }
    });
});





document.addEventListener('DOMContentLoaded', function() {
    // Get all footnote reference elements
    const footnoteRefs = document.querySelectorAll('.footnote-ref');
    
    // Loop through each footnote reference
    footnoteRefs.forEach(function(footnoteRef) {
        // Add click event listener
        footnoteRef.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            // Get the ID of the footnote content from the data attribute
            const footnoteId = footnoteRef.dataset.footnoteId;
            
            // Toggle the visibility of the corresponding footnote content
            const footnoteContent = document.getElementById(footnoteId);
            if (footnoteContent) {
                footnoteContent.style.display = footnoteContent.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});


$(document).ready(function() {
    $(".bibliography").click(function() {
        var refId = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(refId).offset().top
        }, 1000);
    });
});


$(document).ready(function() {
    // Smooth scrolling for internal links
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', function () {
    nav.classList.toggle( 'opened' );
    //nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
  });
});




