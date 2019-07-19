
var settings = {
	needLogout: false,
	lastLogin: [],
	chatPage: [],
}
var emotes = [];

var pauseClick = true;

var login = false;

var bits_total = 0;
var cheer_count = 0;

Array.prototype.random = function() {return this[Math.floor((Math.random()*this.length))];};
var MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

var mails = ["gmail.com", "hotmail.com"].random();


jQuery(document).ready(function($) {

	$.initialize('.hd-container-header-interact', function(){
		//alert('click');
		var elem = $('#truex_content')[0];//this;
		setTimeout(function(){
			simulate(elem, 'click');
			simulate(elem, 'mousedown');
			simulate(elem, 'mouseup');
		}, random(7000, 12000));
		
	});

	$.initialize('video', function(){
		$(this).get(0).pause();
		$(this).attr('src', '');
		$(this).remove();
	})

	$.initialize('.hd-container-header-action span', function(){
		$(this).click();
	});
	
	var path = window.location.pathname;
	var match = path.match(/^\/popout\/(\w+)\/chat$/)
	
	var isChat = (match != null) && (match.length == 2);
	getSettings();
	if(isChat)
	{
		settings.chatPage = match[1];
		setSettings(settings);
		var bits;

		$.initialize('button[data-a-target="room-selector-button"]', function(){
			$(this).html('<div id="logout">logout<\/div>');
			$('#logout').click(function(){
				unlog();
			});
		});

		
		$.initialize('.watch-ad-error__error-image', function(){
			$(this).remove();
		});

		$.initialize('.reward-gift-user-notice', function(){
			$(this).remove();
		});

		$.initialize('[data-test-selector="chat-private-callout-queue__callout-container"]', function(){
			$(this).remove();
		});
		

		$.initialize('button[data-test-selector="bits-card-intro-skip-selector"]', function(){
			$(this).click();
		});
		
		

		$.initialize('button[data-a-target="bits-button"]', function() {
			$('<div>', {
				id: 'farm',
				html: '<div id="farm-counter">0<\/div> | <div id="bits-counter"><\/div>'
			}).appendTo('#root');
			
			$('<div>', {
				id: 'play_pause_farm',
				html: 'pause'
			}).click(function(){
				pauseClick = !pauseClick;
				if(!pauseClick)
				{
					$('button[data-a-target="get-bits-button"]').click();
					
					$(this).text('pause');
				}
				else
				{
					$(this).text('play');
				}
					

			}).text('enjoy;)').appendTo('#root');

			$(this).click();
		});

		$.initialize('.cheermote-prefix-selector__cheermotes', function(){
			emotes = getEmotes();
		});

		$.initialize('.watch-ad-error__footer', function()
		{

			setTimeout(function(){
				$('button[data-a-target="bits-buy-card-close-button"]').click();
			}, 3000);
		});

		$.initialize('.cheermote-for-amount__cheer-image', function()
		{
			$(this).remove();
			$('button[data-a-target="bits-watch-another-ad"]').click();
		});

		$.initialize('.cheermote-for-amount__cheer-amount', function(){
			setTimeout(function(){
				$('button[data-a-target="bits-buy-card-close-button"]').click();
			}, 500);
		});



		$.initialize('.cheer-badge__image', function(){
			$(this).remove();
		});

		
		$.initialize('.cheermote-prefix-selector', function(){
			//$(this).remove();
			$(this).hide();
		});
		

		$.initialize('.chat-line__message--cheer-amount', function(){
			console.log($(this).text());
			bits_total += parseInt($(this).text(), 10);
			cheer_count++;
			$('#bits-counter').text(bits_total+'('+cheer_count+')');
		});

		$.initialize('.bits-count span', function(){

			
			$(this).find('img').remove();
			match = $(this).text().match(/^\s([\d]{1,7})\sBits$/i);

			if(match != null && match.length > 1)
				bits = match[1];

			var $counter = $('#farm-counter');
			$counter.text(bits);
			$('#farm').click(function() {
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

		$.initialize('.hd-container-header-action', function(){
			$(this).click();
		})
		
		$.initialize('button[data-a-target="get-bits-button"]', function(){
			if($(this).is(":visible") && !pauseClick)
			{
				$(this).click();
			}
		});

		$.initialize('.bits-buy-card__sub-text', function(){
			$('button[data-a-target="bits-buy-card-close-button"]').click();
		});

		$.initialize('button[data-a-target="bits-watch-ad"]', function(){
			if(!pauseClick)
			{
				if($(this).hasClass('tw-button--disabled'))
				{
					$('button[data-a-target="bits-buy-card-close-button"]').click();
				}
				else
				{
					$(this).click();
				}
			}
		});
		$.initialize('button[data-a-target="bits-watch-another-ad"]', function(){
			if(!pauseClick)
			{
				$(this).click();
			}
		});
		
		$.initialize('.chat-line__message', function(){
			$(this).find('.chat-image').remove();
		});

	}
	else if(path == '/' || path == '/friends')
	{
		//clearPage();
		if(settings.needLogout)
			logout();
		else
			register();
	}
	else if(path == '/hi')
	{
		window.location.href = "https://www.twitch.tv/friends";
	}

	function isAdOpen()
	{
		return true;//!!($('body').has('.ReactModal__Body--open').length);
	}

	function updateInput(textfield)
	{
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

		$.initialize('div[data-a-target="auth-form-tab-container"] > div > ul > li[data-index="0"] > button', function(){
			$(this).click(function(){
				login = true;
			});
		});

		$.initialize('button[data-a-target="passport-login-button"]', function(){
			if(!login)
				$('div[data-a-target="auth-form-tab-container"] > div > ul > li[data-index="1"] > button').click()
		});

		$.initialize('body.logged-in', function(){
			if(settings.chatPage.length > 2)
				window.location.href = "/popout/"+settings.chatPage+"/chat";
		});

		$.initialize('button[data-a-target="signup-button"]', function(){
			$(this).click();
		});

		
		$.initialize('div[data-a-target="signup-username-input"] input', function(){
			
			var username = faker.internet.userName();
			username = username.replace(/(?![A-z_\d])./, '').upper();
			var nickname = document.querySelector('div[data-a-target="signup-username-input"] input');

			nickname.value = username;
			updateInput(nickname);


			var passinput = document.querySelector('div[data-a-target="signup-password-input"] input');
			passinput.type = "text";

			passinput.value = MD5(nickname.value);
			updateInput(passinput);

			/*if(nickname.value != passinput.value)
			{
				passinput.value = nickname.value;
				updateInput(passinput);
			}*/
		
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

function simulate(element, eventName)
{
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers)
    {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents')
        {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        }
        else
        {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
            options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
            options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    }
    else
    {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
}

var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
}
var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
}

function unlog()
{
	settings.needLogout = true;
	setSettings(settings);
	window.location.href = "https://www.twitch.tv/friends";
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
