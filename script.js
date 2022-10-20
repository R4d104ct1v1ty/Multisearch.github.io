const input = document.querySelector('input');
const btn = document.querySelector('button');
var newValue = '';
let engine = 'google';

var x = new URL("https://www.google.com");


input.addEventListener('input', function(ev){
   switch(input.value.toLowerCase().trim()){
        case 'youtube':
            input.value = 'Search Youtube | ';
            engine = 'youtube';
            break;
        case 'github':
            input.value = 'Search GitHub | ';
            engine = 'github';
            break;
        case 'docs':
            input.value = 'Search docs | ';
            engine = 'docs';
            break;
        case 'slides':
            input.value = 'Search Slides | ';
            engine = 'slides';
            break;
        case 'sheets':
            input.value = 'Search Sheets | ';
            engine = 'sheets';
            break;
   }
   switch(engine) {
        case 'youtube':
            if (input.value.length < 16) {
                engine = "google";
                input.value = "";
            }
            break;
        case 'github':
            if (input.value.length < 15){
                engine = 'google';
                input.value = '';
            }
            break;
        case 'docs':
            if (input.value.length < 13){
                engine = 'google';
                input.value = '';
            }
            break;
        case 'slides':
            if (input.value.length < 15){
                engine = 'google';
                input.value = '';
            }
            break;
        case 'sheets':
            if (input.value.length < 15){
                engine = 'google';
                input.value = '';
            }
            break;
   }

})

btn.addEventListener('click', function(){
    switch(engine){
        case 'google':
            newValue = input.value;
            x.pathname = 'search'; 
            x.searchParams.set('q', newValue);
            window.location.href = x.href;
            input.value = '';
            newValue = '';
            break;
        case 'youtube':
            x = new URL('https://www.youtube.com');
            newValue = input.value.slice(16);
            x.pathname = 'results';
            x.searchParams.set('search_query', newValue);
            window.location.href = x.href;
            input.value = '';
            newValue = '';
            engine= 'google';
            x = new URL("https://www.google.com");
            break;
        case 'github':
            x = new URL('https://github.com');
            newValue = input.value.slice(15);
            x.pathname = 'search';
            x.searchParams.set('q', newValue);
            window.location.href = x.href;
            input.value = '';
            newValue = '';
            engine= 'google';
            x = new URL("https://www.google.com");
            break;
        case 'docs':
            x = new URL('https://docs.google.com');
            newValue = input.value.slice(13);
            x.pathname = 'document/u/0';
            x.searchParams.set('tgif', 'd');
            x.searchParams.set('q', newValue);
            window.location.href = x.href;
            input.value = '';
            newValue = '';
            engine= 'google';
            x = new URL("https://www.google.com");
            break;
        case 'slides':
            x = new URL('https://docs.google.com');
            newValue = input.value.slice(15);
            x.pathname = 'presentation/u/0';
            x.searchParams.set('tgif', 'd');
            x.searchParams.set('q', newValue);
            window.location.href = x.href;
            input.value = '';
            newValue = '';
            engine= 'google';
            x = new URL("https://www.google.com");
            break;
        case 'sheets':
            x = new URL('https://docs.google.com');
            newValue = input.value.slice(15);
            x.pathname = 'spreadsheets/u/0';
            x.searchParams.set('tgif', 'd');
            x.searchParams.set('q', newValue);
            window.location.href = x.href;
            input.value = '';
            newValue = '';
            engine= 'google';
            x = new URL("https://www.google.com");
            break;
            
    }
    
})

function submit(e){
    if (e.code == 'Enter'){
        switch(engine){
            case 'google':
                newValue = input.value;
                x.pathname = 'search'; 
                x.searchParams.set('q', newValue);
                window.location.href = x.href;
                input.value = '';
                newValue = '';
                engine= 'google';
                break;
            case 'youtube':
                x = new URL('https://www.youtube.com');
                newValue = input.value.slice(16);
                x.pathname = 'results';
                x.searchParams.set('search_query', newValue);
                window.location.href = x.href;
                input.value = '';
                newValue = '';
                engine= 'google';
                x = new URL("https://www.google.com");
                break;
            case 'github':
                x = new URL('https://github.com');
                newValue = input.value.slice(15);
                x.pathname = 'search';
                x.searchParams.set('q', newValue);
                window.location.href = x.href;
                input.value = '';
                newValue = '';
                engine= 'google';
                x = new URL("https://www.google.com");
                break;
            case 'docs':
                x = new URL('https://docs.google.com');
                newValue = input.value.slice(13);
                x.pathname = 'document/u/0';
                x.searchParams.set('tgif', 'd');
                x.searchParams.set('q', newValue);
                window.location.href = x.href;
                input.value = '';
                newValue = '';
                engine= 'google';
                x = new URL("https://www.google.com");
                break;
            case 'slides':
                x = new URL('https://docs.google.com');
                newValue = input.value.slice(15);
                x.pathname = 'presentation/u/0';
                x.searchParams.set('tgif', 'd');
                x.searchParams.set('q', newValue);
                window.location.href = x.href;
                input.value = '';
                newValue = '';
                engine= 'google';
                x = new URL("https://www.google.com");
                break;
            case 'sheets':
                x = new URL('https://docs.google.com');
                newValue = input.value.slice(15);
                x.pathname = 'spreadsheets/u/0';
                x.searchParams.set('tgif', 'd');
                x.searchParams.set('q', newValue);
                window.location.href = x.href;
                input.value = '';
                newValue = '';
                engine= 'google';
                x = new URL("https://www.google.com");
                break;
                
        }
    }
}

input.addEventListener('keydown', submit);

