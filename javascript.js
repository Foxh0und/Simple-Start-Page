		/* QUICK SEARCH */

	var allSites = [
	
		['-a ', 'amazon', 'https://www.amazon.it/s/ref=nb_sb_noss_2?__mk_it_IT=ÅMÅŽÕÑ&url=search-alias%3Daps&field-keywords='],
		['-f ', 'facebook', 'https://www.facebook.com/search/top/?q='],
		['-g', 'google', 'http://www.google.com/search?q='],
		['-i ', 'google_img',	'https://www.google.com/search?hl=au&site=imghp&tbm=isch&source=hp&biw=1540&bih=762&q='],
		['-r ', 'reddit', 'https://www.reddit.com/search?q='],
		['-w ', 'wikipedia', 'https://it.wikipedia.org/wiki/'],
		['-y ', 'youtube', 'https://www.youtube.com/results?search_query='],
		['-th', 'thesaurus', 'http://www.thesaurus.com/browse/'],		
		['-ip ', 'iptorrents', 'http://iptorrents.com/search?q=',],
		['-gt ', 'google_translate', 'https://translate.google.com/?hl=it#auto/it/'],
		['-gn', 'google_news','https://news.google.com/news/search/section/q/'],
	]
	
	var defaultSearch = 'https://duckduckgo.com/?q=';

	
	/* INPUT SEARCH */
	
	var input1 = document.getElementById('input1');
	var help = document.getElementById('help');
	
	input1.addEventListener('keypress', function(event){

	function clearInput(){
		input1.value = '';
		input1.focus();
		input1.blur();
		input1.focus();
		help.style.display = 'none';
		event.preventDefault();
	}


	if (event.keyCode == 13 || event.which == 13){
			var value = input1.value;
		
		
			if (value == ''){
				help.style.display = 'none';
				
				event.preventDefault();
				return false;
			}

			else {
				for (i=0; i<allSites.length; i++){
					switch (value.substr(0,3)){
						case allSites[i][0]:
							window.open(allSites[i][2] + escape(input1.value.slice(3)));
							clearInput();
							return false;
							break;
					}
				}
				window.open(defaultSearch + escape(input1.value));
				clearInput();
				return false;
			}
		}
	})
