$(document).ready(function() {
    $('#rss').feeds({
        feeds: {
            feed1: 'http://diario.pr3ssh.net/feed',
        },
        entryTemplate: 'Template',
        max: 3,
        loadingTemplate: '<p class="feeds-loader">Cargando el diario...</p>',
        preprocess: function ( feed ) {
            // Change the publishedDate format from UTC to dd-mm-yyyy
            // Inside the callback 'this' corresponds to the entry being processed
            var date = new Date(this.publishedDate);
            console.log(date);
            var pieces = [date.getDate(), date.getMonth()+1, date.getFullYear()]
            this.publishedDate = pieces.join('/');
        }
    });
});

