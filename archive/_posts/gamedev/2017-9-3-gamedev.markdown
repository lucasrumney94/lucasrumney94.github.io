---
layout: post
title:  "Game Dev: unofficial GameBoy jam"
date:   2017-9-3 16:58:38 -0500
categories: gamedev
---

![GBJAM]({{site.url}}/assets/gamedev/GBJAM2017.png){: .center-image .width-fifty}

**Project Rules**

1. Create a GameBoy themed game!

2. Keep to the original GameBoy screen resolution of 160px by 144px.

3. Use only 4 colors in your game.

4. Use new assets for the game (no reusing old stuff!).

5. Have fun! Learn new things!

<iframe width="100%" frameborder="0" src="https://itch.io/embed/173372"></iframe>

<br/>
**Dev Log**

![ball]({{site.url}}/assets/gamedev/ball.png){: .center-image .width-fifty}

The first step in this game jam was to try and come up with an idea that would work with the limited resolution
and color palette available to me. To do this, I used a sticky note system for brainstorming ideas quickly. If an idea
couldn't fit easily onto a sticky note, it was probably too complex for this game jam.

I knew initially that I wanted to do a 3D game, and make use of a [GameBoy Shader by RogueNoodle][gbshader]. I did this
primarily because I was only going to spend 2 days on this project and generating 2D assets for Unity
in a pixel style that is consistent with the GameBoy would be out of scope for my timeframe.

My idea is a fetch game called BALL!. You are a dog with your Owner at a park in the middle of a city. Dogs supposedly see
the world in black and white, so I wanted to play with that motif in a GameBoy style. Objects that are important (to a dog) are highlighted in
the brightest color, while other less important objects are darker.
The buildings are just large monoliths with no details. I was imagining that a dog doesn't
really see a building with all the human-centric details, but instead just sees huge cubes. These simple silhouettes would
also allow a player to locate themselves relatively in the field. The noisy floor texture, as well as the placement of sparse flora was necessary so that a player could have a reference for their movement speed.

I wanted the owner to be a robot whose actions were simple enough that a player could understand them quickly, while also prompting a player to think about the reduced avenues of communication that dog owners have with their pets. All the dog hears and sees sometimes must be the FETCH's and the GOOD BOY's, but there is still a great bond between dog and owner.

One thing that I wanted to focus on was the vision I had for the Title Screen. I have fond memories of the epic and tiny title screens of games on my GameBoy and GameBoy Advance, whose sound effects and music always made me feel like it was the beginning to something large. I tried to emulate that by practicing using Unity's animation Sytem. Synchronizing sound effects within the animation system was a new thing I have never tried before.

<br/>
**Hindsight**

In hindsight I would have definitely liked to have added more messages and more "Game" behind this. I prioritized getting sound into this game, which meant that the time I had to develop game features was reduced. I feel comfortable with this decision because although it lacks much content, this game has more feel to it. It feels more like a little hand-crafted experience to me, which is something I want to maintain no matter the scale of the project.

<br/>
**Future**

If I were to continue working on this project in the future the possible features could be:

- Each ball collected could grant the user extra score or speed
- The time it takes to fetch a ball could inversely factor into the earned score
- A treat dispenser on the side of the owner that makes a dot matrix printing sound
- Write or use an existing shader that colors edges to be able to control outlines and face color.
- Add cars and city noises that could be heard if the player goes close to the edge of the park.



[gbshader]: https://roguenoodle.itch.io/gbcamera-for-unity
