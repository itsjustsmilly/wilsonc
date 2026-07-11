---
title: "Refined VCE English System"
description: "An AI-powered exam generator and essay marking platform built for my VCE English students, encoding my actual tutoring rubric into a 20-criterion, 100-point marking pipeline."
tags: ["AI", "Flask", "LLM Agents", "Python"]
image: "/images/projects/vce-english-system/interface-overview.png"
imageAlt: "VCE English System interface overview"
order: 5
draft: false
---

## Objective

I tutor a lot of VCE English students. Every one of them deserves detailed, criterion-by-criterion feedback on every essay they write, not just a score and a rushed comment at the end of a session. In practice, that's not sustainable. There are only so many hours in a week, and hand-marking a full essay against a proper rubric takes real time, time I don't always have when I'm juggling several students' worth of work.

So I asked myself the obvious question: what if the marking standard I already use, the one built up over actual tutoring experience, could be encoded and applied consistently, on demand, without me being the bottleneck? That's what this project became. Not a shortcut around teaching, but a preliminary diagnostic for my students to bring questions and thoughts into our one-on-one sessions.

## Planning

Before writing a line of code, I sat down and wrote out my actual marking rubric, the one in my head, the one I use when I'm marking by hand, as an explicit, 20-criterion, 100-point document, with real worked examples at every score level from 0 to 5. That took longer than I expected, and it was uncomfortable in places, because writing down exactly *why* something is a 3 and not a 4 forces you to be honest about your own standards in a way that marking on instinct doesn't.

I also decided early on that this couldn't be one big prompt asking an AI to "mark this essay." I've read enough AI-marked feedback to know how generic it gets when you ask for too much at once. So I designed it as a pipeline instead: separate steps for generating an exam, checking its quality, and then marking each of the twenty criteria on its own, with evidence required every time.

![Exam generator interface](/images/projects/vce-english-system/exam-generator.png)

## Purpose

The honest purpose is this: I wanted my students to get better feedback more often, and I wanted to stop being the reason they didn't. If a student finishes a practice essay at 11pm the night before a SAC, I'm not always awake, and even if I am, marking one essay properly against my full rubric can take 20 to 30 minutes of undivided attention. This platform does that in about a minute, and it does it in the way that I would, because I'm the one who wrote the standards.

There's a second, more personal purpose too. I wanted to prove to myself I could take something that started as "wouldn't it be nice if," and actually carry it through: real spec, real build, real deployment, real students using it. Not a script that runs once on my laptop.

![Marking rubric view](/images/projects/vce-english-system/marking-rubric.png)

## Process

**Generation pipeline.** Each exam gets built through a chain of steps: pull relevant conventions from a library of real past VCE exams I fed into a searchable knowledge base, draft a brief (the issue, the author, the audience, how the argument should develop), write the full text, and then run it back through an automated quality check before it's ever shown to a student. The check looks for things like a genuine tonal shift, at least one concession, and nothing that reads like generic AI writing. If it fails, it gets revised. I also varied the visual style deliberately, because real VCE visuals are cartoons and photographs and posters, not always a tidy infographic. Text Response and Framework of Ideas generation is still in progress; the more pressing development is Argument Analysis, which is the harder one to get right.

**Marking engine, and the part I'm proudest of.** The first version of the rubric, marked by the AI, was way too generous. I gave it three real student essays I already had a strong instinct about: one I'd have called a mid-60s, one closer to 50, one genuinely weak. The AI gave them 90%, 85%, and 50%. That gap bothered me enough that I didn't just tweak the prompt and hope. I went back into the actual stored data and read what the AI had written as its own justification for each score. What I found was almost funny in hindsight: for a criterion about explaining how a piece of writing makes the reader feel something, the AI had rewarded a sentence like *"this makes the audience agree with her"*, which is exactly the kind of vague, hollow sentence I'd mark down in real life, not up. It was pattern-matching the shape of good analysis, not the substance of it.

So I rewrote the rubric myself, this time with explicit examples of exactly that trap at every score level, so there was no ambiguity left for the model to exploit. I also found a second, quieter bug: I'd been asking the AI for its score before asking it to explain its reasoning, which meant it was picking a number first and justifying it afterwards, backwards from how I'd want a real assessor to work. I reordered it so the reasoning had to come first. Between those two fixes, the same essays dropped from 90% to 73%, closing in on where I'd actually put them. It's not perfect yet, but it moved in the right direction because I diagnosed it properly instead of guessing.

**Making it actually usable.** I added real accounts for my students: names, passwords, each person's data kept completely separate from everyone else's, including their own personal rubric weightings if they want to emphasise something differently. I also built a way for a student to upload their own source material and get the same rubric-based marking on an essay they wrote for it, not just for AI-generated exams.

**Putting it somewhere real.** I didn't want this sitting on my laptop, so I bought a domain and put it on a proper server, one with actual persistent storage. A lot of the free hosting options wipe your database every time you update the code, which would have meant losing every student's progress on every improvement I made. Getting it live meant learning the unglamorous parts of running a real service: cloud networking, two separate firewalls I had to configure correctly before anything worked, setting up HTTPS properly, and catching a genuine security mistake (a secret key that had accidentally been set to something that looked like a real API credential) before any of it went near a public GitHub repository.

![Student results dashboard](/images/projects/vce-english-system/student-results.png)

## Results

It's live at **essaylenswc.org**, and my students can actually log in and use it. That's the part I care about most, not that it exists, but that it's genuinely doing the job I built it for.

- A working exam generator and marking engine, live and in use, not a local demo
- A real, caught, and fixed grading-accuracy problem, with the before-and-after numbers to show it was fixed for a reason, not by luck
- Every student's essays and progress kept private to them, the way it should be
- A deployment I set up and understand end to end, not something I clicked a button for

## Further Development

The marking still isn't as precise as I want it to be. The next real step is feeding it actual annotated student essays, the ones I've marked by hand over the years, so it has real calibration examples to learn from, not just written descriptions of what a 3 looks like versus a 4. I also want to build out the other two VCE English sections, Text Response and Framework of Ideas, which are sitting there as "coming soon" right now. And now that the whole thing isn't tied to one AI provider, I'd like to experiment with whether a different model gets me closer to how I'd actually mark, for less money per essay.
