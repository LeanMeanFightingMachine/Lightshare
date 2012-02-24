var lightshare = function() { };

lightshare.init = function() {
	if(!this.instance) {		
		this.instance = new lightshare();
		
		var self = this.instance;
		
		self.isOpen = false;
		
		$('body').prepend('<style>#lightshare { width:174px; height:51px; font-family: Tahoma, sans-serif; font-size: 13px; color:#999; display:table;position:absolute;top:-100px;border-radius:6px;padding:3px;background:#fff; border: 1px solid #e0e0e0;-webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1); -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1); box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);} #lightshare img { vertical-align: baseline; } #lightshare .title, #lightshare .service { display:table-cell; padding: 3px; } #lightshare-facebook { border:none; overflow:hidden; width:100px; height:21px; } .services { display: table-row; } #lightshare-facebook { position: relative; top: 1px; } </style>');	
		$('body').append('<div id="lightshare">'+
			'<div class="title">Share:</div>'+
			'<div class="services">'+
			'<div class="service"><a href="#" id="lightshare-twitter" title="Share on Twitter"><img src="data:image/png;base64,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" alt="Twitter" /></a></div>'+
			'<div class="service"><iframe id="lightshare-facebook" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>'+
			'</div>'+
			'</div>');
		self.lightshareDO = $('#lightshare');
		self.facebook = $('#lightshare-facebook');	
		self.twitter = $('#lightshare-twitter');	
		
		self.width = self.lightshareDO.width();
		self.height = self.lightshareDO.height();
				
		self.lightshareDO.bind('mouseleave',function(e) {
			self.closeHandler();
		});
				
		$('.lightshare').each(function(i){
			var obj = this;
			$(obj).bind('mouseenter',function(e) {
				self.openHandler(obj);
			});
			$(obj).bind('click',function(e) {
				e.preventDefault();
				e.stopPropagation();
			});
		});
	}
	return this.instance;
};

lightshare.prototype.openHandler = function(obj) {
	var self = this;
	if(self.lastObj != obj) {			
		var url = $(obj).attr('data-url') || "";
		var copy = $(obj).attr('data-copy') || "";
		var via = $(obj).attr('data-via') || "";
				
	 	self.lastObj = obj;
	
		self.twitter.unbind();
		self.twitter.bind('click',function(e) {
			e.preventDefault();
			e.stopPropagation();
			var tweetUrl = "https://twitter.com/intent/tweet?source=lightshare";
			if(copy.length > 0) { tweetUrl += "&text="+copy; }
			if(url.length > 0) { tweetUrl += "&url="+url; }
			if(via.length > 0) { tweetUrl += "&via="+via; }
			window.open(tweetUrl,"_blank","status=0,toolbar=0,location=1,menubar=0,directories=0,resizable=0,scrollbars=0,height=240,width=640");
		});		
		var likeUrl = "https://www.facebook.com/plugins/like.php?href="+url+"&send=false&layout=button_count&width=100&show_faces=false&action=like&colorscheme=light&height=21&appId=258645120881596";
		self.facebook.css({'display':'none'});
		self.facebook.bind('load',function() {
			self.facebook.css({'display':'inline'});
		});
		self.facebook.attr('src',likeUrl);
	}
	if(self.isOpen == false) {
		self.isOpen = true;
		
		var offset = $(obj).offset();
		
		if($(self.lightshareDO).outerWidth()+offset['left'] > $(window).scrollLeft() + $(window).width()) { offset['left'] = $(window).scrollLeft() + $(window).width() -$(self.lightshareDO).outerWidth(); }
		if($(self.lightshareDO).outerHeight()+offset['top'] > $(window).scrollTop() + $(window).height()) { offset['top'] = $(window).scrollTop() + $(window).height() -$(self.lightshareDO).outerHeight(); }
		if(offset['left'] < $(window).scrollLeft()) { offset['left'] = $(window).scrollLeft(); }
		if(offset['top'] < $(window).scrollTop()) { offset['top'] = $(window).scrollTop(); }
		
		
		self.lightshareDO.css({'left':offset['left'],'top':offset['top']});
	}	
};

lightshare.prototype.closeHandler = function() {
	var self = this;
	self.isOpen = false;
	self.lightshareDO.stop().css({'top':-100});	
};

$(function() {
	lightshare.init();
});
