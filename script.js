var settings = {
	needLogout: false,
	lastLogin: [],
	chatPage: []
}
var emotes = [];


Array.prototype.random = function() {return this[Math.floor((Math.random()*this.length))];};
var mails = ["gmail.com", "hotmail.com"].random();
jQuery(document).ready(function($) {
	var path = window.location.pathname;
	var match = path.match(/^\/popout\/(\w+)\/chat$/)

	var css = '';
	var style = document.createElement('style');
	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
	document.getElementsByTagName('head')[0].appendChild(style);

	
	var isChat = (match != null) && (match.length == 2);
	console.log(settings);
	getSettings();
	if(isChat)
	{
		settings.chatPage = match[1];
		setSettings(settings);
		var bits;
		$.initialize('#chat-room-header-label', function(){
			$(this).html('<div id="logout">logout<\/div>');
			$('#logout').css({"font-size":"20px", "cursor":"pointer", "user-select":"none", "background":"white", "border":"1px solid black", "padding":"5px"}).click(function(){
				unlog();
			});
		});
		
		$.initialize('button[data-a-target="room-selector-button"]', function(){
			$(this).remove();
		});

		$.initialize('button[data-a-target="bits-button"]', function() {
			$('<div/>', {
				id: 'farm',
				html: '<div id="farm-counter">0<\/div>'
			}).appendTo('#root');
			$(this).click();
		});

		$.initialize('.cheermote-prefix-selector__cheermotes', function(){
			emotes = getEmotes();
		});

		$.initialize('.bits-count span', function(){
			$(this).find('img').remove();
			match = $(this).text().match(/^\s([\d]{1,7})\sBits$/i);

			if(match != null && match.length > 1)
				bits = match[1];

			var $counter = $('#farm-counter');
			$counter.text(bits);
			$counter.click(function() {
				if(bits != 0)
				{
					var textfield = $('textarea[data-a-target="chat-input"]')[0];
					textfield.value = emotes.random()+bits;
					updateInput(textfield);
					$btn = $('button[data-a-target="chat-send-button"]').click();
					bits = 0;
					$counter.text(0);
				}

			});
		});
		$.initialize('.chat-line__message', function(){
			$(this).find('.chat-image').remove();
		});
	}
	else if(path == '/')
	{
		clearPage();
		if(settings.needLogout)
			logout();
		else
			register();
	}
	else if(path == '/hi')
	{
		window.location.href = "https://www.twitch.tv/";
	}
	function updateInput(textfield)
	{
		console.log(textfield);
		evt = document.createEvent("Events");
		evt.initEvent("change", true, true);
		textfield.dispatchEvent(evt);

	}



	function logout()
	{
		$.initialize('button[data-a-target="user-menu-toggle"]', function(){
			$(this).click();
		});

		$.initialize('button[data-a-target="dropdown-logout"]', function(){
			settings.lastLogin = $(this).find('h6[data-a-target="user-display-name"]').text();
			settings.needLogout = false;
			setSettings(settings);
			$(this).click();
		});

		$.initialize('button[data-a-target="signup-button"]', function(){
			settings.needLogout = false;
			setSettings(settings);
			location.reload();
		});
	}


	function register()
	{
		$.initialize('body.logged-in', function(){
			if(settings.chatPage.length > 2)
				window.location.href = "/popout/"+settings.chatPage+"/chat";
		});

		$.initialize('button[data-a-target="signup-button"]', function(){
			$(this).click();
		});

		
		$.initialize('div[data-a-target="signup-username-input"] input', function(){
			
			var username = faker.internet.userName();
			console.log(username);
			username = username.replace(/(?![A-z_\d])./, '').upper();
			var nickname = document.querySelector('div[data-a-target="signup-username-input"] input');
			console.log(username);
			nickname.value = username;
			updateInput(nickname);


			var passinput = document.querySelector('div[data-a-target="signup-password-input"] input');
			if(nickname.value != passinput.value)
			{
				passinput.value = nickname.value;
				updateInput(passinput);
			}
		
			var mailinput = document.querySelector('div[data-a-target="signup-email-input"] input');
			var mail = nickname.value + '@' + mails;
			if(mailinput.value != mail)
			{
				mailinput.value = mail;
				updateInput(mailinput);
			}

			bday = document.querySelector('div[data-a-target="birthday-date-input"] input');
			
			date = randomDate();

			bday.value = date.getDate();
			updateInput(bday);
				
			month = document.querySelector('select[data-a-target="birthday-month-select"]');
			month.value = date.getMonth()+1;
			updateInput(month);
				
			year = document.querySelector('div[data-a-target="birthday-year-input"] input');
			year.value = date.getFullYear();
			updateInput(year);
				
			
		});

		$.initialize('div[aria-label="Ввести код подтверждения"]', function(){
			//$(this).click();
			if(settings.chatPage.length > 2)
				window.location.href = "/popout/"+settings.chatPage+"/chat";
		});

		$.initialize('div[aria-label="Verification code input"]', function(){
			//$(this).click();
			if(settings.chatPage.length > 2)
				window.location.href = "/popout/"+settings.chatPage+"/chat";
		});
		
	}

	function clearPage()
	{
		$.initialize('video', function(){
			$(this).get(0).pause();
			console.log($(this));
			$(this).attr('src', '');
			$(this).remove();
			$('main').remove();
		})
	}
	function getEmotes()
	{
		var result = [];
		$('.cheermote-prefix-selector__cheermote').each(function() {
			var $button = $(this).children('button');
			result.push($button.attr('data-key'));
			$(this).empty();
		});
		return result;
	}

});


function unlog()
{
	settings.needLogout = true;
	setSettings(settings);
	window.location.href = "https://www.twitch.tv/";
}

function setSettings(sets)
{
	localStorage.setItem("settings", JSON.stringify(sets));
}

function getSettings()
{
	var ret = JSON.parse(localStorage.getItem("settings"));
	if(ret != null)
		settings = ret;
}

var api_key="1ffad50119bf4cf1e354d2e0d0348cfd8c390c2dde6fb4c998781e4099827359";

var bdateset = false;
var nicknameset = false;



String.prototype.upper=function(str) {
	var ret = this.split("");
	var dot = this.indexOf('.');

	if(randomBool())
		ret[0] = ret[0].toUpperCase();
	
	if(dot)
	{
		if(randomBool())
			ret[dot+1] = ret[dot+1].toUpperCase();
		ret.splice(dot, 1);
	}

	
	ret = ret.join('');
	
	if(randomBool())
		ret+=random(0, 2000);
	
	if(ret.length < 8)
	{
		ret=emotes.random()+ret;
	}
		
	return ret;
};


function rndyn()
{
	return  randomBool() ? 'n' : 'y';
}

function randomBool()
{
	return (Math.random() < 0.7);
}
function random(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function randomDate() {
	var start = new Date(1970, random(0, 11));
    return new Date(start.getTime() + Math.random() * (new Date(1999, random(0, 11)).getTime() - start.getTime()));
}

/*
function farm()
{
	setTimeout(farm, 300);
	
		

	
	var $bits = $('.bits-count span');
	if($bits.length)
	{
		$counter = $('#farm-counter');
		var text = $bits.text().match(/^\s([\d]{1,7})\sBits$/i)[1];
		if(gbits !== text)
		{
			$counter.html(text);
			gbits = text;
			
		}
	}
	
	/*$bits_button = $('button.tw-button-icon[data-a-target="bits-button"]');
	
	switch(menustatus)
	{
		case 'none':
		{
			if($bits_button.length)
			{
				$bits_button.trigger('click');
				menustatus = "bits";
				
			}
			break;
		}
		case 'bits':
		{
			$buy_bits_button = $('button.tw-button[data-a-target="get-bits-button"]');
			if($buy_bits_button.length)
			{
				
				$buy_bits_button.click();
				menustatus = "buy";
			}
			break;
		}
		case 'buy':
		{
			$watch_ad_button = $('button.tw-button[data-a-target="bits-watch-ad"]');
			if($watch_ad_button.length)
			{
				if($watch_ad_button.hasClass('tw-button--disabled'))
				{
					$bits_button.click();
					menustatus = "none";
				}
				else
				{
					$watch_ad_button.click();
					menustatus = "watch";
				}
			}
			break;
		}
		case 'watch':
		{
			$done = $('iframe').contentDocument.body.getElementsByTagName('iframe')[0].contentWindow.document.querySelector('#ad_container > div.hd-container-header.ta-complete > div.hd-container-header-message.remove-left-padding > div.hd-container-header-action');
			
			console.log(menustatus);
			if($done.length)
				$done.click()
				
			// || $('.cheermote-for-amount').length 
			//ReactModal__Overlay
			//$('iframe').contentDocument.body.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('ad_container')
			if($('.watch-ad-error__footer').length 
			|| $('button.tw-button[data-a-target="bits-watch-another-ad"]').length)
			{
				$bits_button.click();
				menustatus = "none";
			}
			break;
		}
	}
	*/
