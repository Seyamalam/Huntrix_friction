# I Built an AI Pipeline for Kindle Highlights

Source: https://towardsdatascience.com/i-built-an-ai-pipeline-for-kindle-highlights/

I read, I like to highlight stuff (I use a Kindle). I feel like by reading I don’t get to retain more than 10% of the information I consume but it’s through re-reading the highlights or summarizing the book using them is what makes me actually understand what I read.

The problem is that, sometimes, I end up highlighting a lot.

And by a lot I mean A LOT. We cannot even call them “key notes.”

So in those cases, after reading the book, I end up either wasting a lot of time summarizing or just quit doing it (the latter is the more common).

I recently read a book that I enjoyed quite a lot and would like to fully retain what struck me the most. But, again, it was one of those books I over-highlighted.

And I didn’t want to use a lot of my scarce free time on it. So I decided to automate the process and use my tech/data skills. Because I’m happy with the result, I thought I’d share it so anyone interested can take advantage of this tool as well.

Disclaimer: my Kindle is quite old so this should work on new ones as well. In fact, there’s a slightly better approach for new Kindle versions (explained also in this post).

Let’s define the goal: generate a summary from our Kindle highlights.

As I thought about it, I imagined the following simple pipeline for a single book:

The result is different on the first part, but all due to the preprocessing needed taking into account how the data is structured.

So I’ll structure this post into two main sections:

My intuition told me there was a way to extract highlights from my Kindle. In the end, they’re stored there, so I just need a way to get them out.

There are several ways to do it but I wanted an approach that worked with both books bought on the official Kindle store but also PDFs or files I sent from my laptop.

And I also decided I wouldn’t use any existing software to extract the data. Just my ebook and my laptop (and a USB connecting them both).

Luckily for us, no jailbreak is needed and there are two ways of doing so depending on your Kindle version:

In this post I’ll be using method 1 (My Clippings.txt) mainly because my Kindle doesn’t have the annotations.db database. But if you’re lucky enough to have the DB, use it as it’ll be more straightforward and higher quality (most of the preprocessing we’ll be seeing next won’t probably be needed).

So getting the clippings is as easy as reading the TXT. Here are some key aspects and problems I encountered using this method:

And this is the anatomy of a clipping:

So the first step is parsing the highlights, and this is where we start seeing Python code:

Given the path of the clippings file, all this function does is split the text into the different entries and then loop through them. For each entry, it extracts the title name, the location and the highlighted text.

This final structure (a list of dictionaries) makes it easy to filter by book:

Once filtered, we must order the highlights. Since clippings are appended to the TXT file, the order is based on when we highlight, not on the text’s location.

And I personally want my results to appear as they do in the book, so ordering is necessary:

Now, if you check your clippings file, you might find duplicated clippings (or duplicated subclippings). This happens because any time you edit a highlight (that you’ve failed to include all the words you aimed at, for example), it’s accounted as a new one. So there will be two very similar clippings in the TXT. Or even more if you edit it a lot of times.

We need to handle this by applying a deduplication somehow. It’s easier than expected:

It’s very simple and could be perfected, but we basically check if there are consecutive clippings with the same text (or part of it) and keep the longest.

Right now we have the book highlights properly sorted, and we could stop the pre-processing here. But I can’t do that. I like to highlight titles every time because, when summarizing, I get to properly assign a section to each highlight.

But our code isn’t able to differ between a real highlight and a section title… Yet. See below:

It can seem pretty arbitrary, and it’s not the best solution to this problem, but it does work quite well. It uses a heuristic based on capitalization, length, stopwords and prefixes.

This function is called inside a loop through all the highlights, as we’ve seen in previous functions, to check if a highlight is a title or not. The result is a “sections” list of dictionaries where the dictionary has two keys:

Right now, yes, we’re ready to summarize.

I wanted this to be a free project, so we need an AI model that’s open source.

I thought that Ollama [1] was one of the best options to run a project like this (at least locally). Plus, our data always remain ours with them and we can run the models offline.

Once installed, the code was easy. I’m not a prompt engineer so anyone with the know-how would get even better results, but this is what works for me:

Simple, I know. But it works partly because the data preprocessing has been intense but also because we’re already leveraging the models built out there.

But what do we do with the summary? I like using Obsidian [2] so exporting a Markdown file is what makes more sense. Here you have it:

Et voilà.

And this is how I go from highlights to a full Markdown summary (straight to Obsidian if I want to) with less than 300 lines of Python code!

Here’s the full code, just in case you want to copy-paste it. It contains what we’ve seen plus some helper functions and argument parsing:

But let’s see how it works! The code itself is useful but I bet you’re willing to see the results. It’s a long one so I decided to delete the first part as all it does is just copy-paste the highlights.

I randomly chose a book I read like 6 years ago (2020) called Talking to Strangers by Malcolm Gladwell (a bestseller, pretty enjoyable read). See the model’s printed output (not the Markdown):

And all this within a few seconds. Quite cool in my opinion.

And that’s basically how I’m now saving a lot of free time (that I can use to write posts like this one) by leveraging my data skills and AI.

I hope you enjoyed the read and felt motivated to give it a try! It won’t be better than the summary you’d write with your own perception of the book… But it won’t be far from that!

Thank you for your attention, feel free to comment if you have any ideas or suggestions!

[1] Ollama. (n.d.). Ollama. https://ollama.com

[2] Obsidian. (n.d.). Obsidian. https://obsidian.md