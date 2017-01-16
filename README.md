# SND

jQuery Audio Player.

## Usage

```
git clone git@github.com:casabeats/snd.git
```

or [download](https://github.com/casabeats/snd/archive/1.0.zip) or use the CDN:

```html
<script src="https://raw.githubusercontent.com/casabeats/snd/gh-pages/src/snd.min.js"></script>
```

Include jQuery and snd.min.js in your `head` tag:

```html
<script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="https://raw.githubusercontent.com/casabeats/snd/gh-pages/src/snd.min.js"></script>
```

Asign the plugin to an element in your HTML:

```javascript
$(document).ready(function() {
    $('.snd').snd('source/to/audio');
});
```

You can also specify multiple audio sources for a playlist:

```javascript
$(document).ready(function() {
    $('.snd').snd(['source/to/audio','source/to/audio','source/to/audio']);
});
```

And set an autoplay:
```javascript
$(document).ready(function() {
    $('.snd').snd('source/to/audio', { autoplay: true });
});
```

## Controls

A full player could look like this:

```html
<div class="snd">
    <div class="toggle">
        <button class="toggle-play">Play</button>
        <button class="toggle-pause">Pause</button>
    </div>
    <button class="prev">Prev</button>
    <button class="next">Next</button>
    <button class="shuffle">Shuffle</button>
    <input class="time" type="range" value="0" />
    <span class="currenttime">00:00</span>/
    <span class="duration">00:00</span>
    <p>Mute: <input class="mute" type="checkbox"/></p>
    <p>Loop: <input class="loop" type="checkbox"/></p>
    <ul class="playlist">
        <li class="playlist_item">Track 1</li>
        <li class="playlist_item">Track 2</li>
        <li class="playlist_item">Track 3</li>
    </ul>
</div>
```

### Play

```html
<button class="play">Play</button>
```

### Pause

```html
<button class="pause">Pause</button>
```

### Toggle

```html
<div class="toggle">
    <button class="toggle-play">Play</button>
    <button class="toggle-pause">Pause</button>
</div>
```

### Mute

```html
<input class="mute" type="checkbox"/>
```

### Loop

```html
<input class="loop" type="checkbox"/>
```

### Previous

```html
<button class="prev">Prev</button>
```

### Next

```html
<button class="next">Next</button>
```

### Shuffle

```html
<button class="shuffle">Shuffle</button>
```

### Time

```html
<input class="time" type="range" value="0" />
```

### Current time

```html
<span class="curenttime">00:00</span>
```

### Duration

```html
<span class="duration">00:00</span>
```

### Playlist

```html
<ul class="playlist">
    <li class="playlist_item">Track 1</li>
    <li class="playlist_item">Track 2</li>
    <li class="playlist_item">Track 3</li>
</ul>
```

The currently playing track gets the class `playing`:


```html
<ul class="playlist">
    <li class="playlist_item playing">Track 1</li>
    <li class="playlist_item">Track 2</li>
    <li class="playlist_item">Track 3</li>
</ul>
```

## Support/Bugs

If you find something weird just open a new issue on GitHub. You can also contact me via [email](mailto:hi@casabeats.com) if you have any problems using SND.