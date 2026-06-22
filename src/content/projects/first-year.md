---
title: "First Year Faffing Around"
description: "A honest look back at my first year of university — the bridges, the beams, the prints, and the software tools I built between classes."
tags: ["Mechanical Engineering", "3D Printing", "Python", "Raspberry Pi", "AI"]
image: "/images/projects/first-year/prints-selection.png"
imageAlt: "A selection of 3D printed objects from first year"
order: 10
draft: false
---

## Objective

To survive first year. Beyond that — to use the gaps between lectures, assignments, and tutoring sessions to actually *build* things, and see whether the theory I was studying held up in the real world.

This page is a retrospective of everything I made, broke, printed, and shipped during my first year of a double degree in Mechanical Engineering and Biomedicine at Monash University. None of it is perfect. All of it taught me something.

## Planning

First year didn't leave a lot of free time, so most of these projects were squeezed into evenings and the summer break. The common thread was a desire to connect coursework concepts — control systems, structural mechanics, additive manufacturing — to something tangible. I also wanted to explore software development and AI tooling beyond what was covered in the curriculum.

The projects that came out of this period were:

- A **ball balance beam** control system (mechanical + Raspberry Pi)
- A **VCE English trial exam generator** (Python + AI API)
- A set of **3D printing** explorations using my Bambu P1S
- Two **university team projects** — ENG1011 (bridge) and ENG1013 (multi-subsystem engineering system)

## Purpose

Each project served a different purpose:

The **ball balance beam** was a deliberate attempt to apply what I was learning in dynamics and control — PID loops, servo actuation, sensor feedback — in a physical system I designed and printed myself.

The **exam generator** came from a practical problem in my tutoring work. Writing custom VCE English trial exams by hand is time-consuming. I wanted to automate the repetitive parts while keeping the output educationally sound.

The **3D printing** work was partly hobby, partly skill-building — learning the nuances of FDM printing, tolerances, and design-for-manufacture by doing it repeatedly.

The **university projects** were team-based and assessed, but I took on leadership roles in both and treated them as genuine engineering exercises rather than just assignments to complete.

## Process

### Ball Balance Beam

The system balances a ping-pong ball along a V-shaped beam by adjusting the beam's angle via a high-torque hobby servo. A distance sensor at one end reads the ball's position; a Raspberry Pi runs a PID control loop and updates the servo command continuously.

All mechanical components — the beam, pivot housing, and sensor mount — were modelled and printed by me. The design process was iterative: I went through several versions before landing on a geometry that was stiff enough and printable without supports. One key lesson was the value of CAD assembly simulation — I wasted several prints on clearance issues that a virtual fit-check would have caught.

At the time of writing this portfolio, the mechanical assembly was complete. The sensor wiring, servo linkage, and PID implementation were still in progress.

![Ball balance beam assembly](/images/projects/first-year/beam-image.png)

### VCE English Trial Exam Generator

This is a Python application that generates structured VCE English trial exams in PDF format. A user inputs key parameters (text, section focus, difficulty signals), the application sends structured prompts to an LLM API, and the output is formatted into a print-ready PDF.

The project evolved significantly over 2025 — from a rough terminal script with a hardcoded API key to a cleaner application with a separated frontend and backend. I used GPT o3, o4-mini, and GPT-5.2 to accelerate development and troubleshoot edge cases, while writing the prompt architecture myself. Prompt design turned out to be the most technically demanding part: shaping the model's output to match VCAA's Section A, B, and C structure required careful iteration.

The MVP works. The known weaknesses are inconsistent image generation for Section A and occasional structural drift in Section C long-form responses — both targets for the next iteration, ahead of the 2025 VCE exam season.

**Skills developed:** Python, REST API integration, prompt engineering, PDF generation, basic frontend/backend structuring, iterative debugging.

![Exam generator interface](/images/projects/first-year/exam-generator-interface.png)

### 3D Printing

My Bambu P1S became a core tool this year rather than a novelty. Some highlights:

- **Self-modelled replacement peg** — a broken household item, measured by hand, modelled in CAD, printed and fitted. First time I closed the full design-to-use loop on something practical.
- **Headphone stand** — designed to fit my specific desk setup. Required two iterations to get the cable routing right.
- **Laptop stand** — ventilated, adjustable angle. Printed in PETG for rigidity.
- **Paper tray** — modelled with interlocking geometry; good practice for tolerances.
- **ENG1011 Golden Bridge components** — structural members printed in PLA, used in the university bridge project below.
- **Spool holder** from Makerworld — not self-modelled, but a useful community file that taught me how to evaluate and modify external STLs.

One consistent lesson: Bambu's slicer makes the print process smooth, but it doesn't remove the need to understand layer orientation, infill choices, and wall thickness for structural parts. I got that wrong a few times.

![Selection of 3D printed objects](/images/projects/first-year/prints-selection.png)

### ENG1011 — Bridge Project & ENG1013

The ENG1011 brief: design and build a bridge to span a set distance while passing beneath a height restriction. My team elected to use 3D-printed rod members for the main structural elements — partly to explore additive manufacturing in a structural context, partly to chase an optional design criterion.

I contributed to the planning, load calculations, member printing, and final assembly, and took on a coordination role within the team.

The bridge did not fail as predicted. The 3D-printed rods exhibited significant torsional flex under load — a behaviour we had not adequately modelled — which led to a failure mode different from our analysis. It didn't win any awards. It was, however, one of the more instructive failures of the year: real materials don't behave like textbook assumptions, and the gap between a calculation and a physical outcome is where most engineering actually happens.

ENG1013 involved designing, building, and integrating a multi-subsystem engineering system as a team. I again took on a leadership and coordination role, responsible for task allocation and keeping the five subsystems aligned across the group. My primary technical contribution was Subsystem 4, but I also spent significant time debugging across the other subsystems when integration issues emerged. The team achieved a High Distinction.

The main skill developed here wasn't technical — it was learning how to keep a group of people with different working styles and skill levels moving toward the same outcome under a deadline. That's harder than it sounds.

![Bridge load testing and ENG1013 system](/images/projects/first-year/bridge and eng1013.png)

## Results & Accomplishments

- Delivered a functional (MVP) VCE exam generator used in active tutoring sessions
- Designed and printed all mechanical components for a PID-controlled balance beam
- Built a working 3D printing workflow producing functional, daily-use objects
- Led two university team projects, contributing to a High Distinction in ENG1013
- Developed a clearer picture of where my interests sit: at the intersection of mechanical systems, software, and AI tooling

## Further Research & Development

The ball balance beam is the most obvious next step — getting the sensor wiring, servo linkage, and PID loop running. Once the basic loop is stable, I'd like to experiment with different control strategies and potentially add a camera-based position sensor.

The exam generator needs prompt refinement for Section C consistency and a cleaner UI before it's ready to share publicly.

More broadly, first year showed me that I work best when I'm building toward something real. The projects that held my attention longest were the ones with a clear user (even if that user was just me), a physical or functional output, and enough complexity to require genuine problem-solving. That's the filter I'll apply to projects going forward.
