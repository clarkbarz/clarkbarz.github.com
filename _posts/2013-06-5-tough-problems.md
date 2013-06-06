---
layout: post
title: Tough Problems
---

Phew.

The past half-week was a trip back to my days (rather, nights) in the W&M computer lab, going over lines of code in an effort to get tests passing. It was one small group of tests validating user sign in that was proving to be the most insurmountable obstacle. I felt like I had gone over code for the sessions controller and sessions helper at least ten times when, on the eleventh, I found my problem:

	user = User.find_by(email: params[:session][:email].downcase)
	if user && user.authenticate(password: params[:session][:password])
  		sign_in user
  		redirect_to user
	else
  		flash.now[:error] = 'Invalid email/password combination'
  		render 'new'
	end

Can you spot it? It turns out the <code>authenticate()</code> method only accepts one argument whereas I was giving it a hash. The line of code that got five of tests passing and everything running smooth just needed one less symbol:

	if user && user.authenticate(params[:session][:password])

Joyous celebration ensued and many a champagne bottles were popped and development was set to commence smoothly when I ran into my second problem today.

This one had little to do with my code and a lot to do with my decision to break the chains of sqlite and ascend into the greatness that is postgresql. That meant upgrading my app to use postgresql for my development and test databases in the process (production db hosted on heroku was already using pgsql), and more time spent away from actual development.

I ended up learning the hard way that OS X Mountain Lion doesnt like working with postgresql very much. I spent hours navigating directories in the usually forbidden /usr, /bin, and /var folders as well as websites and stack overflow answers searching for rememdies to both make my postgres install work and make it work with Rails.

It was one of those problems where you don't really know how you got to the solution, but in the end, everything works and you're content, at the very least. In the end, it was one of those problems that forces you to appreciate the easier ones and getting back to actual development.