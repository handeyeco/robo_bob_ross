var quoteGen = {

	quotes: [
		"In painting, you have unlimited power. You have the ability to move mountains. You can bend rivers.",
		"Remember our Golden Rule: a thin paint sticks to a thick paint.",
		"You know me, I gotta put in a big tree.",
		"Gotta give him a friend. Like I always say, everyone needs a friend.",
		"We don't know where it goes. We don't really care.",
		"Any time you learn, you gain.",
		"Any way you want it to be, that's just right.",
		"Clouds are very, very free.",
		"Just beat the devil out of it.",
		"Scrape in a few indications of sticks and twigs and other little things in there. People will think you spend hours doing this.",
		"Little raccoons and old possums 'n' stuff all live up in here. They've got to have a little place to sit.",
		"People might look at you a bit funny, but it's okay. Artists are allowed to be a bit different.",
		"Talk to the tree, make friends with it.",
		"That's a crooked tree. We'll send him to Washington.",
		"Try to imagine that you are a tree. How do you want to look out here?",
		"We don't make mistakes, we just have happy accidents.",
		"We want happy paintings. Happy paintings. If you want sad things, watch the news.",
		"We're gonna make some big decisions in our little world.",
		"You can do anything you want to do. This is your world.",
		"This is the hardest part of this method. If you can do this, you can do anything."
	],

	returnQuote: function () {
		var num = Math.floor(Math.random() * this.quotes.length);
	  return "<div class=\"quote\"><i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i> " + this.quotes[num] + "</div>"
	},

	twit: function (quote) {
		var twitURL = "https://twitter.com/intent/tweet?text=";
  	quote = quote.split(" ").map(function (e) {
    	return e.replace(/\./g, "%2E").replace(/\'/g, "%27").replace(/\,/g, "%2C").replace(/\:/g, "%3A").replace(/\?/g, "%3F");
  	}).join("%20");
  	return twitURL + quote + "&hashtags=BobRoss";
	}

};

var pageSetup = {

	colors: ["#CBF6FF", "#FDA8A8", "#A8FDBF", "#D5CBFF"],

	returnColor: function () {
		var num = Math.floor(Math.random() * this.colors.length);
		return this.colors[num];
}

};

//"<div class=\"quote\"><i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> " + quotes[randomQuoteNum] + " <i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i></div>"

$(function() {
	$("#quote_display").html(quoteGen.returnQuote());

	$(".new_quote").click(function () {
		$("#quote_box").fadeOut(function () {
			var currentColor = pageSetup.returnColor();
			$("#quote_display").html(quoteGen.returnQuote());
			$("body").animate({backgroundColor: currentColor});
			$(".new_quote").animate({borderColor: currentColor});
			$(".fa-quote-right").animate({color: currentColor});
		}).fadeIn();
		$("#social").fadeOut().fadeIn();
	});
})









